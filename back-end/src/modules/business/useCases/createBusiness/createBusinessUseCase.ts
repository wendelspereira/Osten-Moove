import { ICreateBusinessDTO } from "../../dtos/IBusinessDTOs";
import { AppError } from "../../../../shared/error/AppError";
import { validateCNPJ } from "../../../../utils/cnpjValidate.js";
import { BusinessRepository } from "../../infra/typeorm/repository/BusinessRepository";

export class CreateBusinessUseCase {
  async execute(data: ICreateBusinessDTO) {
    const businessRepository = new BusinessRepository();

    const businessAlreadyExists =
      await businessRepository.cnpjAlreadyRegistered(data.cnpj);

    if (businessAlreadyExists) {
      throw new AppError(
        "There is already a registration for the informed CNPJ!",
        409
      );
    }
    const isValidCnpj = validateCNPJ(data.cnpj);
    if (!isValidCnpj) {
      throw new AppError("Invalid CNPJ!", 450);
    }
    await businessRepository.create(data);
  }
}
