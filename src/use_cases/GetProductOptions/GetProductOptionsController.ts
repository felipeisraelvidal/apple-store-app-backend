import { Request, Response } from 'express';
import { GetProductOptionsUseCase } from './GetProductOptionsUseCase';

export class GetProductOptionsController {
    private getProductOptionsUseCase: GetProductOptionsUseCase;

    constructor(getProductOptionsUseCase: GetProductOptionsUseCase) {
        this.getProductOptionsUseCase = getProductOptionsUseCase;
    }

    async handle(request: Request, respose: Response): Promise<Response> {
        const { productId } = request.params;

        try {
            const productOptions = await this.getProductOptionsUseCase.execute({
                productId: parseInt(productId),
            });

            return respose.json(productOptions);
        } catch (err) {
            return respose.status(400).json({
                message: err || 'Unexpected error.',
            });
        }
    }
}
