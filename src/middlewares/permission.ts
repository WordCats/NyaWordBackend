// Not completed...

import { NextFunction, Request, Response } from "express";

async function decodeToken(req: Request) {
  const acessToken = req.headers.authorization;
}

function userShouldCan(permissions: string[]) {
  const verifyUserPermissions = async (
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) => {
    
  }

  return verifyUserPermissions;
}
