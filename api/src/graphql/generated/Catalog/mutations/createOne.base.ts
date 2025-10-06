import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneCatalogMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.CatalogCreateInput, required: true }) }))

export const createOneCatalogMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Catalog',
    nullable: false,
    args: createOneCatalogMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.catalog.create({ data: args.data, ...query }),
  }),
);

export const createOneCatalogMutation = defineMutation((t) => ({
  createOneCatalog: t.prismaField(createOneCatalogMutationObject(t)),
}));
