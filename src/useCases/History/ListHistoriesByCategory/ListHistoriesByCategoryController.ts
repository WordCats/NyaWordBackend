import { Request, Response } from "express";
import { ListHistoriesByCategoryUseCase } from "./ListHistoriesByCategoryUseCase";

export class ListHistoriesByCategoryController {
  constructor(
    private readonly listHistoriesByCategoryUseCase: ListHistoriesByCategoryUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    let { page, quantility } = req.query;
    const { category } = req.params;

    try {
      if (page === undefined) page = '1';
      if (quantility === undefined) quantility = '10';

      const histories = await this.listHistoriesByCategoryUseCase.execute(
        Number(page), 
        Number(quantility),
        category,
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