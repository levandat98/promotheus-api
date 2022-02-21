import Joi from '@hapi/joi';
import Validator from '../../core/Validator';

export default class MediaValidator extends Validator {
  payloadGetUrlsStorage = Joi.array().items(
    Joi.object({
      type: Joi.string().required(),
      fileName: Joi.string().required(),
      folderPrefix: Joi.string()
    })
  );

  payloadDeleteManyFile = Joi.array().items(Joi.string().required());
}
