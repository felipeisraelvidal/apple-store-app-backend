import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('models')
export class Model {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name' })
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
