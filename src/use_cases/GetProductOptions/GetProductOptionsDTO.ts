import { ProductOption } from '@entities/ProductOption';

export interface IGetProductOptionsRequestDTO {
    productId: number;
}

export interface IGetProductOptionsResponseDTO {
    id: number;
    name: string;
    image_url?: string;
    price: number;
    specs: string[] | null;
    created_at: Date;
}

export default class GetProductOptionsDTO {
    static of(productOption: ProductOption): IGetProductOptionsResponseDTO {
        const { id, name, imageURL, price, specs, createdAt } = productOption;
        
        return {
            id,
            name,
            image_url: imageURL,
            price,
            specs: specs.map(spec => spec.description) || null,
            created_at: createdAt
        };
    }

    static ofList(productOptions: ProductOption[]): IGetProductOptionsResponseDTO[] {
        return productOptions.map(productOption => GetProductOptionsDTO.of(productOption));
    }
}
