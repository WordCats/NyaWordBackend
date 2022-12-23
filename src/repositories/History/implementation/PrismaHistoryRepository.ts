import { PrismaClient } from "@prisma/client";
import { History } from "../../../entities/History";
import { IHistoryRepository, IListHistoriesResponse } from "../IHistoryRepository";

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

  async listHistories(page: number, quantility: number) {
    await this.prisma.$connect();
    
    let numberOfItemsPerPage = quantility;
    let cursor = (page - 1) * numberOfItemsPerPage;

    const historiesData = await this.prisma.history.findMany({
      select: {
        title: true,
        description: true,
        likes: true,
        gallery: {
          select: {
            file: true,
          },
          where: {
            main: 1,
          },
        },
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      skip: cursor,
      take: numberOfItemsPerPage,
    });

    const histories: IListHistoriesResponse[] = historiesData.map(data => {
      return {
        title: data.title,
        description: data.description,
        likes: data.likes,
        author_name: data.user.name,
        author_image: data.user.image,
        mainImage: data.gallery[0].file,
      };
    });

    await this.prisma.$disconnect();

    return histories;
  }

  async listHistoriesByCategory(page: number, quantility: number, category: string) {
    await this.prisma.$connect();

    let numberOfItemsPerPage = quantility;
    let cursor = (page - 1) * numberOfItemsPerPage;

    const historiesData = await this.prisma.history.findMany({
      where: {
        categories: {
          every: {
            category: {
              name: category,
            },
          },
        },
      },
      select: {
        title: true,
        description: true,
        likes: true,
        gallery: {
          select: {
            file: true,
          },
          where: {
            main: 1,
          },
        },
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      skip: cursor,
      take: numberOfItemsPerPage,
    });

    const histories: IListHistoriesResponse[] = historiesData.map(data => {
      return {
        title: data.title,
        description: data.description,
        likes: data.likes,
        author_name: data.user.name,
        author_image: data.user.image,
        mainImage: data.gallery[0].file,
      };
    });

    await this.prisma.$disconnect();

    return histories;
  }
}