import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyRoleMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.RoleCreateInput], required: true }) }))

export const createManyRoleMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Role'],
    nullable: false,
    args: createManyRoleMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await _context.prisma.$transaction(args.data.map((data) => _context.prisma.role.create({ data }))),
  }),
);

export const createManyRoleMutation = defineMutation((t) => ({
  createManyRole: t.prismaField(createManyRoleMutationObject(t)),
}));
