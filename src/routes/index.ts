import { Router } from "express";
import { userRouter } from "./user";

export const router = Router();

router.use(userRouter);