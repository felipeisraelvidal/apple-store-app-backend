import { Model } from '@entities/Model';
import { IModelsRepository } from '@repositories/IModelsRepository';
import { IGetModelsByIDResponseDTO } from './GetModelByIDDTO';

export class GetModelByIDUseCase {
    private modelsRepository: IModelsRepository;

    constructor(modelsRepository: IModelsRepository) {
        this.modelsRepository = modelsRepository;
    }

    async execute(data: IGetModelsByIDResponseDTO): Promise<Model> {
        return await this.modelsRepository.findById(data.id);
    }
}
