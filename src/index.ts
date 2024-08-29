import { connectToDB } from './database';
import { app } from './app';
import { v2 as cloudinary } from 'cloudinary';
import logger from './config/logger';
import config from './config/config';

const PORT = config.PORT;

// Define the configuration parameters
cloudinary.config({
  cloud_name: config.CLOUDINARY_CLOUD_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});

connectToDB()
  .then(() => {
    app.on('error', (err) => {
      logger.error('Error: ', err);
    });

    app.listen(PORT, () => {
      logger.info(`server is running at port ${PORT}`);
    });
  })
  .catch((err) => logger.error('MongoDB connection failed!!', err));
