import { Request, Response } from 'express';
import { GetModelsUseCase } from './GetModelsUseCase';

export class GetModelsController {
    private getModelsUseCase: GetModelsUseCase;

    constructor(getModelsUseCase: GetModelsUseCase) {
        this.getModelsUseCase = getModelsUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const models = await this.getModelsUseCase.execute();
            return response.json(models);
        } catch (err) {
            return response.status(400).json({
                message: err || 'Unexpected error.',
            });
        }
    }
}
