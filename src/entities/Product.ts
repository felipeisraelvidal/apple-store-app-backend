import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Family } from './Family';
import { Model } from './Model';

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

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
