import Queue from '../../../database/models/queue';
import Service from '../../core/Service';
import CreatorRepository from './repository';

export default class CreatorService extends Service {
  static instance;

  constructor() {
    super();
    this.repository = CreatorRepository.getRepository();
  }

  static getService() {
    if (!CreatorService.instance) {
      CreatorService.instance = new CreatorService();
    }
    return CreatorService.instance;
  }

  getRepository() {
    return this.repository;
  }
}
