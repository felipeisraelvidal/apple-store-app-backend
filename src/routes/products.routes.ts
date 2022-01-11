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
    setTimeout(() => {
        return getProductOptionsController.handle(req, res);
    }, 3000);
});

productsRouter.get('/:productId/options/:optionId/customizations', (req, res) => {
    setTimeout(() => {
        return getProductOptionCustomizationsController.handle(req, res);
    }, 3000);
});

productsRouter.get('/:productId/details', (req, res) => {
    return res.send('Get product details (feed about the product)');
});

export default productsRouter;
