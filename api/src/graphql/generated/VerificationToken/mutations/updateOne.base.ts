import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneVerificationTokenMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.VerificationTokenWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.VerificationTokenUpdateInput, required: true }),
    }))

export const updateOneVerificationTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'VerificationToken',
    nullable: true,
    args: updateOneVerificationTokenMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.verificationToken.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneVerificationTokenMutation = defineMutation((t) => ({
  updateOneVerificationToken: t.prismaField(updateOneVerificationTokenMutationObject(t)),
}));
