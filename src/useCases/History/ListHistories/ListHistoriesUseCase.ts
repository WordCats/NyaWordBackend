import { IHistoryRepository } from "../../../repositories/History/IHistoryRepository";

export class ListHistoriesUseCase {
  constructor(
    private readonly historyRepository: IHistoryRepository,
  ) {}

  async execute(page: number, quantility: number) {
    return await this.historyRepository.listHistories(page, quantility);
  }
}