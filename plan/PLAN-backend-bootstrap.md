# PLAN — Backend Bootstrap

**Status:** Awaiting approval  
**Branch:** `feature/backend-bootstrap`  
**Target:** `backend/` — Express + TypeScript, MongoDB/Mongoose, Redis, tsup

---

## Folder Structure

```
backend/
├── src/                        ← root of all source
│   ├── app.ts                  ← Express app (no listen)
│   ├── server.ts               ← process.loadEnvFile() + app.listen()
│   │
│   ├── config/
│   │   └── env.ts              ← frozen ENV object (process.loadEnvFile lives in server.ts)
│   │
│   ├── lib/
│   │   ├── mongoose.ts         ← connectDB() — mongoose.connect()
│   │   └── redis.ts            ← createRedisClient() — ioredis instance
│   │
│   ├── routes/
│   │   ├── index.ts            ← mounts /api/v1
│   │   └── v1/
│   │       ├── index.ts        ← aggregates all v1 routers
│   │       └── audit.routes.ts ← example domain routes
│   │
│   ├── controllers/
│   │   └── audit.controller.ts ← thin: validate → service → respond
│   │
│   ├── services/
│   │   └── audit.service.ts    ← business logic
│   │
│   ├── repository/
│   │   └── audit.repository.ts ← all Mongoose queries live here
│   │
│   ├── cache/
│   │   └── audit.cache.ts      ← Redis get/set/del for audit results
│   │
│   ├── middleware/
│   │   ├── catch-async.ts      ← catchAsync wrapper
│   │   ├── error.middleware.ts ← globalErrorHandler (4-arg)
│   │   ├── input-validator.ts  ← zodValidator middleware
│   │   └── index.ts            ← barrel
│   │
│   ├── errors/
│   │   ├── app-error.ts        ← AppError class
│   │   ├── validation.error.ts ← handleValidationError (ZodError → user-friendly)
│   │   ├── mongo.error.ts      ← handleMongoError (maps MongoError codes)
│   │   └── index.ts            ← barrel
│   │
│   ├── utils/
│   │   ├── response.ts         ← SuccessResponse / ErrorResponse
│   │   └── index.ts
│   │
│   ├── types/
│   │   ├── express.d.ts        ← augment Request (validatedData, user, etc.)
│   │   └── common.ts           ← TypedRequest<T>, shared type aliases
│   │
│   └── schemas/                ← Zod schemas (one file per domain)
│       └── audit.schema.ts
│
├── dist/                       ← tsup output (gitignored)
├── .env                        ← gitignored
├── .env.example
├── biome.json
├── tsconfig.json
├── tsup.config.ts
└── package.json
```

---

## File Contracts

### `server.ts`
```ts
process.loadEnvFile();          // must be FIRST line — no dotenv
import { ENV } from './config/env';
import app from './app';
import { connectDB } from './lib/mongoose';
import { redis } from './lib/redis';

async function bootstrap() {
  await connectDB();
  app.listen(ENV.PORT, () =>
    console.log(`[server] listening on :${ENV.PORT}`)
  );
}

bootstrap().catch((err) => {
  console.error('[server] fatal:', err);
  process.exit(1);
});
```

### `config/env.ts`
```ts
// process.loadEnvFile() is called in server.ts before this module loads
export const ENV = Object.freeze({
  PORT:         Number(process.env.PORT) || 4000,
  NODE_ENV:     process.env.NODE_ENV || 'development',
  MONGO_URI:    process.env.MONGO_URI!,
  REDIS_URL:    process.env.REDIS_URL || 'redis://localhost:6379',
  PSI_API_KEY:  process.env.PSI_API_KEY || '',
});
```

### `lib/mongoose.ts`
```ts
import mongoose from 'mongoose';
import { ENV } from '../config/env';

export async function connectDB() {
  await mongoose.connect(ENV.MONGO_URI);
  console.log('[mongo] connected');
}
```

### `lib/redis.ts`
```ts
import Redis from 'ioredis';
import { ENV } from '../config/env';

export const redis = new Redis(ENV.REDIS_URL);
```

---

## Middleware Layer

### `middleware/catch-async.ts`
Wraps any async route handler — forwards thrown errors to `next()`.  
Signature mirrors TeacherDekho: `catchAsync(fn) → RequestHandler`

```ts
import { Request, Response, NextFunction, RequestHandler } from 'express';

export function catchAsync<T extends Request = Request>(
  fn: (req: T, res: Response, next: NextFunction) => Promise<unknown>
): RequestHandler {
  return (req, res, next) => {
    fn(req as T, res, next).catch(next);
  };
}
```

**Every controller method is wrapped with `catchAsync`.**

### `middleware/input-validator.ts`
Validates `body / params / query` against a Zod schema at route level.  
Writes coerced values back to `req.body`, `req.params`, `req.query`.  
On failure passes `ZodError` to `next()` — handled by `globalErrorHandler`.

```ts
import { ZodSchema } from 'zod';
import { Request, Response, NextFunction, RequestHandler } from 'express';

export const zodValidator = (schema: ZodSchema): RequestHandler =>
  (req, res, next) => {
    const result = schema.safeParse({
      body:   req.body   ?? {},
      params: req.params,
      query:  req.query,
    });
    if (!result.success) return next(result.error);
    const d = result.data as any;
    if (d.body)   req.body = d.body;
    if (d.params) Object.assign(req.params, d.params);
    if (d.query)  Object.assign(req.query,  d.query);
    (req as any).validatedData = result.data;
    next();
  };
```

### `middleware/error.middleware.ts`
Four-argument Express error handler — must be last `app.use()`.

```ts
export const globalErrorHandler = (err, req, res, next) => {
  if (handleValidationError(err, res)) return;   // ZodError
  if (handleMongoError(err, res))      return;   // MongoServerError

  const status = err.statusCode ?? 500;
  const msg    = err.message    ?? 'Internal Server Error';

  return ErrorResponse(res, msg, err.errors ?? [], status,
    ENV.NODE_ENV === 'development' ? { stack: err.stack } : null
  );
};
```

---

## Error Utilities

### `errors/app-error.ts`
```ts
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode = 500,
    public data?: Record<string, unknown>
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
  }
}
```

### `errors/validation.error.ts`
- `handleValidationError(err, res): boolean`  
- Detects `ZodError`, maps each issue to a human-readable string  
- Returns `ErrorResponse` with status 400, first message as top-level message  
- Returns `true` (handled), `false` (not a ZodError — keep going)

### `errors/mongo.error.ts`
- `handleMongoError(err, res): boolean`  
- Handles `MongoServerError` codes:  
  - `11000` → 409 Conflict "A record with this value already exists"  
  - `ValidationError` → 400 Bad Request  
  - default → 500

---

## Response Utilities — `utils/response.ts`

```ts
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';  // npm: http-status-codes

export const SuccessResponse = (
  res: Response,
  message: string,
  data: unknown,
  statusCode: StatusCodes = StatusCodes.OK,
  meta: unknown = null
) =>
  res.status(statusCode).json({
    success: true,
    message,
    data,
    ...(meta && { meta }),
  });

export const ErrorResponse = (
  res: Response,
  message: string,
  errors: unknown[] = [],
  statusCode: StatusCodes = StatusCodes.BAD_REQUEST,
  meta: unknown = null
) =>
  res.status(statusCode).json({
    success: false,
    message,
    errors,
    ...(meta && { meta }),
  });
```

> **npm package for status codes:** `http-status-codes`  
> Import: `import { StatusCodes } from 'http-status-codes'`  
> Usage: `StatusCodes.OK`, `StatusCodes.NOT_FOUND`, `StatusCodes.CREATED`, etc.

---

## Route Versioning

```
GET  /api/v1/...
POST /api/v1/...
```

```ts
// routes/index.ts
import v1 from './v1';
router.use('/api/v1', v1);

// routes/v1/index.ts
router.use('/audit', auditRoutes);

// routes/v1/audit.routes.ts
router.post('/',       zodValidator(CreateAuditSchema), auditController.create);
router.get('/:id',    zodValidator(GetAuditSchema),    auditController.getById);
router.post('/:id/unlock',                             auditController.unlock);
```

---

## Controller Pattern

```ts
// controllers/audit.controller.ts
import { catchAsync } from '../middleware';
import { auditService } from '../services/audit.service';
import { SuccessResponse } from '../utils/response';
import { StatusCodes } from 'http-status-codes';

export const create = catchAsync(async (req, res) => {
  const result = await auditService.runAudit(req.validatedData.body);
  SuccessResponse(res, 'Audit complete', result, StatusCodes.CREATED);
});

export const getById = catchAsync(async (req, res) => {
  const result = await auditService.getAudit(req.params.id);
  SuccessResponse(res, 'Audit fetched', result);
});
```

No class, no DI container — plain exported functions.

---

## Service → Repository → Cache

```
Controller  →  Service  →  Cache (check first)
                         ↘  Repository (if cache miss)
                              ↘  Mongoose model
```

- **Service** owns business logic, coordinates cache + repo
- **Repository** owns all Mongoose queries — no direct model calls from service
- **Cache** owns all Redis TTL logic — redis.get / set / del

```ts
// services/audit.service.ts
export async function getAudit(id: string) {
  const cached = await auditCache.get(id);
  if (cached) return cached;
  const result = await auditRepository.findById(id);
  if (!result) throw new AppError('Audit not found', StatusCodes.NOT_FOUND);
  await auditCache.set(id, result);
  return result;
}
```

---

## Types

### `types/express.d.ts`
```ts
import { ZodSchema } from 'zod';

declare global {
  namespace Express {
    interface Request {
      validatedData: {
        body:   unknown;
        params: unknown;
        query:  unknown;
      };
    }
  }
}
```

### `types/common.ts`
```ts
import { Request } from 'express';

export type TypedRequest<TBody = unknown, TParams = unknown, TQuery = unknown> =
  Request & {
    validatedData: {
      body:   TBody;
      params: TParams;
      query:  TQuery;
    };
  };
```

---

## Build — `tsup.config.ts`

```ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry:   ['src/server.ts'],
  outDir:  'dist',
  format:  ['cjs'],
  target:  'node20',
  clean:   true,
  sourcemap: true,
});
```

### `package.json` scripts
```json
{
  "scripts": {
    "dev":   "tsx watch src/server.ts",
    "build": "tsup",
    "start": "node dist/server.js"
  }
}
```

---

## Core Dependencies

| Package | Purpose |
|---|---|
| `express` | HTTP server |
| `mongoose` | MongoDB ODM |
| `ioredis` | Redis client |
| `zod` | Input validation |
| `http-status-codes` | Status code constants |
| `tsup` | Build bundler |
| `tsx` | Dev runner (ts-node alternative) |
| `typescript` | Type system |
| `@types/express` | Express types |
| `biome` | Linting/formatting (already in project) |

---

## `.env.example`

```bash
PORT=4000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/zonet_ai
REDIS_URL=redis://localhost:6379
PSI_API_KEY=
GOOGLE_SHEETS_WEBHOOK_URL=
```

---

## Implementation Order

1. `package.json` + `tsconfig.json` + `tsup.config.ts` + `biome.json`
2. `src/config/env.ts`
3. `src/lib/mongoose.ts` + `src/lib/redis.ts`
4. `src/errors/` (AppError → validation → mongo)
5. `src/utils/response.ts`
6. `src/types/`
7. `src/middleware/` (catchAsync → zodValidator → globalErrorHandler)
8. `src/app.ts`
9. `src/server.ts`
10. `src/routes/` (versioned shell — v1 index with no-op healthcheck)
11. First domain slice: `audit.schema.ts` → `audit.repository.ts` → `audit.cache.ts` → `audit.service.ts` → `audit.controller.ts` → `audit.routes.ts`

---

## What's NOT in this plan

- Auth / JWT / sessions (separate plan when needed)
- BullMQ workers (separate plan — already scoped to `src/workers/`)
- Puppeteer scrapers (separate plan — BullMQ worker only per CLAUDE.md)
- Mongoose models (created per-domain alongside each repository)
