import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface MongoServerError {
  name: string;
  code?: number;
  keyValue?: Record<string, unknown>;
  message: string;
}

function isDuplicateKeyError(err: MongoServerError): boolean {
  return err.code === 11000 || err.name === 'MongoServerError';
}

export function handleMongoError(err: unknown, res: Response): boolean {
  const e = err as MongoServerError;

  if (e.name === 'ValidationError') {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Validation failed',
      errors: [e.message],
    });
    return true;
  }

  if (e.name === 'MongoServerError' && isDuplicateKeyError(e)) {
    const field = e.keyValue ? Object.keys(e.keyValue)[0] : 'field';
    res.status(StatusCodes.CONFLICT).json({
      success: false,
      message: `A record with this ${field} already exists`,
      errors: [],
    });
    return true;
  }

  if (e.name === 'CastError') {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Invalid ID format',
      errors: [],
    });
    return true;
  }

  if (
    e.name === 'MongoNetworkError' ||
    e.name === 'MongoTimeoutError' ||
    e.name === 'MongoServerSelectionError'
  ) {
    res.status(StatusCodes.SERVICE_UNAVAILABLE).json({
      success: false,
      message: 'Database connection error. Please try again later.',
      errors: [],
    });
    return true;
  }

  return false;
}
