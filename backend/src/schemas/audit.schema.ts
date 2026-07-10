import { z } from 'zod';
import { SECTION_KEYS, type SectionKey } from '../types/audit';

export const RunAuditSchema = z.object({
  body: z.object({
    url: z.string().url('Must be a valid URL'),
  }),
});

export const GetAuditSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Audit ID is required'),
  }),
});

export const RunSectionSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Audit ID is required'),
    section: z.enum(SECTION_KEYS as [SectionKey, ...SectionKey[]]),
  }),
});

export const UnlockAuditSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Audit ID is required'),
  }),
  body: z.object({
    email: z.string().email('Must be a valid email'),
    name: z.string().min(1).max(100).optional(),
  }),
});

export const VerifyAuditSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Audit ID is required'),
  }),
  query: z.object({
    token: z.string().min(16, 'Invalid token'),
  }),
});

export type RunAuditInput = z.infer<typeof RunAuditSchema>['body'];
export type GetAuditParams = z.infer<typeof GetAuditSchema>['params'];
export type RunSectionParams = z.infer<typeof RunSectionSchema>['params'];
export type UnlockAuditInput = z.infer<typeof UnlockAuditSchema>['body'];
export type VerifyAuditQuery = z.infer<typeof VerifyAuditSchema>['query'];
