import { Product } from '@entities/Product';
import { IProductsRepository } from '@repositories/IProductsRepository';
import { getRepository } from 'typeorm';

export class ProductsRepository implements IProductsRepository {
    async findAll(): Promise<Product[]> {
        const repo = getRepository(Product);

        const products = await repo
            .createQueryBuilder('product')
            .getMany();

        return products;
    }
}
