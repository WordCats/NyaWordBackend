import { PrismaCategoryRepository } from "../../../repositories/Category/implementation/PrismaCategoryRepository";
import { GetUserFavoriteCategoriesController } from "./GetUserFavoriteCategoriesController";
import { GetUserFavoriteCategoriesUseCase } from "./GetUserFavoriteCategoriesUseCase";

const prismaCategoryRepository = new PrismaCategoryRepository();
const getUserFavoriteCategoriesUseCase = new GetUserFavoriteCategoriesUseCase(
  prismaCategoryRepository,
);
const getUserFavoriteCategoriesController = new GetUserFavoriteCategoriesController(
  getUserFavoriteCategoriesUseCase,
);

export { getUserFavoriteCategoriesController };