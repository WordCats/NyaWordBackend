import { Router } from "express";
import { getAllCategoriesController } from "../useCases/GetAllCategories";
import { getUserFavoriteCategoriesController } from "../useCases/GetUserFavoriteCategories";

export const categoryRouter = Router();

categoryRouter.get('/categories', (req, res) => {
  return getAllCategoriesController.handle(req, res);
});

categoryRouter.get('/categories/users/:userId', (req, res) => {
  return getUserFavoriteCategoriesController.handle(req, res);
});
