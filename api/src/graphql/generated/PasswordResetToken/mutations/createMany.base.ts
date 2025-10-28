import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyPasswordResetTokenMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.PasswordResetTokenCreateInput], required: true }) }))

export const createManyPasswordResetTokenMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['PasswordResetToken'],
    nullable: false,
    args: createManyPasswordResetTokenMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await _context.prisma.$transaction(args.data.map((data) => _context.prisma.passwordResetToken.create({ data }))),
  }),
);

export const createManyPasswordResetTokenMutation = defineMutation((t) => ({
  createManyPasswordResetToken: t.prismaField(createManyPasswordResetTokenMutationObject(t)),
}));
