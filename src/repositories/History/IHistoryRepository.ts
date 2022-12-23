import { History } from "../../entities/History";

export interface IListHistoriesResponse {
  title: string,
  description: string,
  mainImage: string,
  likes: number,
  author_name: string,
  author_image: string | null,
}

export interface IHistoryRepository {
  createHistory(historyData: History): Promise<void>;
  listHistories(page: number, quantility: number): Promise<IListHistoriesResponse[]>;
  listHistoriesByCategory(page: number, quantility: number, category: string): Promise<IListHistoriesResponse[]>;
}
