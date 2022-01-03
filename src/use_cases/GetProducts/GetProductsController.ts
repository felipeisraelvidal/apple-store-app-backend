import { Request, Response } from 'express';
import { GetProductsUseCase } from './GetProductsUseCase';

export class GetProductsController {
    private getProductsUseCase: GetProductsUseCase;

    constructor(getProductsUseCase: GetProductsUseCase) {
        this.getProductsUseCase = getProductsUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const products = await this.getProductsUseCase.execute();
            return response.json(products);
        } catch (err) {
            return response.status(400).json({
                message: err || 'Unexpected error.',
            });
        }
    }
}
