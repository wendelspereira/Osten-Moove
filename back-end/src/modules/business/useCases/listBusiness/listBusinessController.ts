import { Request, Response } from "express";
import { ListBusinessUseCase } from "./listBusinessUseCase";

export class ListBusinessController {
    async handle(request: Request, response: Response): Promise<Response>{
        const listBusinessUseCase = new ListBusinessUseCase()
        const result = await listBusinessUseCase.execute()
        return response.json(result)
    }
}
