import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneRoleMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.RoleWhereUniqueInput, required: true }) }))

export const deleteOneRoleMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Role',
    nullable: true,
    args: deleteOneRoleMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.role.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneRoleMutation = defineMutation((t) => ({
  deleteOneRole: t.prismaField(deleteOneRoleMutationObject(t)),
}));
