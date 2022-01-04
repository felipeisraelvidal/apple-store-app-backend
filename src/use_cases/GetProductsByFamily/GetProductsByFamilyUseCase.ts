import ProductDTO, { IProductDTO } from '@dtos/ProductDTO';
import { IProductsRepository } from '@repositories/IProductsRepository';
import { IGetProductsByFamilyRequestDTO } from './GetProductsByFamilyDTO';

export class GetProductsByFamilyUseCase {
    private productsRepository: IProductsRepository;

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(data: IGetProductsByFamilyRequestDTO): Promise<IProductDTO[]> {
        const products = await this.productsRepository.findProductsByFamily(data.familyId);
        return ProductDTO.ofList(products);
    }
}
