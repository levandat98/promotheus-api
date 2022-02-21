import _ from 'lodash';
import Boom from '@hapi/boom';
import Service from '../../core/Service';
import EpisodeRepository from './repository';
import CommentRepository from '../comment/repository';
import Queue from '../../../database/models/queue';
import Favorites from '../../../database/models/Favotite';

export default class EpisodeService extends Service {
  static instance;

  constructor() {
    super();
    this.repository = EpisodeRepository.getRepository();
    this.commentRepository = CommentRepository.getRepository();
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

  async getOne(id, userId, scope) {
    const episode = await this.repository.getById(id, ['*'], ['creator']);
    if (!episode) {
      throw Boom.notFound('Episode not found');
    }
    if (userId && scope === 'USER') {
      const isAddedToQueue = await Queue.query()
        .where({ userId, episodeId: id })
        .first();
      const isAddedToFavorites = await Favorites.query()
        .where({ userId, episodeId: id })
        .first();
      episode.isAddedToQueue = !!isAddedToQueue;
      episode.isAddedToFavorites = !!isAddedToFavorites;
      const comments = await this.commentRepository.getCommentOfEpisode(id);
      episode.comments = comments;
    }
    return episode;
  }

  getMany(query) {
    return this.repository.getMany(query, ['serie']);
  }
}
