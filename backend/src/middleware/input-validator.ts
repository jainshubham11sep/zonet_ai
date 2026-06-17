import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ZodSchema } from 'zod';

export const zodValidator = (schema: ZodSchema): RequestHandler =>
  (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body ?? {},
      params: req.params,
      query: req.query,
    });

    if (!result.success) return next(result.error);

    const d = result.data as Record<string, unknown>;
    if (d.body) req.body = d.body;
    if (d.params) Object.assign(req.params, d.params);
    if (d.query) Object.assign(req.query, d.query);
    (req as Request & { validatedData: unknown }).validatedData = result.data;

    next();
  };
