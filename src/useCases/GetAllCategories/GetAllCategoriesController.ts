import { Request, Response } from "express";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

export class GetAllCategoriesController {
  constructor(
    private readonly getAllCategoriesUseCase: GetAllCategoriesUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const availableCategories = await this.getAllCategoriesUseCase.execute();
      res.status(200).send({
        status: 200,
        message: "Sucess!",
        data: availableCategories,
      })
    } catch(e) {
      const err = e as Error;
      res.status(400).send({
        error: err.message,
      });
    }
  }
}