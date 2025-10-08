import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneUserRoleMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.UserRoleCreateInput, required: true }) }))

export const createOneUserRoleMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'UserRole',
    nullable: false,
    args: createOneUserRoleMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.userRole.create({ data: args.data, ...query }),
  }),
);

export const createOneUserRoleMutation = defineMutation((t) => ({
  createOneUserRole: t.prismaField(createOneUserRoleMutationObject(t)),
}));
