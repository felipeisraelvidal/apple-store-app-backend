import { ProductsRepository } from '@repositories/implementations/ProductsRepository';
import { GetProductByIDController } from './GetProductByIDController';
import { GetProductByIDUseCase } from './GetProductByIDUseCase';

const productsRepository = new ProductsRepository();

const getProductByIDUseCase = new GetProductByIDUseCase(productsRepository);

const getProductByIDController = new GetProductByIDController(getProductByIDUseCase);

export { getProductByIDUseCase, getProductByIDController };
