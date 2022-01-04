import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('available_finishes')
export default class AvailableFinish extends BaseEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'image_url' })
    imageURL?: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
