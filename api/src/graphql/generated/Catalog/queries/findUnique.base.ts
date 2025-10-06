import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueCatalogQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.CatalogWhereUniqueInput, required: true }) }))

export const findUniqueCatalogQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Catalog',
    nullable: true,
    args: findUniqueCatalogQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.catalog.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueCatalogQuery = defineQuery((t) => ({
  findUniqueCatalog: t.prismaField(findUniqueCatalogQueryObject(t)),
}));
