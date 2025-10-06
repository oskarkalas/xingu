import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyCatalogMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.CatalogWhereInput, required: true }) }))

export const deleteManyCatalogMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyCatalogMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.catalog.deleteMany({ where: args.where }),
  }),
);

export const deleteManyCatalogMutation = defineMutation((t) => ({
  deleteManyCatalog: t.field(deleteManyCatalogMutationObject(t)),
}));
