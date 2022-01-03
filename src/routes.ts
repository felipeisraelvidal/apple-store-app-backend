import { Router } from 'express';
import { getFamiliesController } from '@useCases/GetFamilies';
import { getFamilyByIDController } from '@useCases/GetFamilyByID';

const router = Router();

router.get('/families', (req, res) => {
    return getFamiliesController.handle(req, res);
});

router.get('/families/:id', (req, res) => {
    return getFamilyByIDController.handle(req, res);
});

export default router;
