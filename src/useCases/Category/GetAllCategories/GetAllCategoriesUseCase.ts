import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";

export class GetAllCategoriesUseCase {
  constructor(
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute() {
    return this.categoryRepository.getAllCategories();
  }
}