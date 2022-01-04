import ModelDTO, { IModelDTO } from '@dtos/ModelDTO';
import { IModelsRepository } from '@repositories/IModelsRepository';
import { IGetModelByIDResponseDTO } from './GetModelByIDDTO';

export class GetModelByIDUseCase {
    private modelsRepository: IModelsRepository;

    constructor(modelsRepository: IModelsRepository) {
        this.modelsRepository = modelsRepository;
    }

    async execute(data: IGetModelByIDResponseDTO): Promise<IModelDTO> {
        const model = await this.modelsRepository.findById(data.id);
        return ModelDTO.of(model);
    }
}
