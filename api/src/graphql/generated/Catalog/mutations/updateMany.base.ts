import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyCatalogMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.CatalogWhereInput, required: false }),
      data: t.field({ type: Inputs.CatalogUpdateManyMutationInput, required: true }),
    }))

export const updateManyCatalogMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyCatalogMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.catalog.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyCatalogMutation = defineMutation((t) => ({
  updateManyCatalog: t.field(updateManyCatalogMutationObject(t)),
}));
