import { IProductsRepository } from '@repositories/IProductsRepository';
import GetProductOptionsDTO, { IGetProductOptionsRequestDTO, IGetProductOptionsResponseDTO } from './GetProductOptionsDTO';

export class GetProductOptionsUseCase {
    private productsRepository: IProductsRepository;

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(data: IGetProductOptionsRequestDTO): Promise<IGetProductOptionsResponseDTO[]> {
        const productOptions = await this.productsRepository.findProductOptions(data.productId);
        return GetProductOptionsDTO.ofList(productOptions);
    }
}
