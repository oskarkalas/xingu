import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneAccountMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.AccountCreateInput, required: true }) }))

export const createOneAccountMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Account',
    nullable: false,
    args: createOneAccountMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.account.create({ data: args.data, ...query }),
  }),
);

export const createOneAccountMutation = defineMutation((t) => ({
  createOneAccount: t.prismaField(createOneAccountMutationObject(t)),
}));
