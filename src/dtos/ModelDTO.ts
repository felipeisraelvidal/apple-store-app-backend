import { Model } from '@entities/Model';

export interface IModelDTO {
    id: number;
    name: string;
    created_at: Date;
}

export default class ModelDTO {
    static of(model: Model): IModelDTO {
        const { id, name, createdAt } = model;

        return {
            id,
            name,
            created_at: createdAt
        };
    }

    static ofList(models: Model[]): IModelDTO[] {
        return models.map(model => ModelDTO.of(model));
    }
}
