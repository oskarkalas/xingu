import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyPermissionMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.PermissionWhereInput, required: false }),
      data: t.field({ type: Inputs.PermissionUpdateManyMutationInput, required: true }),
    }))

export const updateManyPermissionMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyPermissionMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.permission.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyPermissionMutation = defineMutation((t) => ({
  updateManyPermission: t.field(updateManyPermissionMutationObject(t)),
}));
