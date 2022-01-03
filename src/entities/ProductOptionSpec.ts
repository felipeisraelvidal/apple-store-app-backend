import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductOption } from './ProductOption';

@Entity('products_options_specs')
export class ProductOptionSpec {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @ManyToOne(() => ProductOption, productOption => productOption.specs)
    @JoinColumn({ name: 'id_product_option' })
    productOption: ProductOption;

    @Column({ name: 'description' })
    description: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
