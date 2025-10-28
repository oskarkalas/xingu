import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOnePasswordResetTokenMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.PasswordResetTokenCreateInput, required: true }) }))

export const createOnePasswordResetTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'PasswordResetToken',
    nullable: false,
    args: createOnePasswordResetTokenMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.passwordResetToken.create({ data: args.data, ...query }),
  }),
);

export const createOnePasswordResetTokenMutation = defineMutation((t) => ({
  createOnePasswordResetToken: t.prismaField(createOnePasswordResetTokenMutationObject(t)),
}));
