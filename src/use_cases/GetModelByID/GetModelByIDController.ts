import { Request, Response } from 'express';
import { GetModelByIDUseCase } from './GetModelByIDUseCase';

export class GetModelByIDController {
    private getModelByIDUseCase: GetModelByIDUseCase;

    constructor(getModelByIDUseCase: GetModelByIDUseCase) {
        this.getModelByIDUseCase = getModelByIDUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const model = await this.getModelByIDUseCase.execute({
                id: parseInt(id),
            });

            return response.json(model);
        } catch (err) {
            return response.status(400).json({
                message: err || 'Unexpected error.',
            });
        }
    }
}
