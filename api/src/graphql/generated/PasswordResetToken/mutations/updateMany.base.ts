import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyPasswordResetTokenMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.PasswordResetTokenWhereInput, required: false }),
      data: t.field({ type: Inputs.PasswordResetTokenUpdateManyMutationInput, required: true }),
    }))

export const updateManyPasswordResetTokenMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyPasswordResetTokenMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.passwordResetToken.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyPasswordResetTokenMutation = defineMutation((t) => ({
  updateManyPasswordResetToken: t.field(updateManyPasswordResetTokenMutationObject(t)),
}));
