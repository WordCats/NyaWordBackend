import { Router } from "express";
import { createHistoryController } from "../useCases/History/CreateHistory";

export const historyRouter = Router();

historyRouter.post('/histories', (req, res) => {
  return createHistoryController.handle(req, res);
})
