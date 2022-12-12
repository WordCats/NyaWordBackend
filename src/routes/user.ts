import { Router } from "express";
import { activateUserController } from "../useCases/ActivateUser";
import { createUserController } from "../useCases/CreateUser";
import { getUserFavoriteCategoriesController } from "../useCases/GetUserFavoriteCategories";

export const userRouter = Router();

userRouter.post('/users', (req, res) => {
  return createUserController.handle(req, res);
});

userRouter.put('/users/activate', (req, res) => {
  return activateUserController.handle(req, res);
});

userRouter.get('/users/:userId/categories', (req, res) => {
  return getUserFavoriteCategoriesController.handle(req, res);
});
