import roles from '../../../constants/roles';
import UserController from './controller';
import UserValidator from './validator';

class UserHandler {
  constructor(server) {
    this.controller = new UserController();
    this.validator = new UserValidator();
    server.bind(this.controller);
  }

  getMany = () => ({
    tags: ['api', 'v1'],
    description: 'Get all user',
    notes: 'Return all users',
    handler: this.controller.getMany,
    validate: {
      query: this.validator.queryParams
    },
    auth: {
      strategy: 'jwt',
      scope: roles.ADMIN
    }
  });

  getMe = () => ({
    tags: ['api', 'v1'],
    description: 'Get one user',
    notes: 'Return all users',
    handler: this.controller.getMe,
    auth: 'jwt'
  });
}

export default UserHandler;
