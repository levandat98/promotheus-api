import SerieHandler from './handler';

export default class SerieRoutes {
  constructor(server) {
    this.handler = new SerieHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'GET',
        path: '/api/v1/series',
        options: this.handler.getMany
      },
      {
        method: 'GET',
        path: '/api/v1/series/studio',
        options: this.handler.getManyByUserId
      },
      {
        method: 'GET',
        path: '/api/v1/series/{id}',
        options: this.handler.getOne
      },
      {
        method: 'DELETE',
        path: '/api/v1/series/{id}',
        options: this.handler.deleteOne
      },
      {
        method: 'POST',
        path: '/api/v1/series',
        options: this.handler.createOne
      },
      {
        method: 'PUT',
        path: '/api/v1/series/{id}',
        options: this.handler.updateOne
      }
    ];
    return routes;
  }
}
