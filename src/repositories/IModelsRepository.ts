import { Model } from '@entities/Model';

export interface IModelsRepository {
    findById(id: number): Promise<Model>;
    findAll(): Promise<Model[]>;
}
