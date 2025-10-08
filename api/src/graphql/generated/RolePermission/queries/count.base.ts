import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countRolePermissionQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RolePermissionWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.RolePermissionOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.RolePermissionWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RolePermissionScalarFieldEnum], required: false }),
}))

export const countRolePermissionQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countRolePermissionQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.rolePermission.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countRolePermissionQuery = defineQuery((t) => ({
  countRolePermission: t.field(countRolePermissionQueryObject(t)),
}));
