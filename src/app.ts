import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler.middleware';
import redisClient from './config/redis';

const app: Application = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({ extended: true, limit: '16kb' }));

app.use(express.static('public'));

app.use(cookieParser());

redisClient.connect();

// Import all routes

// Declare routes

app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json('Hello World');
});

export { app };
