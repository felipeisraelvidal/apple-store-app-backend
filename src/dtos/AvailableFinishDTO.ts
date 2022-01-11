import AvailableFinish from '@entities/AvailableFinish';

export interface IAvailableFinishDTO {
    id: number;
    name: string;
    image_url?: string;
    icon_image_url: string;
}

export default class AvailableFinishDTO {
    static of(finish: AvailableFinish): IAvailableFinishDTO {
        const { id, name, imageURL, iconImageURL } = finish;

        return {
            id,
            name,
            image_url: imageURL,
            icon_image_url: iconImageURL,
        };
    }

    static ofList(finishes: AvailableFinish[]): IAvailableFinishDTO[] {
        return finishes.map(finish => AvailableFinishDTO.of(finish));
    }
}
