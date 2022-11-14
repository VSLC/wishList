import Joi from 'joi';

const filmSchema = Joi.object({
    name: Joi.string().required(),
    platform: Joi.string().required(),
    gender: Joi.string().required().min(3)
})

export { filmSchema }