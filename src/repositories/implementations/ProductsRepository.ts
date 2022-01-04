import { Product } from '@entities/Product';
import { ProductOptionCustomization } from '@entities/ProductOptionCustomization';
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

        const products = await repo
            .createQueryBuilder('product')
            .where('product.id_family = :familyId', { familyId })
            .leftJoinAndSelect('product.model', 'model')
            .leftJoinAndSelect('product.options', 'option')
            .getMany();

        return products.map(product => GetProductsByFamilyDTO.of(product));
    }

    async findProductByID(productId: number): Promise<Product> {
        const repo = getRepository(Product);

        console.log(productId);

        const product = await repo
            .createQueryBuilder('product')
            .where('product.id = :productId', { productId })
            .leftJoinAndSelect('product.options', 'option')
            .leftJoinAndSelect('option.specs', 'optionSpec')
            .getOne();

        if (!product) {
            console.log('Product not found');
            throw new Error('Product not found');
        }

        return product;
    }

    async findProductOptionCustomizations(productId: number, optionId: number): Promise<ProductOptionCustomization[]> {
        const repo = getRepository(ProductOptionCustomization);

        const customizations = await repo
            .createQueryBuilder('customization')
            .where('customization.id_product_option = :optionId', { optionId })
            .leftJoinAndSelect('customization.items', 'item')
            .addOrderBy('item.name', 'ASC')
            .getMany();

        return customizations;
    }
}
