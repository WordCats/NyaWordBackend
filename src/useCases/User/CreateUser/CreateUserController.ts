import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserDTO } from "./CreateUserDTO";
import { User } from "../../../entities/User";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}
  
  async handle(req: Request, res: Response) {
    const { 
      name, 
      email, 
      password, 
      favoriteCategories, 
    } = req.body as CreateUserDTO;

    const userData = new User(name, email, password, 1, favoriteCategories);

    try {
      const acessToken = await this.createUserUseCase.execute(userData); 
      res.status(201).send({
        status: 201,
        message: "User Created!",
        data: acessToken,
      });
    } catch(e) {
      const err = e as Error;
      res.status(400).send({
        error: err.message,
      });
    }
  }
}