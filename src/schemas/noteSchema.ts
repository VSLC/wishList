import Joi from 'joi';

const noteSchema = Joi.object({
    note: Joi.string().required().min(2),
    idFilm: Joi.number().required()
})

export { noteSchema }