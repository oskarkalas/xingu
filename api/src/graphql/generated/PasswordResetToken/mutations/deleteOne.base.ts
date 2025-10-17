import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOnePasswordResetTokenMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.PasswordResetTokenWhereUniqueInput, required: true }) }))

export const deleteOnePasswordResetTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'PasswordResetToken',
    nullable: true,
    args: deleteOnePasswordResetTokenMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.passwordResetToken.delete({ where: args.where, ...query }),
  }),
);

export const deleteOnePasswordResetTokenMutation = defineMutation((t) => ({
  deleteOnePasswordResetToken: t.prismaField(deleteOnePasswordResetTokenMutationObject(t)),
}));
