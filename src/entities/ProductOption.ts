import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Product } from './Product';
import { ProductOptionSpec } from './ProductOptionSpec';

@Entity('products_options')
export class ProductOption {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @ManyToOne(() => Product, product => product.options)
    @JoinColumn({ name: 'id_product' })
    product: Product;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'image_url', nullable: true })
    imageURL?: string;

    @Column({ name: 'price' })
    price: number;

    @OneToMany(() => ProductOptionSpec, productOptionSpec => productOptionSpec.productOption)
    specs: ProductOptionSpec[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
