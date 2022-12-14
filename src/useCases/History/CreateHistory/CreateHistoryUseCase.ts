import { History } from "../../../entities/History";
import { IHistoryRepository } from "../../../repositories/History/IHistoryRepository";

export class CreateHistoryUseCase {
  constructor(
    private readonly historyRepository: IHistoryRepository,
  ) {}

  async execute(historyData: History) {
    await this.historyRepository.createHistory(historyData);
  }
}
