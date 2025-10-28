import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneRolePermissionMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.RolePermissionWhereUniqueInput, required: true }) }))

export const deleteOneRolePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'RolePermission',
    nullable: true,
    args: deleteOneRolePermissionMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.rolePermission.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneRolePermissionMutation = defineMutation((t) => ({
  deleteOneRolePermission: t.prismaField(deleteOneRolePermissionMutationObject(t)),
}));
