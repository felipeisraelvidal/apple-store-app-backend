import { ModelsRepository } from '@repositories/implementations/ModelsRepository';
import { GetModelByIDController } from './GetModelByIDController';
import { GetModelByIDUseCase } from './GetModelByIDUseCase';

const modelsRepository = new ModelsRepository;

const getModelByIDUseCase = new GetModelByIDUseCase(modelsRepository);

const getModelByIDController = new GetModelByIDController(getModelByIDUseCase);

export { getModelByIDUseCase, getModelByIDController };
