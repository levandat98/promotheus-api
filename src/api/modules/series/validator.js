import Joi from '@hapi/joi';
import Validator from '../../core/Validator';

export default class SerieValidator extends Validator {
  payloadCreateOne = Joi.object({
    fullName: Joi.string().required(),
    description: Joi.string().required(),
    genreId: Joi.number().required()
  });

  payloadUpdateOne = Joi.object({
    fullName: Joi.string(),
    description: Joi.string(),
    genreId: Joi.number()
  });
}
