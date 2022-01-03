import { Product } from '@entities/Product';

export interface GetProductsByFamilyRequestDTO {
    familyId: number;
}

interface GetProductsByFamilyResponseDTO {
    id: number;
    name: string;
    imageURL?: string;
    startsAt: number;
    createdAt: Date;
}

export default class GetProductsByFamilyDTO {
    static of(product: Product): GetProductsByFamilyResponseDTO {
        const { id, name, imageURL, startsAt, createdAt } = product;

        return {
            id,
            name,
            imageURL,
            startsAt,
            createdAt
        };
    }

    static ofList(products: Product[]): GetProductsByFamilyResponseDTO[] {
        return products.map(product => GetProductsByFamilyDTO.of(product));
    }
}
