import { Product } from '@entities/Product';
import { ProductOption } from '@entities/ProductOption';

export interface GetProductByIDRequestDTO {
    productId: number;
}

export interface GetProductByIDResponseDTO {
    id: number;
    name: string;
    imageURL?: string;
    startsAt: number;
    options: ProductOption[],
    createdAt: Date
}

export default class GetProductByIDDTO {
    static of(product: Product): GetProductByIDResponseDTO {
        const { id, name, imageURL, startsAt, options, createdAt } = product;

        return {
            id,
            name,
            imageURL,
            options,
            startsAt,
            createdAt
        };
    }

    static ofList(products: Product[]): GetProductByIDResponseDTO[] {
        return products.map(product => GetProductByIDDTO.of(product));
    }
}
