import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneUserRoleMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.UserRoleWhereUniqueInput, required: true }) }))

export const deleteOneUserRoleMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'UserRole',
    nullable: true,
    args: deleteOneUserRoleMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.userRole.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneUserRoleMutation = defineMutation((t) => ({
  deleteOneUserRole: t.prismaField(deleteOneUserRoleMutationObject(t)),
}));
