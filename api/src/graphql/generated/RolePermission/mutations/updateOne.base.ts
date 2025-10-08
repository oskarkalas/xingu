import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneRolePermissionMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.RolePermissionWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.RolePermissionUpdateInput, required: true }),
    }))

export const updateOneRolePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'RolePermission',
    nullable: true,
    args: updateOneRolePermissionMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.rolePermission.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneRolePermissionMutation = defineMutation((t) => ({
  updateOneRolePermission: t.prismaField(updateOneRolePermissionMutationObject(t)),
}));
