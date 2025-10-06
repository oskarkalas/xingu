import * as Inputs from '../../inputs';import { prisma } from '../../../../prisma.client';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyCatalogMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.CatalogCreateInput], required: true }) }))

export const createManyCatalogMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Catalog'],
    nullable: false,
    args: createManyCatalogMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.catalog.create({ data }))),
  }),
);

export const createManyCatalogMutation = defineMutation((t) => ({
  createManyCatalog: t.prismaField(createManyCatalogMutationObject(t)),
}));
