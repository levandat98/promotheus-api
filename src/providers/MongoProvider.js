import mongoose from 'mongoose';
import logger from '../utils/Winston';
import Configs from '../configs/index';

export default class MongoProvider {
  async checkConnection() {
    try {
      mongoose.Promise = global.Promise;
      const dbConfigs = Configs.getMongoDBConfigs();
      mongoose.connect(dbConfigs.mongoDBConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      logger.info('> MongoDB Connection OK');
    } catch (error) {
      logger.error('Mongo configuration meets errors');
    }
  }
}
