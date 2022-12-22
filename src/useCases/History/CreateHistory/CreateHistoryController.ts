import { Request, Response } from "express";
import { History } from "../../../entities/History";
import { DecodeJWT } from "../../../helpers/jwt/decodeJwt";
import { IAcessToken } from "../../../helpers/jwt/IAcessToken";
import { CreateHistoryDTO } from "./CreateHistoryDTO";
import { CreateHistoryUseCase } from "./CreateHistoryUseCase";

export class CreateHistoryController { 
  constructor(
    private readonly createHistoryUseCase: CreateHistoryUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const requestBody = req.body as CreateHistoryDTO;

    const { userId: user_id } = DecodeJWT(req.headers.authorization!) as IAcessToken;

    const history = new History({
      ...requestBody,
      user_id,
      status: 1,
      likes: 0,
      recomended: 0,
      created_at: new Date(),
    });

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
