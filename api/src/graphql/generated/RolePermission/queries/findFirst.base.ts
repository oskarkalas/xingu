import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstRolePermissionQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RolePermissionWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.RolePermissionOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.RolePermissionWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RolePermissionScalarFieldEnum], required: false }),
}))

export const findFirstRolePermissionQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'RolePermission',
    nullable: true,
    args: findFirstRolePermissionQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.rolePermission.findFirst({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findFirstRolePermissionQuery = defineQuery((t) => ({
  findFirstRolePermission: t.prismaField(findFirstRolePermissionQueryObject(t)),
}));
