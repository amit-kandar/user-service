import mongoose from 'mongoose';
import logger from '../config/logger';

export async function connectToDB(): Promise<void> {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@userservice.pklpl.mongodb.net/?retryWrites=true&w=majority&appName=userservice`
    );
    logger.info(
      `MongoDB Connected: ${connectionInstance.connection.host + '/' + connectionInstance.connection.name}`
    );
  } catch (error) {
    logger.error('MongoDB connection Error: ', error);
    process.exit(1);
  }
}
