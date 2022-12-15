import { Router } from "express";
import { TokenValidation } from "../middlewares/tokenValidation";
import { createHistoryController } from "../useCases/History/CreateHistory";

export const historyRouter = Router();

historyRouter.post('/histories', TokenValidation, (req, res) => {
  return createHistoryController.handle(req, res);
})
