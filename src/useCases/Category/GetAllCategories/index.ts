import { PrismaCategoryRepository } from "../../../repositories/Category/implementation/PrismaCategoryRepository";
import { GetAllCategoriesController } from "./GetAllCategoriesController";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

const prismaCategoryRepository = new PrismaCategoryRepository();
const getAllCategoriesUseCase = new GetAllCategoriesUseCase(
  prismaCategoryRepository,
);
const getAllCategoriesController = new GetAllCategoriesController(
  getAllCategoriesUseCase,
);

export { getAllCategoriesController };