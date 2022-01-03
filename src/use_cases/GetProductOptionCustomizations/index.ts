import { ProductsRepository } from '@repositories/implementations/ProductsRepository';
import { GetProductOptionCustomizationsController } from './GetProductOptionCustomizationsController';
import { GetProductOptionCustomizationsUseCase } from './GetProductOptionCustomizationsUseCase';

const productsRepository = new ProductsRepository();

const getProductOptionCustomizationsUseCase = new GetProductOptionCustomizationsUseCase(productsRepository);

const getProductOptionCustomizationsController = new GetProductOptionCustomizationsController(getProductOptionCustomizationsUseCase);

export { getProductOptionCustomizationsUseCase, getProductOptionCustomizationsController };
