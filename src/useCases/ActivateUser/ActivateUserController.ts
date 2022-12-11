import { Request, Response } from "express";
import { ActivateUserDTO } from "./ActivateUserDTO";
import { ActivateUserUseCase } from "./ActivateUserUseCase";

export class ActivateUserController {
  constructor(
    private activateUserUseCase: ActivateUserUseCase,
  ) {}
  
  async handle(req: Request, res: Response) {
    const { activationToken } = req.body as ActivateUserDTO;
    
    try {
      await this.activateUserUseCase.execute(activationToken);
      res.status(200).send({
        status: "User account activated!",
      });
    } catch(e) {
      const err = e as Error; 
      res.status(400).send({
        error: err.message,
      });
    }
  }
}