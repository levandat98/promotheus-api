import MediaController from './controller';
import MediaValidator from './validator';

export default class MediaHandler {
  constructor(server) {
    this.controller = new MediaController();
    this.validator = new MediaValidator();
    server.bind(this.controller);
  }

  uploadStorage = () => ({
    tags: ['api', 'v1'],
    description: 'Upload media  ',
    notes: 'Upload image to aws',
    handler: this.controller.uploadStorage,
    auth: 'jwt',
    validate: {
      payload: this.validator.payloadGetUrlsStorage
    }
  });

  deleteStorage = () => ({
    tags: ['api', 'v1'],
    description: 'Delete media  ',
    notes: 'delete image to aws',
    handler: this.controller.deleteStorage,
    auth: 'jwt',
    validate: {
      payload: this.validator.payloadDeleteManyFile
    }
  });
}
