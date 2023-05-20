import { NextFunction, Request, Response } from "express";
import { UserService } from "../../modules/user/core/user.service.js";


export class UserMiddleware {
  public static async handle(request: Request, response: Response, next: NextFunction): Promise<void> {
    console.log(request.body);

    next()
  }
}
