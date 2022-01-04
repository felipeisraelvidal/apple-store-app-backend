import { ProductOption } from '@entities/ProductOption';

export interface IProductOptionDTO {
    id: number;
    name: string;
    image_url?: string;
    price: number;
    specs: string[];
    created_at: Date;
}

export default class ProductOptionDTO {
    static of(productOption: ProductOption): IProductOptionDTO {
        const { id, name, imageURL, price, specs, createdAt } = productOption;

        return {
            id,
            name,
            image_url: imageURL,
            price,
            specs: specs.map(spec => spec.description),
            created_at: createdAt
        };
    }

    static ofList(productOptions: ProductOption[]): IProductOptionDTO[] {
        return productOptions.map(option => ProductOptionDTO.of(option));
    }
}
