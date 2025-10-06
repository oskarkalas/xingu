import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyCatalogQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CatalogWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.CatalogOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.CatalogWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.CatalogScalarFieldEnum], required: false }),
}))

export const findManyCatalogQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Catalog'],
    nullable: false,
    args: findManyCatalogQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.catalog.findMany({
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

export const findManyCatalogQuery = defineQuery((t) => ({
  findManyCatalog: t.prismaField(findManyCatalogQueryObject(t)),
}));
