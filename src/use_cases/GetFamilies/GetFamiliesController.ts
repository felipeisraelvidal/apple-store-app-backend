import { Request, Response } from 'express';
import { GetFamiliesUseCase } from './GetFamiliesUseCase';

// Recebe a request do express e devolve uma resposta
export class GetFamiliesController {
    private getFamiliesUseCase: GetFamiliesUseCase;

    constructor(getFamiliesUseCase: GetFamiliesUseCase) {
        this.getFamiliesUseCase = getFamiliesUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const families = await this.getFamiliesUseCase.execute();
            return response.json(families);
        } catch (err) {
            return response.status(400).json({
                message: err || 'Unexpected error.',
            });
        }
    }
}
