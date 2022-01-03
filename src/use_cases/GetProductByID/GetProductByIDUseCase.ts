import { IProductsRepository } from '@repositories/IProductsRepository';
import { GetProductByIDRequestDTO } from './GetProductByIDDTO';
import GetProductByIDResponseDTO from './GetProductByIDDTO';

export class GetProductByIDUseCase {
    private productsRepository: IProductsRepository

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(data: GetProductByIDRequestDTO): Promise<GetProductByIDResponseDTO> {
        const products = await this.productsRepository.findProductByID(data.productId);
        return GetProductByIDResponseDTO.of(products);
    }
}
