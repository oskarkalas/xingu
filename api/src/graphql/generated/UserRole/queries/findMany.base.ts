import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyUserRoleQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.UserRoleWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.UserRoleOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.UserRoleWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.UserRoleScalarFieldEnum], required: false }),
}))

export const findManyUserRoleQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['UserRole'],
    nullable: false,
    args: findManyUserRoleQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.userRole.findMany({
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

export const findManyUserRoleQuery = defineQuery((t) => ({
  findManyUserRole: t.prismaField(findManyUserRoleQueryObject(t)),
}));
