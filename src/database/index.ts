import mongoose from 'mongoose';
import logger from '../config/logger';
import config from '../config/config';

export async function connectToDB(): Promise<void> {
  const MONGODB_USERNAME = config.MONGODB_USERNAME;
  const MONGODB_PASSWORD = config.MONGODB_PASSWORD;
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@userservice.pklpl.mongodb.net/?retryWrites=true&w=majority&appName=userservice`
    );
    logger.info(
      `MongoDB Connected: ${connectionInstance.connection.host + '/' + connectionInstance.connection.name}`
    );
  } catch (error) {
    logger.error('MongoDB connection Error: ', error);
    process.exit(1);
  }
}
