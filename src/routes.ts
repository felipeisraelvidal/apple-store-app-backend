import { Router } from 'express';
import { getFamiliesController } from '@useCases/GetFamilies';
import { getFamilyByIDController } from '@useCases/GetFamilyByID';
import { getModelsController } from '@useCases/GetModels';
import { getModelByIDController } from '@useCases/GetModelByID';
import { getProductsController } from '@useCases/GetProducts';
import { getProductsByFamilyController } from '@useCases/GetProductsByFamily';
import { getProductByIDController } from '@useCases/GetProductByID';

const router = Router();

router.get('/families', (req, res) => {
    return getFamiliesController.handle(req, res);
});

router.get('/families/:id', (req, res) => {
    return getFamilyByIDController.handle(req, res);
});

router.get('/families/:familyId/products', (req, res) => {
    return getProductsByFamilyController.handle(req, res);
});

router.get('/models', (req, res) => {
    return getModelsController.handle(req, res);
});

router.get('/models/:id', (req, res) => {
    return getModelByIDController.handle(req, res);
});

router.get('/products', (req, res) => {
    return getProductsController.handle(req, res);
});

router.get('/products/:productId', (req, res) => {
    return getProductByIDController.handle(req, res);
});

router.get('/products/:productId/options/:optionId/customizations', (req, res) => {
    return res.send('Get all product option customizations');
});

router.get('/products/:productId/details', (req, res) => {
    return res.send('Get product details (feed about the product)');
});

export default router;
