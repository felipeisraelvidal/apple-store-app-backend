import { Router } from 'express';
import familiesRouter from './families.routes';
import modelsRouter from './models.routes';
import productsRouter from './products.routes';

const routes = Router();

routes.use('/families', familiesRouter);
routes.use('/models', modelsRouter);
routes.use('/products', productsRouter);

export default routes;
