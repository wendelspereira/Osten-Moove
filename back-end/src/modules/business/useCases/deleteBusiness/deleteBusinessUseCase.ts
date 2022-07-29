import { AppError } from "../../../../shared/error/AppError";
import { BusinessRepository } from "../../infra/sqlite/repository/BusinessRepository";

export class DeleteBusinessUseCase {
  async execute(id: string): Promise<void> {
    const numberId = parseInt(id);
    const businessRepository = new BusinessRepository();
    const business = await businessRepository.findById(parseInt(id));
    if (!business) {
      throw new AppError("No data found for given id!");
    }
    await businessRepository.delete(numberId);
  }
}
