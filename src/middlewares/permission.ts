import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

async function userRolesHavePermissionTo(permission: string, userId: number): Promise<boolean> {
  const prisma = new PrismaClient();
  await prisma.$connect();
  
  const rolesWithThisPermission = await prisma.permission.findUnique({
    where: {
      name: permission,
    },
    select: {
      roles: {
        select: {
          role: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (rolesWithThisPermission == null) {
    throw new Error('Not exists this permission!');
  }

  const rolesNamesWithThisPermission = rolesWithThisPermission.roles.map(data => data.role.name);

  const userRoles = await prisma.user_has_roles.findMany({
    where: {
      user_id: userId,
    },
    select: {
      role: {
        select: {
          name: true,
        }
      },
    },
  });

  if (userRoles == null) {
    throw new Error('This user not have rules!');
  }

  const userRolesNames = userRoles.map(data => data.role.name);

  await prisma.$disconnect();

  let userPermitted = false;

  userRolesNames.forEach(userRoleName => {
    if (
      rolesNamesWithThisPermission.includes(userRoleName)
    ) userPermitted = true;
  });

  return userPermitted;
}

export function userShouldCan(permissions: string[]) {
  const verifyUserPermissions = async (
    req: Request,
    res: Response, 
    next: NextFunction,
  ) => {
    const acessToken = req.headers.authorization;
    const { userId } = jwt.decode(acessToken!) as { userId: number };
    
    for (const permission of permissions) {
      const userHaveThisPermission = await userRolesHavePermissionTo(permission, userId);
      
      if (!userHaveThisPermission) {
        return res.status(401).send({
          status: 401,
          message: `This user not have permission to: '${permission}'`,
        });
      }
    }

    next();
  }

  return verifyUserPermissions;
}
