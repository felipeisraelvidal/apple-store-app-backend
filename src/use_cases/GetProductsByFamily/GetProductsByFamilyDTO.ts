import { Model } from '@entities/Model';
import { Product } from '@entities/Product';

export interface GetProductsByFamilyRequestDTO {
    familyId: number;
}

interface GetProductsByFamilyResponseDTO {
    id: number;
    model: Model,
    name: string;
    image_url?: string;
    starting_price: number;
    created_at: Date;
}

export default class GetProductsByFamilyDTO {
    static of(product: Product): GetProductsByFamilyResponseDTO {
        const { id, model, name, imageURL, startingPrice, createdAt } = product;

        return {
            id,
            model,
            name,
            image_url: imageURL,
            starting_price: startingPrice,
            created_at: createdAt
        };
    }

    static ofList(products: Product[]): GetProductsByFamilyResponseDTO[] {
        return products.map(product => GetProductsByFamilyDTO.of(product));
    }
}
