import { getProductByIDController } from '@useCases/GetProductByID';
import { getProductOptionCustomizationsController } from '@useCases/GetProductOptionCustomizations';
import { getProductOptionsController } from '@useCases/GetProductOptions';
import { getProductsController } from '@useCases/GetProducts';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', (req, res) => {
    return getProductsController.handle(req, res);
});

productsRouter.get('/:productId', (req, res) => {
    return getProductByIDController.handle(req, res);
});

productsRouter.get('/:productId/options', (req, res) => {
    return getProductOptionsController.handle(req, res);
});

productsRouter.get('/:productId/options/:optionId/customizations', (req, res) => {
    return getProductOptionCustomizationsController.handle(req, res);
});

productsRouter.get('/:productId/details', (req, res) => {
    return res.send('Get product details (feed about the product)');
});

export default productsRouter;
