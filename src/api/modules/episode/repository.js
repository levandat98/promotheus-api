import _ from 'lodash';
import Repository from '../../core/Repository';
import Episode from '../../../database/models/Episode';
import Genre from '../../../database/models/Genre';
import { gerne } from '../../../constants/common';

export default class EpisodeRepository extends Repository {
  static instance;

  static getRepository() {
    if (!EpisodeRepository.instance) {
      EpisodeRepository.instance = new EpisodeRepository(Episode);
    }
    return EpisodeRepository.instance;
  }

  async getByGenre() {
    const genre = await Genre.query();
    const episodes = await this.model.query().withGraphFetched('creator');
    const listGenre = [];
    genre.map(x => {
      listGenre.push({
        gerne: x.name,
        data: _.sampleSize(episodes, 8)
      });
      return x;
    });
    return listGenre;
  }
}
