import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniquePasswordResetTokenQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.PasswordResetTokenWhereUniqueInput, required: true }) }))

export const findUniquePasswordResetTokenQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'PasswordResetToken',
    nullable: true,
    args: findUniquePasswordResetTokenQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.passwordResetToken.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniquePasswordResetTokenQuery = defineQuery((t) => ({
  findUniquePasswordResetToken: t.prismaField(findUniquePasswordResetTokenQueryObject(t)),
}));
