import Joi from 'joi';
import { join } from 'path';

const filmSchema = Joi.object({
    name: Joi.string().required(),
    platform: Joi.string().required(),
    gender: Joi.string().required().min(3)
})

export { filmSchema }