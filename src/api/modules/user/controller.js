import Controller from '../../core/Controller';
import UserService from './service';

export default class UserController extends Controller {
  constructor() {
    super();
    this.service = UserService.getService();
  }

  getMe(request) {
    const { id } = request.auth.credentials;
    return this.service.getOne(id);
  }

  getQueue(request) {
    const { id } = request.auth.credentials;
    return this.service.getQueue(id);
  }

  pushToQueue(request) {
    const userId = request.auth.credentials.id;
    const { id } = request.params;
    return this.service.pushToQueue(userId, id);
  }
}
