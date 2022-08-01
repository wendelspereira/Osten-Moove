import { AppError } from "../../../../shared/error/AppError";
import { Business } from "../../infra/typeorm/entity/Business";
import { BusinessRepository } from "../../infra/typeorm/repository/BusinessRepository";

export class FindBusinessByTradeNameUseCase {
  async execute(tradeName: string): Promise<Business[] | []> {
    if (!tradeName) {
      return [];
    }
    const businessRepository = new BusinessRepository();
    const result = await businessRepository.findByTradeName(tradeName);
    return result;
  }
}
