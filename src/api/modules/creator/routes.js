import CreatorHandler from './handler';

export default class CreatorRoutes {
  constructor(server) {
    this.handler = new CreatorHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'GET',
        path: '/api/v1/creators/{id}',
        options: this.handler.getOne
      }
    ];
    return routes;
  }
}
