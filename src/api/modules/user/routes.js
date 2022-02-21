import UserHandler from './handler';

export default class UserRoutes {
  constructor(server) {
    this.handler = new UserHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'GET',
        path: '/api/v1/users',
        options: this.handler.getMany
      },
      {
        method: 'GET',
        path: '/api/v1/users/me',
        options: this.handler.getMe
      },
      {
        method: 'GET',
        path: '/api/v1/users/queue',
        options: this.handler.getQueue
      },
      {
        method: 'POST',
        path: '/api/v1/users/queue/{id}',
        options: this.handler.pushToQueue
      }
    ];
    return routes;
  }
}
