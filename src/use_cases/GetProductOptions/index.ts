import { ProductsRepository } from '@repositories/implementations/ProductsRepository';
import { GetProductOptionsController } from './GetProductOptionsController';
import { GetProductOptionsUseCase } from './GetProductOptionsUseCase';

const productsRepository = new ProductsRepository();

const getProductOptionsUseCase = new GetProductOptionsUseCase(productsRepository);

const getProductOptionsController = new GetProductOptionsController(getProductOptionsUseCase);

export { getProductOptionsUseCase, getProductOptionsController };
