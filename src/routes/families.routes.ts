import { getFamiliesController } from '@useCases/GetFamilies';
import { getFamilyByIDController } from '@useCases/GetFamilyByID';
import { getProductsByFamilyController } from '@useCases/GetProductsByFamily';
import { Router } from 'express';

const familiesRouter = Router();

familiesRouter.get('/', (req, res) => {
    return getFamiliesController.handle(req, res);
});

familiesRouter.get('/:id', (req, res) => {
    return getFamilyByIDController.handle(req, res);
});

familiesRouter.get('/:familyId/products', (req, res) => {
    return getProductsByFamilyController.handle(req, res);
});

export default familiesRouter;
