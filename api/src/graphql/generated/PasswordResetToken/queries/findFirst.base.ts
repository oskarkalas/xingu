import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstPasswordResetTokenQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PasswordResetTokenWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.PasswordResetTokenOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.PasswordResetTokenWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.PasswordResetTokenScalarFieldEnum], required: false }),
}))

export const findFirstPasswordResetTokenQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'PasswordResetToken',
    nullable: true,
    args: findFirstPasswordResetTokenQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.passwordResetToken.findFirst({
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

export const findFirstPasswordResetTokenQuery = defineQuery((t) => ({
  findFirstPasswordResetToken: t.prismaField(findFirstPasswordResetTokenQueryObject(t)),
}));
