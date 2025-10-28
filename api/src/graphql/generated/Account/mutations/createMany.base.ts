import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyAccountMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.AccountCreateInput], required: true }) }))

export const createManyAccountMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Account'],
    nullable: false,
    args: createManyAccountMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await _context.prisma.$transaction(args.data.map((data) => _context.prisma.account.create({ data }))),
  }),
);

export const createManyAccountMutation = defineMutation((t) => ({
  createManyAccount: t.prismaField(createManyAccountMutationObject(t)),
}));
