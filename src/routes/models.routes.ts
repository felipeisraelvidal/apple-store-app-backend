import { getModelByIDController } from '@useCases/GetModelByID';
import { getModelsController } from '@useCases/GetModels';
import { Router } from 'express';

const modelsRouter = Router();

modelsRouter.get('/', (req, res) => {
    return getModelsController.handle(req, res);
});

modelsRouter.get('/:id', (req, res) => {
    return getModelByIDController.handle(req, res);
});

export default modelsRouter;
