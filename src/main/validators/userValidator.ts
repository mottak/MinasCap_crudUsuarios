import { NewUser } from '../../domain/models'
import Joi from 'joi'


export const userSchema = Joi.object<NewUser>({
  name: Joi.string()
    .min(3)
    .required(),
  email: Joi.string()
    .email()
    .required()
})

export const updateSchema = Joi.object<NewUser>({
  name: Joi.string()
    .min(3)
    .required(),

})