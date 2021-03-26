import { Joi, celebrate } from 'celebrate'
import { Request, Response } from 'express';
import { staticImplements } from "../../utils/decorators/staticImplements";
import { IControllerStatic } from "../../utils/inerfaces/controller";
import { Airline } from '../../utils/inerfaces/models';
import airline from '../../utils/validators/airline';
import AirlineService from "./airlaine.service";

@staticImplements<IControllerStatic>()
class AirlineConroller {
  public static preCreate<Airline>() {
    return celebrate<unknown, unknown, Airline>({
      body: Joi.object<Airline>().keys(airline)
    });
  }

  public static async create<Airline>(req: Request, res: Response) {
    await AirlineService.create(req.body)
    res.json({ success: true })
  }
}

export default AirlineConroller