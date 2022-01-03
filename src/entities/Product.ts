import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, AfterLoad, OneToMany } from 'typeorm';
import { Family } from './Family';
import { Model } from './Model';
import { ProductOption } from './ProductOption';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @OneToOne(() => Family, { eager: false })
    @JoinColumn({ name: 'id_family' })
    family: Family;

    @OneToOne(() => Model, { eager: false })
    @JoinColumn({ name: 'id_model' })
    model: Model;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'image_url', nullable: true })
    imageURL?: string;

    @OneToMany(() => ProductOption, productOption => productOption.product)
    options: ProductOption[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    startsAt: number;

    @AfterLoad()
    private getMinPrice() {
        if (this.options, this.options.length > 0) {
            this.startsAt = Math.min(...this.options.map(option => option.price));
        } else {
            this.startsAt = 0;
        }
    }
}
