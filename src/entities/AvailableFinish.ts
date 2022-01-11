import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductOption } from './ProductOption';

@Entity('available_finishes')
export default class AvailableFinish extends BaseEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'image_url' })
    imageURL?: string;

    @Column({ name: 'icon_image_url' })
    iconImageURL: string;

    @ManyToOne(() => ProductOption, option => option.availableFinishes)
    @JoinColumn({ name: 'id_product_option' })
    productOption: ProductOption;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
