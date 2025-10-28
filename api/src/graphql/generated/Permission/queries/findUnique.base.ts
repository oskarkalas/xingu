import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniquePermissionQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.PermissionWhereUniqueInput, required: true }) }))

export const findUniquePermissionQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Permission',
    nullable: true,
    args: findUniquePermissionQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.permission.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniquePermissionQuery = defineQuery((t) => ({
  findUniquePermission: t.prismaField(findUniquePermissionQueryObject(t)),
}));
