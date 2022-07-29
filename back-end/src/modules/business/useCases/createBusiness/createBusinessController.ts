import { Request, Response } from "express";
import { AppError } from "../../../../shared/error/AppError";
import { ICreateBusinessDTO } from "../../dtos/IBusinessDTOs";
import { CreateBusinessUseCase } from "./createBusinessUseCase";

export class CreateBusinessController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateBusinessDTO = request.body;
    if (!data) {
      throw new AppError("Missing data in request", 500);
    }
    
    const createBusinessUseCase = new CreateBusinessUseCase();
    await createBusinessUseCase.execute(data);
    return response.status(201).json({ msg: "created" });
  }
}
