import Controller from '../../core/Controller';
import CreatorService from './service';

export default class CreatorController extends Controller {
  constructor() {
    super();
    this.service = CreatorService.getService();
  }

  getOne(request) {
    const { id } = request.params;
    return this.service.getOne(id);
  }
}
