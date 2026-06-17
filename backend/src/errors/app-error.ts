export class AppError extends Error {
  public readonly statusCode: number;
  public readonly data?: Record<string, unknown>;

  constructor(message: string, statusCode = 500, data?: Record<string, unknown>) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.data = data;
    Object.setPrototypeOf(this, AppError.prototype);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
  }
}
