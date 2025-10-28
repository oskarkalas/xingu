import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOnePermissionMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.PermissionWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.PermissionCreateInput, required: true }),
      update: t.field({ type: Inputs.PermissionUpdateInput, required: true }),
    }))

export const upsertOnePermissionMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Permission',
    nullable: false,
    args: upsertOnePermissionMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.permission.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOnePermissionMutation = defineMutation((t) => ({
  upsertOnePermission: t.prismaField(upsertOnePermissionMutationObject(t)),
}));
