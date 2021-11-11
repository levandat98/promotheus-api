import Repository from '../../core/Repository';
import Episode from '../../../database/models/Episode';

export default class EpisodeRepository extends Repository {
  static instance;

  static getRepository() {
    if (!EpisodeRepository.instance) {
      EpisodeRepository.instance = new EpisodeRepository(Episode);
    }
    return EpisodeRepository.instance;
  }
}
