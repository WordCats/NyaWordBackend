import { PrismaUserRepository } from "../../repositories/User/implementation/PrismaUserRepository";
import { GetUserFavoriteCategoriesController } from "./GetUserFavoriteCategoriesController";
import { GetUserFavoriteCategoriesUseCase } from "./GetUserFavoriteCategoriesUseCase";

const prismaUserRespository = new PrismaUserRepository();
const getUserFavoriteCategoriesUseCase = new GetUserFavoriteCategoriesUseCase(
  prismaUserRespository,
);
const getUserFavoriteCategoriesController = new GetUserFavoriteCategoriesController(
  getUserFavoriteCategoriesUseCase,
);

export { getUserFavoriteCategoriesController };