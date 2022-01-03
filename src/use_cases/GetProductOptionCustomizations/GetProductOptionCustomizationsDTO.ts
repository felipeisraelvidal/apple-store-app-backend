import { ProductOptionCustomization } from '@entities/ProductOptionCustomization';
import { ProductOptionCustomizationItem } from '@entities/ProductOptionCustomizationItem';

export interface GetProductOptionCustomizationsRequestDTO {
    productId: number;
    optionId: number;
}

export interface GetProductOptionCustomizationsResponseDTO {
    id: number;
    name: string;
    priceChangeMethod: string;
    items: ProductOptionCustomizationItem[];
    createdAt: Date;
}

export default class GetProductOptionCustomizationsDTO {
    static of(customization: ProductOptionCustomization): GetProductOptionCustomizationsResponseDTO {
        const { id, name, priceChangeMethod, items, createdAt } = customization;

        return {
            id,
            name,
            priceChangeMethod,
            items,
            createdAt
        };
    }

    static ofList(customizations: ProductOptionCustomization[]): GetProductOptionCustomizationsResponseDTO[] {
        return customizations.map(customization => GetProductOptionCustomizationsDTO.of(customization));
    }
}
