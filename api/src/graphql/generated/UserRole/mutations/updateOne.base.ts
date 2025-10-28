import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneUserRoleMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.UserRoleWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.UserRoleUpdateInput, required: true }),
    }))

export const updateOneUserRoleMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'UserRole',
    nullable: true,
    args: updateOneUserRoleMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.userRole.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneUserRoleMutation = defineMutation((t) => ({
  updateOneUserRole: t.prismaField(updateOneUserRoleMutationObject(t)),
}));
