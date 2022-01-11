import { ProductOption } from '@entities/ProductOption';
import AvailableFinishDTO, { IAvailableFinishDTO } from './AvailableFinishDTO';

export interface IProductOptionDTO {
    id: number;
    name: string;
    image_url?: string;
    price: number;
    specs: string[];
    available_finishes: IAvailableFinishDTO[];
    created_at: Date;
}

export default class ProductOptionDTO {
    static of(productOption: ProductOption): IProductOptionDTO {
        const { id, name, imageURL, price, specs, availableFinishes, createdAt } = productOption;

        const sortedAvailableFinishes = availableFinishes.sort((a, b) => a.id - b.id);

        return {
            id,
            name: name.replace('\\n', '\n'),
            image_url: imageURL,
            price,
            specs: specs.map(spec => spec.description),
            available_finishes: AvailableFinishDTO.ofList(sortedAvailableFinishes),
            created_at: createdAt
        };
    }

    static ofList(productOptions: ProductOption[]): IProductOptionDTO[] {
        return productOptions.map(option => ProductOptionDTO.of(option));
    }
}
