import { type Request, type Response, Router } from 'express';
import v1Routes from './v1';

const router = Router();

router.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

router.use('/v1', v1Routes);

export default router;
