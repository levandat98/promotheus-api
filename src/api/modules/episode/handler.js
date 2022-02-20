import roles from '../../../constants/roles';
import EpisodeController from './controller';
import EpisodeValidator from './validator';

class EpisodeHandler {
  constructor(server) {
    this.controller = new EpisodeController();
    this.validator = new EpisodeValidator();
    server.bind(this.controller);
  }

  getMany = () => ({
    tags: ['api', 'v1'],
    description: 'Get all Episode',
    notes: 'Return all Episodes',
    handler: this.controller.getMany,
    validate: {
      query: this.validator.queryParams
    },
    auth: {
      strategy: 'jwt',
      scope: [roles.ADMIN, roles.USER]
    }
  });

  getHomeEpisode = () => ({
    tags: ['api', 'v1'],
    description: 'Get all Episode for home',
    notes: 'Return all Episodes for home',
    handler: this.controller.getHomeEpisode,
    auth: {
      strategy: 'jwt',
      scope: [roles.USER]
    }
  });

  getOne = () => ({
    tags: ['api', 'v1'],
    description: 'Get one Episode',
    notes: 'Return one Episodes',
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

  createOne = () => ({
    tags: ['api', 'v1'],
    description: 'Create one Episode',
    notes: 'Create one Episodes',
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
    description: 'Update one Episode',
    notes: 'Update one Episodes',
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
    description: 'Delete one Episode',
    notes: 'Delete one Episodes',
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

export default EpisodeHandler;
