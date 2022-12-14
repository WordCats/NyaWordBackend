import { User } from "../../../entities/User";
import { IUserRepository, IUserResources } from "../IUserRepository";
import { PrismaClient } from "@prisma/client";

export class PrismaUserRepository implements IUserRepository {
  private prisma = new PrismaClient();
  
  async saveAndGetUserResources(userData: User): Promise<IUserResources> {
    await this.prisma.$connect();

    const { id: userId } = await this.prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        status: userData.status,
        image: userData.image,
        created_at: new Date(),
      },
    });

    const { token: activationToken } = await this.prisma.email_verify.create({
      data: {
        user_id: userId,
        created_at: new Date(),
      },
    });

    userData.favorite_categories.forEach(async category_id => {
      await this.prisma.user_has_category.create({
        data: {
          category_id,
          user_id: userId,
        },
      });
    });
    
    await this.prisma.$disconnect();

    return { activationToken, userId };
  }

  async userAlreadyExists(userEmail: string): Promise<boolean> {
    await this.prisma.$connect();
    
    const user = await this.prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    
    if (user) {
      await this.prisma.$disconnect();
      return true;
    }
    
    await this.prisma.$disconnect();
    return false;
  }

  async userAlreadyActivated(activationToken: string): Promise<boolean> {
    await this.prisma.$connect();

    const userFinded = await this.prisma.email_verify.findFirst({
      where: {
        token: activationToken,
      },
    });

    if (userFinded?.verified_at instanceof Date) {
      await this.prisma.$disconnect();
      return true;
    }

    await this.prisma.$disconnect();
    return false;
  }

  async activateUser(activationToken: string) {
    await this.prisma.$connect();

    const user = await this.prisma.email_verify.findFirst({
      where: {
        token: activationToken,
      },
      select: {
        user_id: true,
      },
    });

    const user_id = user?.user_id;

    await this.prisma.email_verify.update({
      where: {
        user_id,
      },
      data: {
        verified_at: new Date(),
      },
    });

    await this.prisma.$disconnect();
  }
}