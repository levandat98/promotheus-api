import Queue from '../../../database/models/queue';
import Favorite from '../../../database/models/Favotite';
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

  async pushToQueue(userId, id) {
    const isExist = await Queue.query()
      .where({ userId, episodeId: id })
      .first();
    if (isExist) {
      await Queue.query()
        .where({ userId, episodeId: id })
        .del();
    } else {
      await Queue.query()
        .insert({ userId, episodeId: id })
        .returning('*');
    }
    return {
      isAdded: !isExist
    };
  }

  async getFavoriteList(id) {
    const queue = await Favorite.query()
      .where({ userId: id })
      .leftJoin('episodes', 'episodes.id', 'favorites.episodeId')
      .select(['favorites.*', 'episodes.*']);
    return queue || [];
  }

  async addToFavoriteList(userId, id) {
    const isExist = await Favorite.query()
      .where({ userId, episodeId: id })
      .first();
    if (isExist) {
      await Favorite.query()
        .where({ userId, episodeId: id })
        .del();
    } else {
      await Favorite.query()
        .insert({ userId, episodeId: id })
        .returning('*');
    }
    return {
      isAdded: !isExist
    };
  }
}
