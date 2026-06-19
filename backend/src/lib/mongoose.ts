import mongoose from 'mongoose';
import { ENV } from '../config/env';

export async function connectDB(): Promise<void> {
  mongoose.connection.on('error', (err) => {
    console.error('[mongo] connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('[mongo] disconnected');
  });

  await mongoose.connect(ENV.MONGO_URI);
  console.log('[mongo] connected to', ENV.MONGO_URI.split('@').pop() ?? ENV.MONGO_URI);
}

export async function disconnectDB(): Promise<void> {
  await mongoose.disconnect();
  console.log('[mongo] disconnected');
}
