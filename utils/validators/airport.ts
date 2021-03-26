import { Joi } from 'celebrate'

const schema = {
  name: Joi.string().required(),
  wheather: Joi.string(),
}

export default schema