import { z } from 'zod';

export const RunAuditSchema = z.object({
  body: z.object({
    url: z.string().url('Must be a valid URL'),
    email: z.string().email('Must be a valid email').optional(),
    name: z.string().min(1).max(100).optional(),
  }),
});

export const GetAuditSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Audit ID is required'),
  }),
});

export const UnlockAuditSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Audit ID is required'),
  }),
  body: z.object({
    email: z.string().email('Must be a valid email'),
    name: z.string().min(1).max(100),
  }),
});

export type RunAuditInput = z.infer<typeof RunAuditSchema>['body'];
export type GetAuditParams = z.infer<typeof GetAuditSchema>['params'];
export type UnlockAuditInput = z.infer<typeof UnlockAuditSchema>['body'];
