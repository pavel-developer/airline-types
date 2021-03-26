import { NextFunction, Router, Request, Response } from 'express'
import AirlineConroller from './airlaine.controller'
import asyncHandler from 'express-async-handler'

const airlineApi = Router()

airlineApi.post('/', [AirlineConroller.preCreate], asyncHandler((req, res) => AirlineConroller.create(req, res)))
airlineApi.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

export default airlineApi