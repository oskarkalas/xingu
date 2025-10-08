import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyPermissionQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PermissionWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.PermissionOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.PermissionWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.PermissionScalarFieldEnum], required: false }),
}))

export const findManyPermissionQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Permission'],
    nullable: false,
    args: findManyPermissionQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.permission.findMany({
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

export const findManyPermissionQuery = defineQuery((t) => ({
  findManyPermission: t.prismaField(findManyPermissionQueryObject(t)),
}));
