import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ProductOptionCustomization } from './ProductOptionCustomization';

@Entity('products_options_customizations_items')
export class ProductOptionCustomizationItem {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @ManyToOne(() => ProductOptionCustomization, customization => customization.items)
    @JoinColumn({ name: 'id_product_option_customization' })
    productOptionCustomization: ProductOptionCustomization;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'price' })
    price: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
