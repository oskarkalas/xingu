import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countPermissionQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PermissionWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.PermissionOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.PermissionWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.PermissionScalarFieldEnum], required: false }),
}))

export const countPermissionQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countPermissionQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.permission.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countPermissionQuery = defineQuery((t) => ({
  countPermission: t.field(countPermissionQueryObject(t)),
}));
