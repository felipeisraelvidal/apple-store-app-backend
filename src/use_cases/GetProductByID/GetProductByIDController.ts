import { Request, Response } from 'express';
import { GetProductByIDUseCase } from './GetProductByIDUseCase';

export class GetProductByIDController {
    private getProductByIDUseCase: GetProductByIDUseCase;

    constructor(getProductByIDUseCase: GetProductByIDUseCase) {
        this.getProductByIDUseCase = getProductByIDUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { productId } = request.params;

        try {
            const model = await this.getProductByIDUseCase.execute({
                productId: parseInt(productId),
            });

            return response.json(model);
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.',
            });
        }
    }
}
