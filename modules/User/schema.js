import Joi from 'joi'
import { MAX_EMAIL_LENGTH, MIN_EMAIL_LENGTH, MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH, userGenders } from './constants.js'

const UserSchema = Joi.object({
  email: Joi.string().email().min(MIN_EMAIL_LENGTH).max(MAX_EMAIL_LENGTH).required(),
  password: Joi.string().min(MIN_PASSWORD_LENGTH).max(MAX_PASSWORD_LENGTH).required(),
  gender: Joi.string().valid(...Object.values(userGenders)).default(userGenders.EMPTY),
})

export default UserSchema
