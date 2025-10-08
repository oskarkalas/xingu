import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyAccountQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.AccountWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.AccountOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.AccountWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.AccountScalarFieldEnum], required: false }),
}))

export const findManyAccountQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Account'],
    nullable: false,
    args: findManyAccountQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.account.findMany({
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

export const findManyAccountQuery = defineQuery((t) => ({
  findManyAccount: t.prismaField(findManyAccountQueryObject(t)),
}));
