import Boom from '@hapi/boom';
import Service from '../../core/Service';
import SerieRepository from './repository';
import { ErrorsHandler } from '../../../utils/ErrorsHandler';
import errors from '../../../constants/errors';

export default class SerieService extends Service {
  static instance;

  constructor() {
    super();
    this.repository = SerieRepository.getRepository();
  }

  static getService() {
    if (!SerieService.instance) {
      SerieService.instance = new SerieService();
    }
    return SerieService.instance;
  }

  getRepository() {
    return this.repository;
  }

  async getOne(id) {
    const Serie = await this.repository.getById(id, ['*'], ['episodes', 'creator']);

    if (!Serie) {
      throw Boom.notFound(ErrorsHandler(errors.NOT_FOUND, { KEY: 'Serie' }));
    }
    return Serie;
  }
}
