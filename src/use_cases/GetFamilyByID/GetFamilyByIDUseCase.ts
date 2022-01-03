import { IFamiliesRepository } from '@repositories/IFamiliesRepository';
import { IGetFamilyByIDRequestDTO } from './GetFamilyByIDDTO';
import { Family } from '@entities/Family';

export class GetFamilyByIDUseCase {
    private familiesRepository: IFamiliesRepository;

    constructor(familiesRespository: IFamiliesRepository) {
        this.familiesRepository = familiesRespository;
    }

    async execute(data: IGetFamilyByIDRequestDTO): Promise<Family> {
        return await this.familiesRepository.findById(data.id);
    }
}
