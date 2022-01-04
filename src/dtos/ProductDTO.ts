import { Product } from '@entities/Product';
import { IFamilyDTO } from './FamilyDTO';
import { IModelDTO } from './ModelDTO';

export interface IProductDTO {
    id: number;
    name: string;
    image_url?: string;
    family: IFamilyDTO;
    model: IModelDTO;
    starting_price: number;
    created_at: Date
}

export default class ProductDTO {
    static of(product: Product): IProductDTO {
        const { id, name, imageURL, family, model, startingPrice, createdAt } = product;

        return {
            id,
            name,
            image_url: imageURL,
            family: {
                id: family.id,
                name: family.name,
                image_url: family.imageURL,
                created_at: family.createdAt
            },
            model: {
                id: model.id,
                name: model.name,
                created_at: model.createdAt
            },
            starting_price: startingPrice,
            created_at: createdAt,
        };
    }

    static ofList(products: Product[]): IProductDTO[] {
        return products.map(product => ProductDTO.of(product));
    }
}
