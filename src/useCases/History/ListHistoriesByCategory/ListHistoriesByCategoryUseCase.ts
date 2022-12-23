import { IHistoryRepository } from "../../../repositories/History/IHistoryRepository";

export class ListHistoriesByCategoryUseCase {
  constructor(
    private readonly historyRepository: IHistoryRepository,
  ) {}

  async execute(page: number, quantility: number, category: string) {
    return await this.historyRepository.listHistoriesByCategory(page, quantility, category);
  }
}
