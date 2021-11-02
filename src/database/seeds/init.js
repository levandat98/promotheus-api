import { Factory } from './factory';
import User from '../models/User';

exports.seed = async knex => {
  await User.query().insertGraph(Factory.users(100));
};
