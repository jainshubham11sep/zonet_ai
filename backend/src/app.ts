import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { ENV } from './config/env';
import { globalErrorHandler } from './middleware';
import apiRoutes from './routes';

const app = express();

app.use(
  cors({
    origin:
      ENV.NODE_ENV === 'production'
        ? [ENV.CLIENT_URL]
        : [ENV.CLIENT_URL, 'http://localhost:3000', 'http://localhost:3307'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(cookieParser());
app.use(morgan(ENV.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use('/api', apiRoutes);

app.use(globalErrorHandler);

export default app;
