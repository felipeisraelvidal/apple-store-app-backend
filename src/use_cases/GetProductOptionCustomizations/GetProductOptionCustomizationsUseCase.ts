import { ProductOptionCustomization } from '@entities/ProductOptionCustomization';
import { ProductsRepository } from '@repositories/implementations/ProductsRepository';
import GetProductOptionCustomizationsDTO, { GetProductOptionCustomizationsRequestDTO } from './GetProductOptionCustomizationsDTO';

export class GetProductOptionCustomizationsUseCase {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(data: GetProductOptionCustomizationsRequestDTO): Promise<ProductOptionCustomization[]> {
        const customizations = await this.productsRepository.findProductOptionCustomizations(
            data.productId,
            data.optionId,
        );

        return GetProductOptionCustomizationsDTO.ofList(customizations);
    }
}
