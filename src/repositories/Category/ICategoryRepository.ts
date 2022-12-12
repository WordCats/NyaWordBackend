import { Category } from "../../entities/Category";

export interface ICategoryRepository {
  getUserFavoriteCategories(userId: number): Promise<Category[]>;
  getAllCategories(): Promise<Category[]>;
}
