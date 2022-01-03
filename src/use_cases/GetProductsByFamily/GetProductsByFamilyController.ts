import { Request, Response } from 'express';
import { GetProductsByFamilyUseCase } from './GetProductsByFamilyUseCase';

export class GetProductsByFamilyController {
    private getProductsByFamilyUseCase: GetProductsByFamilyUseCase;

    constructor(getProductsByFamilyUseCase: GetProductsByFamilyUseCase) {
        this.getProductsByFamilyUseCase = getProductsByFamilyUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { familyId } = request.params;

        try {
            const products = await this.getProductsByFamilyUseCase.execute({
                familyId: Number(familyId)
            });

            return response.json(products);
        } catch (err) {
            return response.status(400).json({
                message: err || 'Unexpected error.'
            });
        }
    }
}
