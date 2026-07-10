import type { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../middleware';
import type {
  GetAuditParams,
  RunAuditInput,
  RunSectionParams,
  UnlockAuditInput,
  VerifyAuditQuery,
} from '../schemas/audit.schema';
import {
  getAuditState,
  runSection,
  startAudit,
  unlockAuditReport,
  verifyAuditToken,
} from '../services/audit.service';
import type { TypedRequest } from '../types/common';
import { SuccessResponse } from '../utils';

export const create = catchAsync(async (req: TypedRequest<RunAuditInput>, res: Response) => {
  const payload = await startAudit(req.validatedData.body);
  SuccessResponse(res, 'Audit started', payload, StatusCodes.CREATED);
});

export const getById = catchAsync(
  async (req: TypedRequest<unknown, GetAuditParams>, res: Response) => {
    const payload = await getAuditState(req.validatedData.params.id);
    SuccessResponse(res, 'Audit fetched', payload);
  }
);

export const runSectionById = catchAsync(
  async (req: TypedRequest<unknown, RunSectionParams>, res: Response) => {
    const { id, section } = req.validatedData.params;
    const payload = await runSection(id, section);
    SuccessResponse(res, `Section '${section}' audited`, payload);
  }
);

export const unlock = catchAsync(
  async (req: TypedRequest<UnlockAuditInput, GetAuditParams>, res: Response) => {
    const result = await unlockAuditReport(req.validatedData.params.id, req.validatedData.body);
    SuccessResponse(res, 'Magic link sent', result);
  }
);

export const verify = catchAsync(
  async (req: TypedRequest<unknown, GetAuditParams, VerifyAuditQuery>, res: Response) => {
    const payload = await verifyAuditToken(
      req.validatedData.params.id,
      req.validatedData.query.token
    );
    SuccessResponse(res, 'Report unlocked', payload);
  }
);
