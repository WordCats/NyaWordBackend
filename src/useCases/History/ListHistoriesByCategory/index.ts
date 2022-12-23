import { PrismaHistoryRepository } from "../../../repositories/History/implementation/PrismaHistoryRepository";
import { ListHistoriesByCategoryController } from "./ListHistoriesByCategoryController";
import { ListHistoriesByCategoryUseCase } from "./ListHistoriesByCategoryUseCase";

const prismaHistoryRepository = new PrismaHistoryRepository();
const listHistoriesByCategoryUseCase = new ListHistoriesByCategoryUseCase(
  prismaHistoryRepository,
);
const listHistoriesByCategoryController = new ListHistoriesByCategoryController(
  listHistoriesByCategoryUseCase,
);

export { listHistoriesByCategoryController };