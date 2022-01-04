import ProductOptionDTO, { IProductOptionDTO } from '@dtos/ProductOptionDTO';
import { IProductsRepository } from '@repositories/IProductsRepository';
import { IGetProductOptionsRequestDTO } from './GetProductOptionsDTO';

export class GetProductOptionsUseCase {
    private productsRepository: IProductsRepository;

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(data: IGetProductOptionsRequestDTO): Promise<IProductOptionDTO[]> {
        const productOptions = await this.productsRepository.findProductOptions(data.productId);
        return ProductOptionDTO.ofList(productOptions);
    }
}
