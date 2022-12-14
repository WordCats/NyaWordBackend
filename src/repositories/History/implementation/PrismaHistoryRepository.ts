import { PrismaClient } from "@prisma/client";
import { History } from "../../../entities/History";
import { IHistoryRepository } from "../IHistoryRepository";

export class PrismaHistoryRepository implements IHistoryRepository {
  private readonly prisma = new PrismaClient();

  async createHistory(historyData: History): Promise<void> {
    await this.prisma.$connect();
    
    await this.prisma.history.create({
      data: historyData,
    });

    await this.prisma.$disconnect();
  }
}