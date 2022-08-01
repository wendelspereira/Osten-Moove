import { AppError } from "../../../../shared/error/AppError";
import { Business } from "../../infra/typeorm/entity/Business";
import { BusinessRepository } from "../../infra/typeorm/repository/BusinessRepository";

export class FindBusinessByIdUseCase {
  async execute(id: string): Promise<Business | null> {
    const businessRepository = new BusinessRepository();
    const numberId = parseInt(id);
    const business = await businessRepository.findById(numberId);

    if (!business) {
      throw new AppError("Data not found for id given!", 400);
    }
    const result = await businessRepository.findById(numberId);
    return result;
  }
}
