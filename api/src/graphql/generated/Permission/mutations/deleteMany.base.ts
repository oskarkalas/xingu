import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyPermissionMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.PermissionWhereInput, required: true }) }))

export const deleteManyPermissionMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyPermissionMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.permission.deleteMany({ where: args.where }),
  }),
);

export const deleteManyPermissionMutation = defineMutation((t) => ({
  deleteManyPermission: t.field(deleteManyPermissionMutationObject(t)),
}));
