import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('families')
export class Family extends BaseEntity {

    @PrimaryGeneratedColumn('rowid')
    id: number;
    
    @Column()
    name: string;

    @Column({ name: 'image_url' })
    imageURL?: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
