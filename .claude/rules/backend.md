# Backend Rules

Applies to all work inside `backend/`.

## Folder layout (src/ is root)

```
src/
├── server.ts          process.loadEnvFile() FIRST line, then bootstrap
├── app.ts             Express setup only — no business logic
├── config/env.ts      Frozen ENV object — read from here, never process.env directly
├── lib/               mongoose.ts · redis.ts — connection helpers only
├── models/            Mongoose schemas + model export
├── routes/index.ts    mounts /api, health at /api/health
├── routes/v1/         versioned routers — one file per domain
├── controllers/       catchAsync-wrapped handlers — thin, delegate to service
├── services/          business logic — coordinates cache + repository
├── repository/        all Mongoose queries — no model calls outside here
├── cache/             Redis get/set/del — TTL logic lives here
├── schemas/           Zod schemas for input validation
├── middleware/        catch-async · input-validator · error.middleware
├── errors/            app-error · validation.error · mongo.error
├── utils/             response.ts (SuccessResponse / ErrorResponse)
└── types/             express.d.ts augmentation · common.ts (TypedRequest etc.)
```

## Absolute rules

- `process.loadEnvFile('.env')` must be the **first line** of `server.ts` — never dotenv
- Never call `process.env.*` directly — always import from `src/config/env.ts`
- Every controller export **must** be wrapped in `catchAsync`
- Zod validation **must** happen via `zodValidator(schema)` middleware on the route — never inside controllers or services
- All Mongoose queries live in `repository/` — services never call models directly
- All Redis operations live in `cache/` — services import cache helpers, not `redis` directly
- Route versioning: all routes under `/api/v1/`
- `throw new AppError(message, statusCode)` — never `res.status().json()` for errors in services
- `SuccessResponse` / `ErrorResponse` from `src/utils/response.ts` — never raw `res.json()`

## Patterns

### Controller
```ts
export const create = catchAsync(async (req: TypedRequest<MyInput>, res) => {
  const result = await myService.doThing(req.validatedData.body);
  SuccessResponse(res, 'Done', result, StatusCodes.CREATED);
});
```

### Service
```ts
export async function getItem(id: string) {
  const cached = await myCache.get(id);
  if (cached) return cached;
  const item = await myRepository.findById(id);
  if (!item) throw new AppError('Not found', StatusCodes.NOT_FOUND);
  await myCache.set(item);
  return item;
}
```

### Route
```ts
router.post('/', zodValidator(CreateSchema), controller.create);
router.get('/:id', zodValidator(GetSchema), controller.getById);
```

### Zod schema shape
```ts
export const CreateSchema = z.object({
  body:   z.object({ ... }),
  params: z.object({ ... }).optional(),
  query:  z.object({ ... }).optional(),
});
```

## Error handling

- `AppError` — for known business errors (not found, conflict, bad request)
- `globalErrorHandler` in `middleware/error.middleware.ts` handles all errors
- Handler order: `handleValidationError` → `handleMongoError` → fallback
- Dev: stack trace included in response meta. Prod: omitted

## Status codes

Always use `StatusCodes` from `http-status-codes` — never raw numbers.

## TypeScript

- `strict: true` — no implicit `any`
- Use `TypedRequest<TBody, TParams, TQuery>` for typed controller params
- Mongoose documents: use `.lean<IModel>()` in repositories

## Build

- Dev: `npm run dev` (tsx watch, port 4000)
- Build: `npm run build` (tsup → dist/)
- Lint: `npx biome check src/`

## Audit tool hard rules (from CLAUDE.md)

- Puppeteer: BullMQ worker ONLY — never in main Express process
- PSI: both mobile + desktop in parallel via `Promise.all`
- Webhook: fires after lead saved; failure logs but never throws
- Redis TTL: 30 min for audit results
- Broken links: max 20, concurrency 5, timeout 3s
