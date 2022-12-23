import { Request, Response } from "express";
import { ListHistoriesUseCase } from "./ListHistoriesUseCase";

export class ListHistoriesController {
  constructor(
    private readonly listHistoriesUseCase: ListHistoriesUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    let { page, quantility } = req.query

    try {
      if (page === undefined) page = '1';
      if (quantility === undefined) quantility = '10';

      const histories = await this.listHistoriesUseCase.execute(
        Number(page), 
        Number(quantility),
      );
      res.status(201).send({
        status: 200,
        message: "Sucess!",
        data: histories,
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