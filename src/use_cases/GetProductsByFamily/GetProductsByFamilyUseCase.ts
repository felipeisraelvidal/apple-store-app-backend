import { IProductsRepository } from '@repositories/IProductsRepository';
import GetProductsByFamilyDTO, { GetProductsByFamilyRequestDTO } from './GetProductsByFamilyDTO';

export class GetProductsByFamilyUseCase {
    private productsRepository: IProductsRepository;

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(data: GetProductsByFamilyRequestDTO): Promise<GetProductsByFamilyDTO[]> {
        return await this.productsRepository.findProductsByFamily(data.familyId);
    }
}
