import { Request, Response } from 'express';
import { GetProductOptionCustomizationsUseCase } from './GetProductOptionCustomizationsUseCase';

export class GetProductOptionCustomizationsController {
    private getProductOptionCustomizationsUseCase: GetProductOptionCustomizationsUseCase;

    constructor(getProductOptionCustomizationsUseCase: GetProductOptionCustomizationsUseCase) {
        this.getProductOptionCustomizationsUseCase = getProductOptionCustomizationsUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { productId, optionId } = request.params;

        try {
            const model = await this.getProductOptionCustomizationsUseCase.execute({
                productId: parseInt(productId),
                optionId: parseInt(optionId),
            });

            return response.json(model);
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.',
            });
        }
    }
}
