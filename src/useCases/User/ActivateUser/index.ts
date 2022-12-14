import { PrismaUserRepository } from "../../../repositories/User/implementation/PrismaUserRepository";
import { ActivateUserController } from "./ActivateUserController";
import { ActivateUserUseCase } from "./ActivateUserUseCase";

const prismaUserRepository = new PrismaUserRepository();
const activateUserUseCase = new ActivateUserUseCase(
  prismaUserRepository,
);
const activateUserController = new ActivateUserController(
  activateUserUseCase,
);

export { activateUserController };