import ProductDTO, { IProductDTO } from '@dtos/ProductDTO';
import { IProductsRepository } from '@repositories/IProductsRepository';

export class GetProductsUseCase {
    private productsRepository: IProductsRepository;

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(): Promise<IProductDTO[]> {
        const products = await this.productsRepository.findAll();
        return ProductDTO.ofList(products);
    }
}
