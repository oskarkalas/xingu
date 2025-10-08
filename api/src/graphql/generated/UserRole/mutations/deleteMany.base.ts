import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyUserRoleMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.UserRoleWhereInput, required: true }) }))

export const deleteManyUserRoleMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyUserRoleMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.userRole.deleteMany({ where: args.where }),
  }),
);

export const deleteManyUserRoleMutation = defineMutation((t) => ({
  deleteManyUserRole: t.field(deleteManyUserRoleMutationObject(t)),
}));
