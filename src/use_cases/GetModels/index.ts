import { ModelsRepository } from '@repositories/implementations/ModelsRepository';
import { GetModelsController } from './GetModelsController';
import { GetModelsUseCase } from './GetModelsUseCase';

const modelsRepository = new ModelsRepository();

const getModelsUseCase = new GetModelsUseCase(modelsRepository);

const getModelsController = new GetModelsController(getModelsUseCase);

export { getModelsUseCase, getModelsController };
