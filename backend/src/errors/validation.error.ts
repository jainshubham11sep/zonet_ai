import type { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError, type ZodIssue } from 'zod';

function issueToMessage(issue: ZodIssue): string {
  const rawPath = issue.path;
  const path = (
    rawPath.length > 1 && ['body', 'params', 'query'].includes(String(rawPath[0]))
      ? rawPath.slice(1)
      : rawPath
  ).join('.');

  const field = path || 'value';

  switch (issue.code) {
    case 'invalid_type':
      if (issue.received === 'undefined') return `${field} is required`;
      return `${field} must be ${issue.expected}, received ${issue.received}`;
    case 'invalid_string':
      if (issue.validation === 'email') return `${field} must be a valid email`;
      if (issue.validation === 'url') return `${field} must be a valid URL`;
      if (issue.validation === 'uuid') return `${field} must be a valid UUID`;
      return `${field} is invalid`;
    case 'too_small':
      if (issue.type === 'string')
        return `${field} must be at least ${issue.minimum} character${Number(issue.minimum) !== 1 ? 's' : ''}`;
      if (issue.type === 'number') return `${field} must be at least ${issue.minimum}`;
      return `${field} is too small`;
    case 'too_big':
      if (issue.type === 'string') return `${field} must be at most ${issue.maximum} characters`;
      if (issue.type === 'number') return `${field} must be at most ${issue.maximum}`;
      return `${field} is too large`;
    case 'invalid_enum_value':
      return `${field} must be one of: ${issue.options.join(', ')}`;
    case 'unrecognized_keys':
      return `${field} contains unknown keys: ${issue.keys.join(', ')}`;
    default:
      return issue.message || `${field} is invalid`;
  }
}

export function handleValidationError(err: unknown, res: Response): boolean {
  if (!(err instanceof ZodError)) return false;

  const errors = err.issues.map(issueToMessage);

  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: errors[0] ?? 'Validation error',
    errors,
  });

  return true;
}
