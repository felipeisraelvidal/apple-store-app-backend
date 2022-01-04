import { Product } from '@entities/Product';
import { ProductOption } from '@entities/ProductOption';
import { ProductOptionCustomization } from '@entities/ProductOptionCustomization';
import { IProductsRepository } from '@repositories/IProductsRepository';
import { getRepository } from 'typeorm';

export class ProductsRepository implements IProductsRepository {
    async findAll(): Promise<Product[]> {
        const repo = getRepository(Product);

        const products = await repo
            .createQueryBuilder('product')
            .leftJoinAndSelect('product.family', 'family')
            .leftJoinAndSelect('product.model', 'model')
            .getMany();

        return products;
    }

    async findProductsByFamily(familyId: number): Promise<Product[]> {
        const repo = getRepository(Product);

        const products = await repo
            .createQueryBuilder('product')
            .where('product.id_family = :familyId', { familyId })
            .leftJoinAndSelect('product.model', 'model')
            .leftJoinAndSelect('product.family', 'family')
            .getMany();

        return products;
    }

    async findProductByID(productId: number): Promise<Product> {
        const repo = getRepository(Product);

        console.log(productId);

        const product = await repo
            .createQueryBuilder('product')
            .where('product.id = :productId', { productId })
            // .leftJoinAndSelect('product.options', 'option')
            // .leftJoinAndSelect('option.specs', 'optionSpec')
            .leftJoinAndSelect('product.model', 'model')
            .leftJoinAndSelect('product.family', 'family')
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

    async findProductOptions(productId: number): Promise<ProductOption[]> {
        const repo = getRepository(ProductOption);

        const options = await repo
            .createQueryBuilder('productOption')
            .where('productOption.id_product = :productId', { productId })
            .innerJoinAndSelect('productOption.specs', 'spec')
            .getMany();

        return options;
    }
}
