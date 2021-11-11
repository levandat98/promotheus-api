import Service from '../../core/Service';
import EpisodeRepository from './repository';
import _ from "lodash"

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
  async getHomeEpisode(){
    return  {
      results: await this.repository.getByGenre()
    }
  }
}
