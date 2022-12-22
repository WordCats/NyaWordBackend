import { PrismaClient } from "@prisma/client";
import { History } from "../../../entities/History";
import { IHistoryRepository } from "../IHistoryRepository";

export class PrismaHistoryRepository implements IHistoryRepository {
  private readonly prisma = new PrismaClient();

  async createHistory(historyData: History): Promise<void> {
    await this.prisma.$connect();
    
    const categoriesData = historyData.props.associatedCategories.map(category_id => {
      return { category_id };
    });

    const galleryData = historyData.props.galleryOfImages.map(imageUrl => {
      return { file: imageUrl, main: 0 }; 
    });
    galleryData.push({ 
      file: historyData.props.mainImage,
      main: 1,
    });

    await this.prisma.history.create({
      data: {
        created_at: historyData.props.created_at,
        description: historyData.props.description,
        language: historyData.props.language,
        likes: historyData.props.likes,
        recomended: historyData.props.recomended,
        status: historyData.props.status,
        title: historyData.props.title,
        user_id: historyData.props.user_id,

        categories: {
          createMany: {
            data: categoriesData, 
          },
        },
        gallery: {
          createMany: {
            data: galleryData,
          },
        }
      },
    });

    await this.prisma.$disconnect();
  }
}