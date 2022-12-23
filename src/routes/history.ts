import { Router } from "express";
import { TokenValidation } from "../middlewares/tokenValidation";
import { createHistoryController } from "../useCases/History/CreateHistory";
import { listHistoriesController } from "../useCases/History/ListHistories";
import { listHistoriesByCategoryController } from "../useCases/History/ListHistoriesByCategory";

export const historyRouter = Router();

historyRouter.use(TokenValidation);

historyRouter.post('/histories', (req, res) => {
  return createHistoryController.handle(req, res);
});

historyRouter.get('/histories', (req, res) => {
  return listHistoriesController.handle(req, res);
});

historyRouter.get('/histories/:category', (req, res) => {
  return listHistoriesByCategoryController.handle(req, res);
});
