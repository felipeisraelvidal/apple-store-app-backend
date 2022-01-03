import { IFamiliesRepository } from '@repositories/IFamiliesRepository';
import { Family } from '@entities/Family';

export class GetFamiliesUseCase {
    private familiesRepository: IFamiliesRepository;

    constructor(familiesRespository: IFamiliesRepository) {
        this.familiesRepository = familiesRespository;
    }

    async execute(): Promise<Family[]> {
        return await this.familiesRepository.findAll();
    }
}
