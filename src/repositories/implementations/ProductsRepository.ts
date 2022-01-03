import { Product } from '@entities/Product';
import { IProductsRepository } from '@repositories/IProductsRepository';
import GetProductsByFamilyDTO from '@useCases/GetProductsByFamily/GetProductsByFamilyDTO';
import { getRepository } from 'typeorm';

export class ProductsRepository implements IProductsRepository {
    async findAll(): Promise<Product[]> {
        const repo = getRepository(Product);

        const products = await repo
            .createQueryBuilder('product')
            .getMany();

        return products;
    }

    async findProductsByFamily(familyId: number): Promise<GetProductsByFamilyDTO[]> {
        const repo = getRepository(Product);

        console.log(familyId);

        const products = await repo
            .createQueryBuilder('product')
            .where('product.id_family = :familyId', { familyId })
            .leftJoinAndSelect('product.options', 'option')
            .getMany();

        return products.map(product => GetProductsByFamilyDTO.of(product));
    }
}
