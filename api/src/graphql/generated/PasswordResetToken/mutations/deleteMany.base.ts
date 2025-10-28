import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyPasswordResetTokenMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.PasswordResetTokenWhereInput, required: true }) }))

export const deleteManyPasswordResetTokenMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyPasswordResetTokenMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.passwordResetToken.deleteMany({ where: args.where }),
  }),
);

export const deleteManyPasswordResetTokenMutation = defineMutation((t) => ({
  deleteManyPasswordResetToken: t.field(deleteManyPasswordResetTokenMutationObject(t)),
}));
