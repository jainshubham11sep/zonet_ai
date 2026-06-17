import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../middleware';
import { RunAuditInput, UnlockAuditInput, GetAuditParams } from '../schemas/audit.schema';
import { getAudit, startAudit, unlockAuditReport } from '../services/audit.service';
import { SuccessResponse } from '../utils';
import { TypedRequest } from '../types/common';

export const create = catchAsync(
  async (req: TypedRequest<RunAuditInput>, res: Response) => {
    const audit = await startAudit(req.validatedData.body);
    SuccessResponse(
      res,
      'Audit started',
      { auditId: audit._id, status: audit.status },
      StatusCodes.CREATED
    );
  }
);

export const getById = catchAsync(
  async (req: TypedRequest<unknown, GetAuditParams>, res: Response) => {
    const audit = await getAudit(req.validatedData.params.id);
    SuccessResponse(res, 'Audit fetched', {
      status: audit.status,
      overallScore: audit.overallScore,
      issueCount: audit.issueCount,
    });
  }
);

export const unlock = catchAsync(
  async (req: TypedRequest<UnlockAuditInput, GetAuditParams>, res: Response) => {
    const audit = await unlockAuditReport(
      req.validatedData.params.id,
      req.validatedData.body
    );
    SuccessResponse(res, 'Report unlocked', audit.report);
  }
);
