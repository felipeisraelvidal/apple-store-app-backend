import { FamiliesRepository } from '@repositories/implementations/FamiliesRepository';
import { GetFamilyByIDController } from './GetFamilyByIDController';
import { GetFamilyByIDUseCase } from './GetFamilyByIDUseCase';

const familiesRepository = new FamiliesRepository();

const getFamilyByIDUseCase = new GetFamilyByIDUseCase(familiesRepository);

const getFamilyByIDController = new GetFamilyByIDController(getFamilyByIDUseCase);

export { getFamilyByIDUseCase, getFamilyByIDController };
