import { Joi, celebrate } from 'celebrate'
import { Request, Response } from 'express';
import { staticImplements } from "../../utils/decorators/staticImplements";
import { IControllerStatic } from "../../utils/inerfaces/controller";
import { Airport } from '../../utils/inerfaces/models';
import AirportService from "./airport.service";
import airport from '../../utils/validators/airport';


@staticImplements<IControllerStatic>()
class AirportConroller {
  public static preCreate<Airport>() {
    return celebrate<unknown, unknown, Airport>({
      body: Joi.object().keys(airport)
    });
  }

  public static async create<Airport>(req: Request, res: Response) {
    await AirportService.create(req.body)
    res.json({ success: true })
  }
}

export default AirportConroller