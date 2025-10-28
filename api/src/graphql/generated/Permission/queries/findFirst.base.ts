import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstPermissionQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PermissionWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.PermissionOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.PermissionWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.PermissionScalarFieldEnum], required: false }),
}))

export const findFirstPermissionQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Permission',
    nullable: true,
    args: findFirstPermissionQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.permission.findFirst({
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

export const findFirstPermissionQuery = defineQuery((t) => ({
  findFirstPermission: t.prismaField(findFirstPermissionQueryObject(t)),
}));
