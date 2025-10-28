import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueAccountQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.AccountWhereUniqueInput, required: true }) }))

export const findUniqueAccountQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Account',
    nullable: true,
    args: findUniqueAccountQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.account.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueAccountQuery = defineQuery((t) => ({
  findUniqueAccount: t.prismaField(findUniqueAccountQueryObject(t)),
}));
