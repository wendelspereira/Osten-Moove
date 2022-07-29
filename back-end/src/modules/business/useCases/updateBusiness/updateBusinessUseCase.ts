import { AppError } from "../../../../shared/error/AppError";
import { validateCNPJ } from "../../../../utils/cnpjValidate.js";
import { IUpdateBusinessDTO } from "../../dtos/IBusinessDTOs";
import { BusinessRepository } from "../../infra/sqlite/repository/BusinessRepository";

export class UpdateBusinessUseCase {
  async execute(data: IUpdateBusinessDTO, id: string) {

    const numberId = parseInt(id)
    const businessRepository = new BusinessRepository();

    const isValidCnpj = validateCNPJ(data.cnpj);
    if (!isValidCnpj) {
      throw new AppError("Invalid CNPJ!", 450);
    }

    await businessRepository.update(numberId, data);
  }
}
