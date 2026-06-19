import Redis from 'ioredis';
import { ENV } from '../config/env';

export const redis = new Redis(ENV.REDIS_URL, {
  maxRetriesPerRequest: 3,
  enableReadyCheck: true,
  lazyConnect: true,
});

redis.on('connect', () => console.log('[redis] connected'));
redis.on('error', (err) => console.error('[redis] error:', err.message));
redis.on('close', () => console.warn('[redis] connection closed'));

export async function connectRedis(): Promise<void> {
  await redis.connect();
}
