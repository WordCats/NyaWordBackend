import { PrismaHistoryRepository } from "../../../repositories/History/implementation/PrismaHistoryRepository";
import { ListHistoriesController } from "./ListHistoriesController";
import { ListHistoriesUseCase } from "./ListHistoriesUseCase";

const prismaHistoryRepository = new PrismaHistoryRepository();
const listHistoriesUseCase = new ListHistoriesUseCase(
  prismaHistoryRepository,
);
const listHistoriesController = new ListHistoriesController(
  listHistoriesUseCase,
);

export { listHistoriesController };