import { Joi } from 'celebrate'
import { Flight } from '../inerfaces/models'

import flight from './flight'

export default {
  name: Joi.string().required(),
  flights: Joi.array().items(Joi.object<Flight>(flight))
}