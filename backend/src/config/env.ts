// process.loadEnvFile() is called in server.ts before this module loads
export const ENV = Object.freeze({
  PORT: Number(process.env.PORT) || 4000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/zonet_ai',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  PSI_API_KEY: process.env.PSI_API_KEY || '',
  GOOGLE_SHEETS_WEBHOOK_URL: process.env.GOOGLE_SHEETS_WEBHOOK_URL || '',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3307',
});

export type Env = typeof ENV;
