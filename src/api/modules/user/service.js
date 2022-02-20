import Queue from '../../../database/models/queue';
import Service from '../../core/Service';
import UserRepository from './repository';

export default class UserService extends Service {
  static instance;

  constructor() {
    super();
    this.repository = UserRepository.getRepository();
  }

  static getService() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  getRepository() {
    return this.repository;
  }

  getQueue(id) {
    const queue = Queue.query()
      .where({ userId: id })
      .leftJoin('episodes', 'episodes.id', 'queues.episodeId')
      .select(['queues.*', 'episodes.*']);
    return queue || [];
  }

  pushToQueue(userId, id) {
    return Queue.query()
      .insert({ userId, episodeId: id })
      .returning('*');
  }
}
