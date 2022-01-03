import { Product } from '@entities/Product';
import GetProductsByFamilyDTO from '@useCases/GetProductsByFamily/GetProductsByFamilyDTO';

export interface IProductsRepository {
    findAll(): Promise<Product[]>;
    findProductsByFamily(familyId: number): Promise<GetProductsByFamilyDTO[]>;
    findProductByID(productId: number): Promise<Product>;
}
