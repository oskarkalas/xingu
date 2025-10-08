import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOnePermissionMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.PermissionWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.PermissionUpdateInput, required: true }),
    }))

export const updateOnePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Permission',
    nullable: true,
    args: updateOnePermissionMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.permission.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOnePermissionMutation = defineMutation((t) => ({
  updateOnePermission: t.prismaField(updateOnePermissionMutationObject(t)),
}));
