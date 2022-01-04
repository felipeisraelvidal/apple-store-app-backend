import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinTable, ManyToMany } from 'typeorm';
import AvailableFinish from './AvailableFinish';
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

    @ManyToMany(() => AvailableFinish)
    @JoinTable({
        name: 'products_options_available_finishes',
        joinColumn: {
            name: 'id_product_option'
        },
        inverseJoinColumn: {
            name: 'id_finish'
        }
    })
    availableFinishes: AvailableFinish[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
