import { PrismaHistoryRepository } from "../../../repositories/History/implementation/PrismaHistoryRepository";
import { CreateHistoryController } from "./CreateHistoryController";
import { CreateHistoryUseCase } from "./CreateHistoryUseCase";

const prismaHistoryRepository = new PrismaHistoryRepository();
const createHistoryUseCase = new CreateHistoryUseCase(
  prismaHistoryRepository,
);
const createHistoryController = new CreateHistoryController(
  createHistoryUseCase,
);

export { createHistoryController };