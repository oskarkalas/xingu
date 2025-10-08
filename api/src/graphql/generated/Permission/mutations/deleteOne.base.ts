import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOnePermissionMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.PermissionWhereUniqueInput, required: true }) }))

export const deleteOnePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Permission',
    nullable: true,
    args: deleteOnePermissionMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.permission.delete({ where: args.where, ...query }),
  }),
);

export const deleteOnePermissionMutation = defineMutation((t) => ({
  deleteOnePermission: t.prismaField(deleteOnePermissionMutationObject(t)),
}));
