import { Product } from '@entities/Product';

export interface GetProductByIDRequestDTO {
    productId: number;
}

export interface GetProductByIDResponseDTO {
    id: number;
    name: string;
    imageURL?: string;
    startsAt: number;
    createdAt: Date
}

export default class GetProductByIDDTO {
    static of(product: Product): GetProductByIDResponseDTO {
        const { id, name, imageURL, startsAt, createdAt } = product;
        return {
            id,
            name,
            imageURL,
            startsAt,
            createdAt
        };
    }

    static ofList(products: Product[]): GetProductByIDResponseDTO[] {
        return products.map(product => GetProductByIDDTO.of(product));
    }
}
