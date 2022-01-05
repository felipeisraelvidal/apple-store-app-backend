import { Family } from '@entities/Family';
import { Product } from '@entities/Product';
import { IFamiliesRepository } from '@repositories/IFamiliesRepository';
import { getRepository } from 'typeorm';

export class FamiliesRepository implements IFamiliesRepository {
    async findById(id: number): Promise<Family> {
        const repo = getRepository(Family);

        const family = await repo.findOne(id);

        if (!family) {
            throw new Error('Family not found');
        }
        
        return family;
    }

    async findAll(): Promise<Family[]> {
        const repo = getRepository(Family);

        const families = await repo
            .createQueryBuilder('family')
            .where(qb => {
                const subquery = qb
                    .subQuery()
                    .select('COUNT(*)')
                    .from(Product, 'product')
                    .where('product.id_family = family.id')
                    .getQuery();

                return subquery + ' > 0';
            })
            .getMany();

        return families;
    }
}
