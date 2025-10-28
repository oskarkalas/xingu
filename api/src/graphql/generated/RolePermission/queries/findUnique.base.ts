import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueRolePermissionQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.RolePermissionWhereUniqueInput, required: true }) }))

export const findUniqueRolePermissionQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'RolePermission',
    nullable: true,
    args: findUniqueRolePermissionQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.rolePermission.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueRolePermissionQuery = defineQuery((t) => ({
  findUniqueRolePermission: t.prismaField(findUniqueRolePermissionQueryObject(t)),
}));
