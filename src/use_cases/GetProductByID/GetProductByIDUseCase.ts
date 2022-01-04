import { IProductsRepository } from '@repositories/IProductsRepository';
import { IGetProductByIDRequestDTO } from './GetProductByIDDTO';
import ProductDTO, { IProductDTO } from '@dtos/ProductDTO';

export class GetProductByIDUseCase {
    private productsRepository: IProductsRepository

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(data: IGetProductByIDRequestDTO): Promise<IProductDTO> {
        const product = await this.productsRepository.findProductByID(data.productId);
        return ProductDTO.of(product);
    }
}
