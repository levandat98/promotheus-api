import AuthController from './controller';
import AuthValidator from './validator';
import AuthMiddleware from './middleware';

class AuthHandler {
  constructor(server) {
    this.controller = new AuthController();
    this.validator = new AuthValidator();
    this.middleware = new AuthMiddleware();
    server.bind(this.controller);
  }

  login = () => {
    return {
      tags: ['api'],
      description: 'Login',
      notes: 'Return login user',
      handler: this.controller.login,
      auth: false,
      validate: {
        payload: this.validator.payloadLogin
      }
    };
  };

  signUp = () => {
    return {
      tags: ['api'],
      description: 'Login',
      notes: 'Return login user',
      handler: this.controller.signUp,
      auth: false,
      validate: {
        payload: this.validator.payloadSignUp
      }
    };
  };
}

export default AuthHandler;
