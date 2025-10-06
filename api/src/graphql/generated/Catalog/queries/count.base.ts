import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countCatalogQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CatalogWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.CatalogOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.CatalogWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.CatalogScalarFieldEnum], required: false }),
}))

export const countCatalogQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countCatalogQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.catalog.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countCatalogQuery = defineQuery((t) => ({
  countCatalog: t.field(countCatalogQueryObject(t)),
}));
