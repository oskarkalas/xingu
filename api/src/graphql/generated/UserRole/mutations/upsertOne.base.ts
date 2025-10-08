import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneUserRoleMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.UserRoleWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.UserRoleCreateInput, required: true }),
      update: t.field({ type: Inputs.UserRoleUpdateInput, required: true }),
    }))

export const upsertOneUserRoleMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'UserRole',
    nullable: false,
    args: upsertOneUserRoleMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.userRole.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneUserRoleMutation = defineMutation((t) => ({
  upsertOneUserRole: t.prismaField(upsertOneUserRoleMutationObject(t)),
}));
