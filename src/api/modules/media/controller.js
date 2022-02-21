import Controller from '../../core/Controller';
import MediaService from './service';

export default class MediaController extends Controller {
  constructor() {
    super();
    this.service = new MediaService();
  }

  uploadStorage(request) {
    return this.service.uploadStorage(request.payload);
  }

  deleteStorage(request) {
    return this.service.deleteStorage(request.payload);
  }
}
