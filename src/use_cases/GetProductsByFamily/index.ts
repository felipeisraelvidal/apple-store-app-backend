import { ProductsRepository } from '@repositories/implementations/ProductsRepository';
import { GetProductsByFamilyController } from './GetProductsByFamilyController';
import { GetProductsByFamilyUseCase } from './GetProductsByFamilyUseCase';

const productsRepository = new ProductsRepository();

const getProductsByFamilyUseCase = new GetProductsByFamilyUseCase(productsRepository);

const getProductsByFamilyController = new GetProductsByFamilyController(getProductsByFamilyUseCase);

export { getProductsByFamilyUseCase, getProductsByFamilyController };
