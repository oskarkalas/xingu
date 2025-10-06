import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneCatalogMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.CatalogWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.CatalogUpdateInput, required: true }),
    }))

export const updateOneCatalogMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Catalog',
    nullable: true,
    args: updateOneCatalogMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.catalog.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneCatalogMutation = defineMutation((t) => ({
  updateOneCatalog: t.prismaField(updateOneCatalogMutationObject(t)),
}));
