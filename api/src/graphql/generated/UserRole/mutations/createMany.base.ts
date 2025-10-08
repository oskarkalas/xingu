import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyUserRoleMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.UserRoleCreateInput], required: true }) }))

export const createManyUserRoleMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['UserRole'],
    nullable: false,
    args: createManyUserRoleMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.userRole.create({ data }))),
  }),
);

export const createManyUserRoleMutation = defineMutation((t) => ({
  createManyUserRole: t.prismaField(createManyUserRoleMutationObject(t)),
}));
