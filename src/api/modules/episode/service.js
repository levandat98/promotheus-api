import _ from 'lodash';
import Boom from '@hapi/boom';
import Service from '../../core/Service';
import EpisodeRepository from './repository';

export default class EpisodeService extends Service {
  static instance;

  constructor() {
    super();
    this.repository = EpisodeRepository.getRepository();
  }

  static getService() {
    if (!EpisodeService.instance) {
      EpisodeService.instance = new EpisodeService();
    }
    return EpisodeService.instance;
  }

  getRepository() {
    return this.repository;
  }

  async getHomeEpisode() {
    return {
      results: await this.repository.getByGenre()
    };
  }

  getOne(id) {
    const episode = this.repository.getById(id, ['*'], ['creator']);
    if (!episode) {
      throw Boom.notFound('Episode not found');
    }
    return episode;
  }
}
