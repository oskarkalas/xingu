import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyRolePermissionMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.RolePermissionWhereInput, required: false }),
      data: t.field({ type: Inputs.RolePermissionUpdateManyMutationInput, required: true }),
    }))

export const updateManyRolePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyRolePermissionMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.rolePermission.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyRolePermissionMutation = defineMutation((t) => ({
  updateManyRolePermission: t.field(updateManyRolePermissionMutationObject(t)),
}));
