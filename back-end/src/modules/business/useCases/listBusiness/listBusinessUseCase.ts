import { Business } from "../../infra/typeorm/entity/Business";
import { BusinessRepository } from "../../infra/typeorm/repository/BusinessRepository";

export class ListBusinessUseCase {
  async execute(): Promise<Business[] | []> {
    const businessRepository = new BusinessRepository();
    const result = await businessRepository.list();
    return result;
  }
}

