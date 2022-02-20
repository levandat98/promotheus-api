import Controller from '../../core/Controller';
import EpisodeService from './service';

export default class EpisodeController extends Controller {
  constructor() {
    super();
    this.service = EpisodeService.getService();
  }

  getMany(request) {
    return this.service.getMany(request.query);
  }

  getHomeEpisode(request) {
    const {
      auth: {
        credentials: { id: userId }
      }
    } = request;
    return this.service.getHomeEpisode(userId);
  }

  getOne(request) {
    const { id } = request.params;
    return this.service.getOne(id);
  }

  createOne(request) {
    const {
      auth: {
        credentials: { id: userId }
      },
      payload
    } = request;
    return this.service.createOne(userId, payload);
  }

  updateOne(request) {
    const { params, payload } = request;
    const { id } = params;
    return this.service.updateOne(id, payload);
  }

  deleteOne(request) {
    const { id } = request.params;
    return this.service.deleteOne(id);
  }
}
