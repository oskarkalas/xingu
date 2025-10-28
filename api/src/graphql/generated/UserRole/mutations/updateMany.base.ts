import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyUserRoleMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.UserRoleWhereInput, required: false }),
      data: t.field({ type: Inputs.UserRoleUpdateManyMutationInput, required: true }),
    }))

export const updateManyUserRoleMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyUserRoleMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.userRole.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyUserRoleMutation = defineMutation((t) => ({
  updateManyUserRole: t.field(updateManyUserRoleMutationObject(t)),
}));
