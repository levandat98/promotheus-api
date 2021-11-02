import mongoose from 'mongoose';
import Configs from '../../configs/index';
import logger from '../../utils/Winston';

const dbConfigs = Configs.getMongoDBConfigs();

const seed = async () => {
  try {
    mongoose.connect(dbConfigs.mongoDBConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    logger.error(err);
  }
  process.exit();
};

seed();
