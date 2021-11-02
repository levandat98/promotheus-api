import Joi from '@hapi/joi';
import { gender } from '../../../constants/common';
import Validator from '../../core/Validator';

export default class UserValidator extends Validator {
  payloadLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  });

  payloadSignUp = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .max(16)
      .required(),
    name: Joi.string().required(),
    age: Joi.date().required(),
    gender: Joi.string().valid(...Object.values(gender))
  });
}
