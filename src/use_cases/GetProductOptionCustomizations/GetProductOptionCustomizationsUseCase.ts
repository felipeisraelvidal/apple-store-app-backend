import ProductOptionCustomizationDTO, { IProductOptionCustomizationDTO } from '@dtos/ProductOptionCustomizationDTO';
import { ProductsRepository } from '@repositories/implementations/ProductsRepository';
import { IGetProductOptionCustomizationsRequestDTO } from './GetProductOptionCustomizationsDTO';

export class GetProductOptionCustomizationsUseCase {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(data: IGetProductOptionCustomizationsRequestDTO): Promise<IProductOptionCustomizationDTO[]> {
        const customizations = await this.productsRepository.findProductOptionCustomizations(
            data.productId,
            data.optionId,
        );

        return ProductOptionCustomizationDTO.ofList(customizations);
    }
}
