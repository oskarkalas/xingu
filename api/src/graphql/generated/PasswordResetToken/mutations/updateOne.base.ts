import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOnePasswordResetTokenMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.PasswordResetTokenWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.PasswordResetTokenUpdateInput, required: true }),
    }))

export const updateOnePasswordResetTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'PasswordResetToken',
    nullable: true,
    args: updateOnePasswordResetTokenMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.passwordResetToken.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOnePasswordResetTokenMutation = defineMutation((t) => ({
  updateOnePasswordResetToken: t.prismaField(updateOnePasswordResetTokenMutationObject(t)),
}));
