import Joi from 'joi';
import ValidatorHandler from './ValidatorHandler.js';

export const MangaUpload = (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    thumbnail: Joi.string().trim().required(),
    rating: Joi.number().required(),
    tags: Joi.array(),
    chapters: Joi.array().items(
      Joi.object().keys({
        number: Joi.number().required(),
        url: Joi.array()
      })
    )
  });
  ValidatorHandler(req, res, next, 'body', schema);
};
