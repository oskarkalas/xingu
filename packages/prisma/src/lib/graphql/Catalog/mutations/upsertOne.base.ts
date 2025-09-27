import * as Inputs from '../../inputs';import { prisma } from '../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneCatalogMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.CatalogWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.CatalogCreateInput, required: true }),
      update: t.field({ type: Inputs.CatalogUpdateInput, required: true }),
    }))

export const upsertOneCatalogMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Catalog',
    nullable: false,
    args: upsertOneCatalogMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.catalog.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneCatalogMutation = defineMutation((t) => ({
  upsertOneCatalog: t.prismaField(upsertOneCatalogMutationObject(t)),
}));
