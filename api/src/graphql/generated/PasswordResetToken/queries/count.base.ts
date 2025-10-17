import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countPasswordResetTokenQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PasswordResetTokenWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.PasswordResetTokenOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.PasswordResetTokenWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.PasswordResetTokenScalarFieldEnum], required: false }),
}))

export const countPasswordResetTokenQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countPasswordResetTokenQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.passwordResetToken.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countPasswordResetTokenQuery = defineQuery((t) => ({
  countPasswordResetToken: t.field(countPasswordResetTokenQueryObject(t)),
}));
