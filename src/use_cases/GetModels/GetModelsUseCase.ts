import ModelDTO, { IModelDTO } from '@dtos/ModelDTO';
import { IModelsRepository } from '@repositories/IModelsRepository';

export class GetModelsUseCase {
    private modelsRepository: IModelsRepository

    constructor(modelsRepository: IModelsRepository) {
        this.modelsRepository = modelsRepository;
    }

    async execute(): Promise<IModelDTO[]> {
        const models = await this.modelsRepository.findAll();
        return ModelDTO.ofList(models);
    }
}
