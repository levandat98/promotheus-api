import MediaHandler from './handler';

export default class MediaRoutes {
  constructor(server) {
    this.handler = new MediaHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/medias/upload',
        options: this.handler.uploadStorage
      },
      {
        method: 'DELETE',
        path: '/api/v1/medias',
        options: this.handler.deleteStorage
      }
    ];

    return routes;
  }
}
