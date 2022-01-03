import { ProductsRepository } from '@repositories/implementations/ProductsRepository';
import { GetProductsUseCase } from './GetProductsUseCase';
import { GetProductsController } from './GetProductsController';

const productsRepository = new ProductsRepository;

const getProductsUseCase = new GetProductsUseCase(productsRepository);

const getProductsController = new GetProductsController(getProductsUseCase);

export { getProductsUseCase, getProductsController };
