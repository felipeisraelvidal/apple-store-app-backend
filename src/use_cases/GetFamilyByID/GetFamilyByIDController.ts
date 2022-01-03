import { Request, Response } from 'express';
import { GetFamilyByIDUseCase } from './GetFamilyByIDUseCase';

export class GetFamilyByIDController {
    private getFamilyByIDUseCase: GetFamilyByIDUseCase;

    constructor(getFamilyByIDUseCase: GetFamilyByIDUseCase) {
        this.getFamilyByIDUseCase = getFamilyByIDUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const family = await this.getFamilyByIDUseCase.execute({
                id: parseInt(id),
            });

            return response.json(family);
        } catch (err) {
            return response.status(400).json({
                message: err || 'Unexpected error.',
            });
        }
    }
}
