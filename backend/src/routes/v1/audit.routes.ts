import { Router } from 'express';
import * as auditController from '../../controllers/audit.controller';
import { zodValidator } from '../../middleware';
import {
  GetAuditSchema,
  RunAuditSchema,
  UnlockAuditSchema,
} from '../../schemas/audit.schema';

const router = Router();

// POST /api/v1/audit
router.post('/', zodValidator(RunAuditSchema), auditController.create);

// GET /api/v1/audit/:id
router.get('/:id', zodValidator(GetAuditSchema), auditController.getById);

// POST /api/v1/audit/:id/unlock
router.post('/:id/unlock', zodValidator(UnlockAuditSchema), auditController.unlock);

export default router;
