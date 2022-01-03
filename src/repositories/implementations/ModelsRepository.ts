import { Model } from '@entities/Model';
import { IModelsRepository } from '@repositories/IModelsRepository';
import { getRepository } from 'typeorm';

export class ModelsRepository implements IModelsRepository {
    async findById(id: number): Promise<Model> {
        const repo = getRepository(Model);

        const model = await repo
            .createQueryBuilder('model')
            .where('model.id = :id', { id })
            .getOne();

        if (!model) {
            throw new Error('Model not found');
        }

        return model;
    }

    async findAll(): Promise<Model[]> {
        const repo = getRepository(Model);

        const models = await repo
            .createQueryBuilder('model')
            .getMany();

        return models;
    }
}
