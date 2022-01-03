import { ModelsRepository } from '@repositories/implementations/ModelsRepository';
import { GetModelsByIDController } from './GetModelsByIDController';
import { GetModelByIDUseCase } from './GetModelByIDUseCase';

const modelsRepository = new ModelsRepository;

const getModelByIDUseCase = new GetModelByIDUseCase(modelsRepository);

const getModelByIDController = new GetModelsByIDController(getModelByIDUseCase);

export { getModelByIDUseCase, getModelByIDController };
