import { Business } from "../../infra/sqlite/entity/Business";
import { BusinessRepository } from "../../infra/sqlite/repository/BusinessRepository";

export class ListBusinessUseCase {
  async execute(): Promise<Business[] | []> {
    const businessRepository = new BusinessRepository();
    const result = await businessRepository.list();
    return result;
  }
}

