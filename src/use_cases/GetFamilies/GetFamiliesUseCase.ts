import { IFamiliesRepository } from '@repositories/IFamiliesRepository';
import FamilyDTO, { IFamilyDTO } from '@dtos/FamilyDTO';

export class GetFamiliesUseCase {
    private familiesRepository: IFamiliesRepository;

    constructor(familiesRespository: IFamiliesRepository) {
        this.familiesRepository = familiesRespository;
    }

    async execute(): Promise<IFamilyDTO[]> {
        const families = await this.familiesRepository.findAll();
        return FamilyDTO.ofList(families);
    }
}
