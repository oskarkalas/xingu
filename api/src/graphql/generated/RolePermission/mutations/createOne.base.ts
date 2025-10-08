import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneRolePermissionMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.RolePermissionCreateInput, required: true }) }))

export const createOneRolePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'RolePermission',
    nullable: false,
    args: createOneRolePermissionMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.rolePermission.create({ data: args.data, ...query }),
  }),
);

export const createOneRolePermissionMutation = defineMutation((t) => ({
  createOneRolePermission: t.prismaField(createOneRolePermissionMutationObject(t)),
}));
