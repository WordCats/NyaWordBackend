import { CreateUserController } from "./CreateUserController";
import { PrismaUserRepository } from "../../../repositories/User/implementation/PrismaUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { MailtrapMailProvider } from "../../../providers/Mail/implementation/MailtrapMailProvider";

const prismaUserRepository = new PrismaUserRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  prismaUserRepository,
  mailtrapMailProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);

export { createUserController };