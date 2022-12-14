import { History } from "../../entities/History";

export interface IHistoryRepository {
  createHistory(historyData: History): Promise<void>;  
}
