import Joi from '@hapi/joi';
import Validator from '../../core/Validator';

export default class SerieValidator extends Validator {
  payloadCreateOne = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
  });

  payloadUpdateOne = Joi.object({
    name: Joi.string(),
    description: Joi.string()
  });
}
