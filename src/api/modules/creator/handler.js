import roles from '../../../constants/roles';
import CreatorController from './controller';
import CreatorValidator from './validator';

class CreatorHandler {
  constructor(server) {
    this.controller = new CreatorController();
    this.validator = new CreatorValidator();
    server.bind(this.controller);
  }

  getOne = () => ({
    tags: ['api', 'v1'],
    description: 'Get one Creator',
    notes: 'Return one Creators',
    handler: this.controller.getOne,
    auth: {
      strategy: 'jwt',
      scope: [roles.ADMIN, roles.USER]
    },
    validate: {
      params: {
        id: this.validator.idParam
      }
    }
  });
}

export default CreatorHandler;
