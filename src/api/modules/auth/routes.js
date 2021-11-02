import AuthHandler from './handler';

export default class AuthRoutes {
  constructor(server) {
    this.handler = new AuthHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes = () => {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/auth/login',
        options: this.handler.login
      },
      {
        method: 'POST',
        path: '/api/v1/auth/sign-up',
        options: this.handler.signUp
      }
    ];
    return routes;
  };
}
