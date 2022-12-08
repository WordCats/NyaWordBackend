import { Request, Response } from "express";
import { PrismaUserRepository } from "../../repositories/User/implementation/PrismaUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserController {
  async handle(req: Request, res: Response) { 
    const { name, email, password } = req.body as CreateUserDTO;
    
    const createUserUseCase = new CreateUserUseCase(
      new PrismaUserRepository(),
    );
    
    const userData = new User(name, email, password, 10);

    try {
      const activationToken = await createUserUseCase.execute(userData); 
      res.status(201).send({
        status: "User Created!",
        activationToken,
      });
    } catch(e) {
      const err = e as Error;
      res.status(400).send({
        error: err.message,
      });
    }
  }
}