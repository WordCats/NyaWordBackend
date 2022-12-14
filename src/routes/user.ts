import { Router } from "express";
import { activateUserController } from "../useCases/User/ActivateUser";
import { createUserController } from "../useCases/User/CreateUser";

export const userRouter = Router();

userRouter.post('/users', (req, res) => {
  return createUserController.handle(req, res);
});

userRouter.put('/users/activate', (req, res) => {
  return activateUserController.handle(req, res);
});
