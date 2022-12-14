import { Request, Response } from "express";
import { History } from "../../../entities/History";
import { CreateHistoryDTO } from "./CreateHistoryDTO";
import { CreateHistoryUseCase } from "./CreateHistoryUseCase";

export class CreateHistoryController { 
  constructor(
    private readonly createHistoryUseCase: CreateHistoryUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { recomended, title, user_id } = req.body as CreateHistoryDTO;
    
    const history = new History(
      title,
      user_id,
      1, 
      recomended, 
      0, 
      new Date(), 
      null, 
      undefined
    );

    try {
      await this.createHistoryUseCase.execute(history);
      res.status(201).send({
        status: 201,
        message: "Story created successfully!",
      })
    } catch(e) {
      const err = e as Error;
      res.status(400).send({
        status: 400,
        error: err.message,
      });
    }
  }
}
