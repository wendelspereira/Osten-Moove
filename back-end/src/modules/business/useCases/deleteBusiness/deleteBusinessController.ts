import { Request, Response } from "express";
import { AppError } from "../../../../shared/error/AppError";
import { DeleteBusinessUseCase } from "./deleteBusinessUseCase";

export class DeleteBusinessController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.query?.id as string;
    if (!id) {
      throw new AppError("No given id!", 400);
    }
    const deleteBusinessUseCase = new DeleteBusinessUseCase();
    await deleteBusinessUseCase.execute(id);
    return response.status(204).json({ msg: "deleted" });
  }
}
