import { Model } from '@entities/Model';
import { IModelsRepository } from '@repositories/IModelsRepository';

export class GetModelsUseCase {
    private modelsRepository: IModelsRepository

    constructor(modelsRepository: IModelsRepository) {
        this.modelsRepository = modelsRepository;
    }

    async execute(): Promise<Model[]> {
        return await this.modelsRepository.findAll();
    }
}
