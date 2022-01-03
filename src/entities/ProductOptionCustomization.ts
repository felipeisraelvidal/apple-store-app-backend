import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToMany } from 'typeorm';
import { ProductOptionCustomizationItem } from './ProductOptionCustomizationItem';

@Entity('products_options_customizations')
export class ProductOptionCustomization {
    @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'price_change_method' })
    priceChangeMethod: string;

    @OneToMany(() => ProductOptionCustomizationItem, item => item.productOptionCustomization)
    items: ProductOptionCustomizationItem[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
