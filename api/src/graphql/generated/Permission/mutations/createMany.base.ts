import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyPermissionMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.PermissionCreateInput], required: true }) }))

export const createManyPermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Permission'],
    nullable: false,
    args: createManyPermissionMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.permission.create({ data }))),
  }),
);

export const createManyPermissionMutation = defineMutation((t) => ({
  createManyPermission: t.prismaField(createManyPermissionMutationObject(t)),
}));
