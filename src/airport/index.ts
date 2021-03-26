import { Router } from 'express'
import AirportConroller from './airport.controller'
import asyncHandler from 'express-async-handler'

const airportApi = Router()

airportApi.post('/', [AirportConroller.preCreate], asyncHandler((req, res) => AirportConroller.create(req, res)))

export default airportApi