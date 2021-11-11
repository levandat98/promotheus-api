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
}
