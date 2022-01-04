import { ProductOptionCustomization } from '@entities/ProductOptionCustomization';
import ProductOptionCustomizationItemDTO, { IProductOptionCustomizationItemDTO } from './ProductOptionCustomizationItemDTO';

export interface IProductOptionCustomizationDTO {
    id: number;
    name: string;
    items: IProductOptionCustomizationItemDTO[];
    price_change_method: string;
    created_at: Date;
}

export default class ProductOptionCustomizationDTO {
    static of(customization: ProductOptionCustomization): IProductOptionCustomizationDTO {
        const { id, name, items, priceChangeMethod, createdAt } = customization;

        const sortedItems = ProductOptionCustomizationItemDTO.ofList(items).sort((a, b) => a.price - b.price);

        return {
            id,
            name,
            items: sortedItems,
            price_change_method: priceChangeMethod,
            created_at: createdAt,
        };
    }

    static ofList(customizations: ProductOptionCustomization[]): IProductOptionCustomizationDTO[] {
        return customizations.map(customization => ProductOptionCustomizationDTO.of(customization));
    }
}
