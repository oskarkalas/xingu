import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countAccountQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.AccountWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.AccountOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.AccountWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.AccountScalarFieldEnum], required: false }),
}))

export const countAccountQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countAccountQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.account.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countAccountQuery = defineQuery((t) => ({
  countAccount: t.field(countAccountQueryObject(t)),
}));
