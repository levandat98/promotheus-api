import Joi from '@hapi/joi';
import Validator from '../../core/Validator';

export default class EpisodeValidator extends Validator {
  payloadCreateOne = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    releaseDate: Joi.date().required(),
    serieId: Joi.number(),
    genreId: Joi.number()
  });

  payloadUpdateOne = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    releaseDate: Joi.date(),
    serieId: Joi.number(),
    genreId: Joi.number()
  });
}
