import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOnePasswordResetTokenMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.PasswordResetTokenWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.PasswordResetTokenCreateInput, required: true }),
      update: t.field({ type: Inputs.PasswordResetTokenUpdateInput, required: true }),
    }))

export const upsertOnePasswordResetTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'PasswordResetToken',
    nullable: false,
    args: upsertOnePasswordResetTokenMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.passwordResetToken.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOnePasswordResetTokenMutation = defineMutation((t) => ({
  upsertOnePasswordResetToken: t.prismaField(upsertOnePasswordResetTokenMutationObject(t)),
}));
