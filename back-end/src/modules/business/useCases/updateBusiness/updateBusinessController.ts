import { Request, Response } from "express";
import { AppError } from "../../../../shared/error/AppError";
import { UpdateBusinessUseCase } from "./updateBusinessUseCase";

export class UpdateBusinessController {
    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;
        const id = request.query?.id as string;
        if (!id || !data) {
            throw new AppError("No id or data given", 400);
        }
        const updateBusinessUseCase = new UpdateBusinessUseCase();
        await updateBusinessUseCase.execute(data, id);
        return response.status(200).json({msg: "updated"});
    }
}

