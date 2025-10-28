import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueUserRoleQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.UserRoleWhereUniqueInput, required: true }) }))

export const findUniqueUserRoleQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'UserRole',
    nullable: true,
    args: findUniqueUserRoleQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.userRole.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueUserRoleQuery = defineQuery((t) => ({
  findUniqueUserRole: t.prismaField(findUniqueUserRoleQueryObject(t)),
}));
