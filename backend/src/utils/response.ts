import type { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const SuccessResponse = (
  res: Response,
  message: string,
  data: unknown,
  statusCode: StatusCodes = StatusCodes.OK,
  meta: unknown = null
): Response =>
  res.status(statusCode).json({
    success: true,
    message,
    data,
    ...(meta !== null && { meta }),
  });

export const ErrorResponse = (
  res: Response,
  message: string,
  errors: unknown[] = [],
  statusCode: StatusCodes = StatusCodes.BAD_REQUEST,
  meta: unknown = null
): Response =>
  res.status(statusCode).json({
    success: false,
    message,
    errors,
    ...(meta !== null && { meta }),
  });
