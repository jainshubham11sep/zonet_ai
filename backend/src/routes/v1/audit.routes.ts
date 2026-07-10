import { Router } from 'express';
import * as auditController from '../../controllers/audit.controller';
import { zodValidator } from '../../middleware';
import {
  GetAuditSchema,
  RunAuditSchema,
  RunSectionSchema,
  UnlockAuditSchema,
  VerifyAuditSchema,
} from '../../schemas/audit.schema';

const router = Router();

// POST /api/v1/audit — create audit + instant quick scan
router.post('/', zodValidator(RunAuditSchema), auditController.create);

// GET /api/v1/audit/:id — full state (sections teaser-gated until unlocked)
router.get('/:id', zodValidator(GetAuditSchema), auditController.getById);

// GET /api/v1/audit/:id/verify?token= — magic-link landing, unlocks report
router.get('/:id/verify', zodValidator(VerifyAuditSchema), auditController.verify);

// POST /api/v1/audit/:id/section/:section — run ONE section on demand
router.post(
  '/:id/section/:section',
  zodValidator(RunSectionSchema),
  auditController.runSectionById
);

// POST /api/v1/audit/:id/unlock — save lead + send magic-link email
router.post('/:id/unlock', zodValidator(UnlockAuditSchema), auditController.unlock);

export default router;
