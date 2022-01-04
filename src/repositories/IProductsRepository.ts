import { Product } from '@entities/Product';
import { ProductOption } from '@entities/ProductOption';
import { ProductOptionCustomization } from '@entities/ProductOptionCustomization';

export interface IProductsRepository {
    findAll(): Promise<Product[]>;
    findProductsByFamily(familyId: number): Promise<Product[]>;
    findProductByID(productId: number): Promise<Product>;
    findProductOptionCustomizations(productId: number, optionId: number): Promise<ProductOptionCustomization[]>;
    findProductOptions(productId: number): Promise<ProductOption[]>;
}
