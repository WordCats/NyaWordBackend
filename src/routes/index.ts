import { Router } from "express";
import { categoryRouter } from "./category";
import { historyRouter } from "./history";
import { userRouter } from "./user";

export const router = Router();

router.use(userRouter);
router.use(categoryRouter);
router.use(historyRouter);
