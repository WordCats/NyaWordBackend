import { Router } from "express";
import { userShouldCan } from "../middlewares/permission";
import { TokenValidation } from "../middlewares/tokenValidation";
import { createHistoryController } from "../useCases/History/CreateHistory";

export const historyRouter = Router();

historyRouter.use(TokenValidation);

historyRouter.post('/histories', (req, res) => {
  return createHistoryController.handle(req, res);
});
