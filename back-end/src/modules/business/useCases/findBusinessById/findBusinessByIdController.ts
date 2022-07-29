import { Request, Response } from "express";
import { AppError } from "../../../../shared/error/AppError";
import { FindBusinessByIdUseCase } from "./findBusinessByIdUseCase";

export class FindBusinessByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.query?.id as string;
    if (!id) {
      throw new AppError("No id given!", 400);
    }
    const findBusinessByIdUseCase = new FindBusinessByIdUseCase();
    const result = await findBusinessByIdUseCase.execute(id);

    return response.json(result);
  }
}
