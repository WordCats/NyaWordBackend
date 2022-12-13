import { Request, Response } from "express";
import { GetUserFavoriteCategoriesUseCase } from "./GetUserFavoriteCategoriesUseCase";

export class GetUserFavoriteCategoriesController {
  constructor(
    private readonly getUserFavoriteCategoriesUseCase: GetUserFavoriteCategoriesUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { userId } = req.params;
  
    try {
      const favoriteCategories = await this.getUserFavoriteCategoriesUseCase.execute(Number(userId));
      res.status(200).send({
        status: 200,
        message: "Sucess!",
        data: favoriteCategories,
      })
    } catch(e) {
      const err = e as Error;
      res.status(400).send({
        error: err.message,
      });
    }    
  }
}