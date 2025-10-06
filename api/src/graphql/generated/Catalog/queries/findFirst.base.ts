import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstCatalogQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CatalogWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.CatalogOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.CatalogWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.CatalogScalarFieldEnum], required: false }),
}))

export const findFirstCatalogQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Catalog',
    nullable: true,
    args: findFirstCatalogQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.catalog.findFirst({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findFirstCatalogQuery = defineQuery((t) => ({
  findFirstCatalog: t.prismaField(findFirstCatalogQueryObject(t)),
}));
