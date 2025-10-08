import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyRolePermissionQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RolePermissionWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.RolePermissionOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.RolePermissionWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RolePermissionScalarFieldEnum], required: false }),
}))

export const findManyRolePermissionQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['RolePermission'],
    nullable: false,
    args: findManyRolePermissionQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.rolePermission.findMany({
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

export const findManyRolePermissionQuery = defineQuery((t) => ({
  findManyRolePermission: t.prismaField(findManyRolePermissionQueryObject(t)),
}));
