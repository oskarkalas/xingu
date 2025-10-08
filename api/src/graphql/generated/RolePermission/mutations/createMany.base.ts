import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyRolePermissionMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.RolePermissionCreateInput], required: true }) }))

export const createManyRolePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['RolePermission'],
    nullable: false,
    args: createManyRolePermissionMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.rolePermission.create({ data }))),
  }),
);

export const createManyRolePermissionMutation = defineMutation((t) => ({
  createManyRolePermission: t.prismaField(createManyRolePermissionMutationObject(t)),
}));
