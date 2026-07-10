process.loadEnvFile() 
export const ENV = Object.freeze({
  PORT: Number(process.env.PORT) || 4000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/zonet_ai',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  PSI_API_KEY: process.env.PSI_API_KEY || '',
  GOOGLE_SHEETS_WEBHOOK_URL: process.env.GOOGLE_SHEETS_WEBHOOK_URL || '',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3307',
  // Mail — any SMTP provider works; the transport reads only these values
  SMTP_HOST: process.env.SMTP_HOST || '',
  SMTP_PORT: Number(process.env.SMTP_PORT) || 587,
  SMTP_SECURE: process.env.SMTP_SECURE === 'true',
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASS: process.env.SMTP_PASS || '',
  MAIL_FROM: process.env.MAIL_FROM || 'ZonetTech <no-reply@zonettech.com>',
});



export type Env = typeof ENV;
