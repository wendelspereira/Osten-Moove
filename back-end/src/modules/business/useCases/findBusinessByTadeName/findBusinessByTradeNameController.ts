import { Request, Response } from "express";
import { AppError } from "../../../../shared/error/AppError";
import { FindBusinessByTradeNameUseCase } from "./findBusinessByTradeNameUseCase";

export class FindBusinessByTradeNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const tradeName = request.query?.tradeName as string;
    if (!tradeName) {
      throw new AppError("No trade name given!", 400);
    }
    const findBusinessByTradeNameUseCase = new FindBusinessByTradeNameUseCase();
    const result = await findBusinessByTradeNameUseCase.execute(tradeName);

    return response.json(result);
  }
}
