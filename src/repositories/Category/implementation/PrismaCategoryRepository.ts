import { PrismaClient } from "@prisma/client";
import { Category } from "../../../entities/Category";

export class PrismaCategoryRepository {
  private readonly prisma = new PrismaClient();

  async getAllCategories(): Promise<Category[]> {
    await this.prisma.$connect();    

    const categoriesRaw = await this.prisma.category.findMany();
    
    await this.prisma.$disconnect();

    const categories = categoriesRaw.map(value => new Category(
      value.name,
      value.created_at,
      value.id,
      value.update_at,
    ));

    return categories;
  }
  
  async getUserFavoriteCategories(userId: number): Promise<Category[]> {
    await this.prisma.$connect();

    const favoriteCategoriesNumbers = await this.prisma.user_has_category.findMany({
      where: {
        user_id: userId,
      },
    });

    let favoriteCategories: Category[] = [];

    for (const fgn of favoriteCategoriesNumbers) {
      const category = await this.prisma.category.findUnique({
        where: {
          id: fgn.category_id,
        },
      })
      favoriteCategories.push(new Category(
        category!.name,
        category!.created_at,
        category!.id,
        category!.update_at,
      ));
    }

    await this.prisma.$disconnect();
    
    return favoriteCategories;
  }
}