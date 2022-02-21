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

  getManyOfUser(request) {
    const {
      auth: {
        credentials: { id: userId }
      }
    } = request;
    request.query = { ...request.query, creatorId: userId };
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
    const {
      params: { id },
      auth: {
        credentials: { id: userId, scope }
      }
    } = request;
    return this.service.getOne(id, userId, scope);
  }

  createOne(request) {
    const {
      auth: {
        credentials: { id: userId }
      }
    } = request;
    let { payload } = request;
    payload = { ...payload, creatorId: userId };
    return this.service.createOne(payload);
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
