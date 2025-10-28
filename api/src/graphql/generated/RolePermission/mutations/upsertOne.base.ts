import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneRolePermissionMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.RolePermissionWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.RolePermissionCreateInput, required: true }),
      update: t.field({ type: Inputs.RolePermissionUpdateInput, required: true }),
    }))

export const upsertOneRolePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'RolePermission',
    nullable: false,
    args: upsertOneRolePermissionMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.rolePermission.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneRolePermissionMutation = defineMutation((t) => ({
  upsertOneRolePermission: t.prismaField(upsertOneRolePermissionMutationObject(t)),
}));
