import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOnePermissionMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.PermissionCreateInput, required: true }) }))

export const createOnePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Permission',
    nullable: false,
    args: createOnePermissionMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.permission.create({ data: args.data, ...query }),
  }),
);

export const createOnePermissionMutation = defineMutation((t) => ({
  createOnePermission: t.prismaField(createOnePermissionMutationObject(t)),
}));
