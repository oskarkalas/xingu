import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyRolePermissionMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.RolePermissionWhereInput, required: true }) }))

export const deleteManyRolePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyRolePermissionMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.rolePermission.deleteMany({ where: args.where }),
  }),
);

export const deleteManyRolePermissionMutation = defineMutation((t) => ({
  deleteManyRolePermission: t.field(deleteManyRolePermissionMutationObject(t)),
}));
