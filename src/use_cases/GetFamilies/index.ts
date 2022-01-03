import { FamiliesRepository } from '@repositories/implementations/FamiliesRepository';
import { GetFamiliesController } from './GetFamiliesController';
import { GetFamiliesUseCase } from './GetFamiliesUseCase';

const familiesRepository = new FamiliesRepository();

const getFamiliesUseCase = new GetFamiliesUseCase(familiesRepository);

const getFamiliesController = new GetFamiliesController(getFamiliesUseCase);

export { getFamiliesUseCase, getFamiliesController };
