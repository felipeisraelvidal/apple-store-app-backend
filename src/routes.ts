import { Router } from 'express';
import { getFamiliesController } from '@useCases/GetFamilies';
import { getFamilyByIDController } from '@useCases/GetFamilyByID';
import { getModelsController } from '@useCases/GetModels';
import { getModelByIDController } from '@useCases/GetModelsByID';

const router = Router();

router.get('/families', (req, res) => {
    return getFamiliesController.handle(req, res);
});

router.get('/families/:id', (req, res) => {
    return getFamilyByIDController.handle(req, res);
});

router.get('/models', (req, res) => {
    return getModelsController.handle(req, res);
});

router.get('/models/:id', (req, res) => {
    return getModelByIDController.handle(req, res);
});

export default router;
