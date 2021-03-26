import { RequestHandler , Response, Request } from "express";


export interface IControllerStatic {
  preCreate: <T>(req: Request<any, any, T>, res: Response) => RequestHandler
  create:  <T>(req: Request<any, any, T>, res: Response) => void | Promise<void>
}