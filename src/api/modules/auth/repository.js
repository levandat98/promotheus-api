import Repository from '../../core/Repository';
import User from '../../../database/models/User';

export default class UserRepository extends Repository {
  static instance;

  static getRepository() {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository(User);
    }
    return UserRepository.instance;
  }

  getOneUserAndRole(condition = {}, fields = ['*']) {
    return this.model
      .query()
      .findOne(condition)
      .select(fields);
  }
}
