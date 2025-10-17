import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyPasswordResetTokenQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PasswordResetTokenWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.PasswordResetTokenOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.PasswordResetTokenWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.PasswordResetTokenScalarFieldEnum], required: false }),
}))

export const findManyPasswordResetTokenQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['PasswordResetToken'],
    nullable: false,
    args: findManyPasswordResetTokenQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.passwordResetToken.findMany({
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

export const findManyPasswordResetTokenQuery = defineQuery((t) => ({
  findManyPasswordResetToken: t.prismaField(findManyPasswordResetTokenQueryObject(t)),
}));
