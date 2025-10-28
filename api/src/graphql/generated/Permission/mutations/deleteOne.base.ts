import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOnePermissionMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.PermissionWhereUniqueInput, required: true }) }))

export const deleteOnePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Permission',
    nullable: true,
    args: deleteOnePermissionMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.permission.delete({ where: args.where, ...query }),
  }),
);

export const deleteOnePermissionMutation = defineMutation((t) => ({
  deleteOnePermission: t.prismaField(deleteOnePermissionMutationObject(t)),
}));
