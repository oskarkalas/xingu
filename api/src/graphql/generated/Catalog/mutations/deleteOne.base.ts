import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneCatalogMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.CatalogWhereUniqueInput, required: true }) }))

export const deleteOneCatalogMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Catalog',
    nullable: true,
    args: deleteOneCatalogMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.catalog.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneCatalogMutation = defineMutation((t) => ({
  deleteOneCatalog: t.prismaField(deleteOneCatalogMutationObject(t)),
}));
