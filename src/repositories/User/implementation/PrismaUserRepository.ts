import { User } from "../../../entities/User";
import { IUserRepository, ActivationToken } from "../IUserRepository";
import { PrismaClient } from "@prisma/client";

export class PrismaUserRepository implements IUserRepository {
  private prisma = new PrismaClient();
  
  async saveAndGetGeneratedActivationToken(userData: User): Promise<ActivationToken> {
    await this.prisma.$connect();

    const userCreated = await this.prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        status: userData.status,
        image: userData.image,
      },
    });

    const { token } = await this.prisma.email_verify.create({
      data: {
        user_id: userCreated.id,
      }
    });
    
    await this.prisma.$disconnect();

    return token as ActivationToken;
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
}