import { Product } from '@entities/Product';
import { IProductsRepository } from '@repositories/IProductsRepository';

export class GetProductsUseCase {
    private productsRepository: IProductsRepository;

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(): Promise<Product[]> {
        return await this.productsRepository.findAll();
    }
}
