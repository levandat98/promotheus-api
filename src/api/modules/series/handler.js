import roles from '../../../constants/roles';
import SerieController from './controller';
import SerieValidator from './validator';

class SerieHandler {
  constructor(server) {
    this.controller = new SerieController();
    this.validator = new SerieValidator();
    server.bind(this.controller);
  }

  getMany = () => ({
    tags: ['api', 'v1'],
    description: 'Get all Serie',
    notes: 'Return all Series',
    handler: this.controller.getMany,
    validate: {
      query: this.validator.queryParams
    },
    auth: {
      strategy: 'jwt',
      scope: [roles.USER, roles.ADMIN]
    }
  });

  getManyByUserId = () => ({
    tags: ['api', 'v1'],
    description: 'Get all Serie by user',
    notes: 'Return all Series',
    handler: this.controller.getManyByUserId,
    validate: {
      query: this.validator.queryParams
    },
    auth: {
      strategy: 'jwt',
      scope: [roles.USER, roles.ADMIN]
    }
  });

  getOne = () => ({
    tags: ['api', 'v1'],
    description: 'Get one Serie',
    notes: 'Return one Series',
    handler: this.controller.getOne,
    auth: {
      strategy: 'jwt',
      scope: [roles.USER, roles.ADMIN]
    },
    validate: {
      params: {
        id: this.validator.idParam
      }
    }
  });

  createOne = () => ({
    tags: ['api', 'v1'],
    description: 'Create one Serie',
    notes: 'Create one Series',
    handler: this.controller.createOne,
    auth: {
      strategy: 'jwt',
      scope: [roles.USER]
    },
    validate: {
      payload: this.validator.payloadCreateOne
    }
  });

  updateOne = () => ({
    tags: ['api', 'v1'],
    description: 'Update one Serie',
    notes: 'Update one Series',
    handler: this.controller.updateOne,
    auth: {
      strategy: 'jwt',
      scope: [roles.USER]
    },
    validate: {
      params: {
        id: this.validator.idParam
      },
      payload: this.validator.payloadUpdateOne
    }
  });

  deleteOne = () => ({
    tags: ['api', 'v1'],
    description: 'Delete one Serie',
    notes: 'Delete one Series',
    handler: this.controller.deleteOne,
    auth: {
      strategy: 'jwt',
      scope: [roles.USER]
    },
    validate: {
      params: {
        id: this.validator.idParam
      }
    }
  });
}

export default SerieHandler;
