import { IFamiliesRepository } from '@repositories/IFamiliesRepository';
import { IGetFamilyByIDRequestDTO } from './GetFamilyByIDDTO';
import FamilyDTO, { IFamilyDTO } from '@dtos/FamilyDTO';

export class GetFamilyByIDUseCase {
    private familiesRepository: IFamiliesRepository;

    constructor(familiesRespository: IFamiliesRepository) {
        this.familiesRepository = familiesRespository;
    }

    async execute(data: IGetFamilyByIDRequestDTO): Promise<IFamilyDTO> {
        const family = await this.familiesRepository.findById(data.id);
        return FamilyDTO.of(family);
    }
}
