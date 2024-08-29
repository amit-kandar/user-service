import dotenvflow from 'dotenv-flow';

dotenvflow.config();

export default {
  ENV: process.env.ENV,
  PORT: process.env.PORT || 4000,
  MONGODB_USERNAME: process.env.MONGODB_USERNAME,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  REDIS_URL: process.env.REDIS_URL,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || '',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '',
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || '',
};
