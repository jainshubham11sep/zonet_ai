process.loadEnvFile('.env');

import { ENV } from './config/env';
import app from './app';
import { connectDB } from './lib/mongoose';
import { connectRedis } from './lib/redis';

async function bootstrap() {
  await connectDB();
  await connectRedis();

  app.listen(ENV.PORT, () => {
    console.log(`[server] running on http://localhost:${ENV.PORT} (${ENV.NODE_ENV})`);
  });
}

bootstrap().catch((err) => {
  console.error('[server] fatal startup error:', err);
  process.exit(1);
});
