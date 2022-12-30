import * as joi from 'joi';

export const userSchema = joi.object({
    id: joi.string().required(),
    name: joi.string().required(),
    address: joi.string().optional(),
    age: joi.number().optional()
})