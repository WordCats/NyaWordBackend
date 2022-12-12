import { IUserRepository } from "../../repositories/User/IUserRepository";

export class GetUserFavoriteCategoriesUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(userId: number) {
    return await this.userRepository.getUserFavoriteCategories(
      userId
    ); 
  }
}