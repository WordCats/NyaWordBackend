import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function TokenValidation(req: Request, res: Response, next: NextFunction) {
  const acessToken = req.headers.authorization;
  
  if (!acessToken) {
    res.status(401).send({
      status: 401, 
      message: 'Send your acess acess token!',
    });
  }

  try {
    jwt.verify(acessToken!, process.env.JWT_SECRET!);
    next();
  } catch(e: any) {

    if (e instanceof jwt.JsonWebTokenError) {
      res.status(401).send({
        status: 401, 
        message: 'Acess token invalid!',
      });
    }

    if (e instanceof jwt.TokenExpiredError) {
      res.status(401).send({
        status: 401, 
        message: 'Acess token expired!',
      });
    }

    if (e instanceof jwt.NotBeforeError) {
      res.status(401).send({
        status: 401, 
        message: 'Acess token not ready to be used!',
      });
    }
  }
}