import { Family } from '@entities/Family';

export interface IFamilyDTO {
    id: number;
    name: string;
    image_url?: string;
    created_at: Date;
}

export default class FamilyDTO {
    static of(family: Family): IFamilyDTO {
        const { id, name, imageURL, createdAt } = family;

        return {
            id,
            name,
            image_url: imageURL,
            created_at: createdAt
        };
    }

    static ofList(families: Family[]): IFamilyDTO[] {
        return families.map(family => FamilyDTO.of(family));
    }
}
