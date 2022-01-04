import { ProductOptionCustomizationItem } from '@entities/ProductOptionCustomizationItem';

export interface IProductOptionCustomizationItemDTO {
    id: number;
    name: string;
    price: number;
    created_at: Date;
}

export default class ProductOptionCustomizationItemDTO {
    static of(customizationItem: ProductOptionCustomizationItem): IProductOptionCustomizationItemDTO {
        const { id, name, price, createdAt } = customizationItem;

        return {
            id,
            name,
            price,
            created_at: createdAt
        };
    }

    static ofList(customizationItems: ProductOptionCustomizationItem[]): IProductOptionCustomizationItemDTO[] {
        return customizationItems.map(customizationItem => ProductOptionCustomizationItemDTO.of(customizationItem));
    }
}
