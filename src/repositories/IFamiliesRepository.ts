import { Family } from '@entities/Family';

export interface IFamiliesRepository {
    findById(id: number): Promise<Family>;
    findAll(): Promise<Family[]>;
}
