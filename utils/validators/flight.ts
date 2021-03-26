import { Joi } from 'celebrate'
import { Airport } from '../inerfaces/models'

import airport from './airport'

export default {
  name: Joi.string().required(),
  souce: Joi.object<Airport>().keys(airport),
  destination: Joi.object<Airport>().keys(airport)
}