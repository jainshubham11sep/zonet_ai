import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ENV } from '../config/env';
import { handleMongoError, handleValidationError } from '../errors';
import { ErrorResponse } from '../utils';

export const globalErrorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('[error]', err);

  if (handleValidationError(err, res)) return;
  if (handleMongoError(err, res)) return;

  const e = err as {
    statusCode?: number;
    message?: string;
    errors?: unknown[];
    stack?: string;
    data?: unknown;
  };
  const statusCode = e.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR;
  const message = e.message ?? 'Internal Server Error';

  ErrorResponse(
    res,
    message,
    e.errors ?? [],
    statusCode,
    ENV.NODE_ENV === 'development'
      ? { stack: e.stack, ...(e.data ? { data: e.data } : {}) }
      : e.data
        ? { data: e.data }
        : null
  );
};
