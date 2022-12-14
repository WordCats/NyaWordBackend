import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";

export class GetUserFavoriteCategoriesUseCase {
  constructor(
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(userId: number) {
    return await this.categoryRepository.getUserFavoriteCategories(
      userId
    ); 
  }
}