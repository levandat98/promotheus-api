import Joi from '@hapi/joi';
import Validator from '../../core/Validator';

export default class EpisodeValidator extends Validator {
  payloadCreateOne = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string().required(),
    img: Joi.string().required(),
    serieId: Joi.number()
    // genreId: Joi.number()
  });

  payloadUpdateOne = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    url: Joi.string(),
    img: Joi.string(),
    serieId: Joi.number()
    // genreId: Joi.number()
  });
}
