import EpisodeHandler from './handler';

export default class EpisodeRoutes {
  constructor(server) {
    this.handler = new EpisodeHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'GET',
        path: '/api/v1/episodes',
        options: this.handler.getMany
      },
      {
        method: 'GET',
        path: '/api/v1/episodes/{id}',
        options: this.handler.getOne
      },
      {
        method: 'DELETE',
        path: '/api/v1/episodes/{id}',
        options: this.handler.deleteOne
      },
      {
        method: 'POST',
        path: '/api/v1/episodes',
        options: this.handler.createOne
      },
      {
        method: 'PUT',
        path: '/api/v1/episodes/{id}',
        options: this.handler.updateOne
      },
      {
        method: 'GET',
        path: '/api/v1/episodes/home',
        options: this.handler.getHomeEpisode
      }
    ];
    return routes;
  }
}
