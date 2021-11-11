import Repository from '../../core/Repository';
import Serie from '../../../database/models/Serie';

export default class SerieRepository extends Repository {
  static instance;

  static getRepository() {
    if (!SerieRepository.instance) {
      SerieRepository.instance = new SerieRepository(Serie);
    }
    return SerieRepository.instance;
  }
}
