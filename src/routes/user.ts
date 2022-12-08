import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";

export const userRouter = Router();

userRouter.post('/users', createUserController.handle);