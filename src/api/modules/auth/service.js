import _ from 'lodash';
import Boom from '@hapi/boom';
import Service from '../../core/Service';
import UserRepository from './repository';
import bcrypt from '../../../services/Bcrypt';
import JWT from '../../../services/Jwt';
import User from '../../../database/models/User';
import { ErrorsHandler } from '../../../utils/ErrorsHandler';
import errors from '../../../constants/errors';

export default class UserService extends Service {
  static instance;

  constructor() {
    super();
    this.repository = UserRepository.getRepository();
  }

  static getService() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  getRepository() {
    return this.repository;
  }

  async login(payload) {
    const { email, password } = payload;
    const user = await this.repository.getOneUserAndRole(
      {
        email
      },
      ['id', 'fullName', 'email', 'password', 'role']
    );
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw Boom.badRequest('INVALID_EMAIL_PASSWORD');
    }
    return _.assign(
      {
        token: JWT.issue({
          id: user.id,
          scope: user.role
        })
      },
      user
    );
  }

  async signUp(payload) {
    const { email } = payload;
    const user = await User.query()
      .where('email', email)
      .first();
    if (user) {
      throw Boom.badRequest(ErrorsHandler(errors.ALREADY_EXISTED, { key: 'Email' }));
    }
    await User.query().insert(payload);
    return {
      success: true
    };
  }
}
