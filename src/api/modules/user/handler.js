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

  getQueue = () => ({
    tags: ['api', 'v1'],
    description: 'Get queue of user',
    notes: 'Return all queue users',
    handler: this.controller.getQueue,
    auth: 'jwt'
  });

  pushToQueue = () => ({
    tags: ['api', 'v1'],
    description: 'push to  queue of user',
    notes: 'Return push to all queue users',
    handler: this.controller.pushToQueue,
    auth: 'jwt'
  });

  getFavoriteList = () => ({
    tags: ['api', 'v1'],
    description: 'Get favorite of user',
    notes: 'Return all favorite users',
    handler: this.controller.getFavoriteList,
    auth: 'jwt'
  });

  addToFavoriteList = () => ({
    tags: ['api', 'v1'],
    description: 'push to  favorite of user',
    notes: 'Return push to all favorite users',
    handler: this.controller.addToFavoriteList,
    auth: 'jwt'
  });
}

export default UserHandler;
