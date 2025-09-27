import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import { Scalars } from 'prisma-generator-pothos-codegen';
import { Prisma } from '@prisma/client';
import PrismaTypes from './pothos-types';
import { prisma } from '@xingu/prisma'
export const builder = new SchemaBuilder<{
  Context: {};
  PrismaTypes: PrismaTypes;
  Scalars: Scalars<
    Prisma.Decimal,
    Prisma.InputJsonValue | null,
    Prisma.InputJsonValue
  >;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma
  },
});

builder.scalarType('DateTime', {
  serialize: (value) => value.toISOString(),
});

export const schemaBuilder = builder;
