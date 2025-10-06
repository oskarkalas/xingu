import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaTypes from './generated/pothos-types';
import ScopeAuthPlugin from '@pothos/plugin-scope-auth';
import { prisma } from '../prisma.client';
import { Request, Response } from 'express';

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    DateTime: { Input: Date; Output: Date };
  };
  Context: {
    req: Request;
    res: Response;
    user?: {
      id: number;
      role: string;
    };
  };
  AuthScopes: {
    admin: boolean;
    user: boolean;
    editor: boolean;
  };
}>({
  plugins: [PrismaPlugin, ScopeAuthPlugin],
  prisma: {
    client: prisma,
  },
  scopeAuth: {
    authScopes: async (context) => ({
      admin: context.user?.role === 'admin',
      user: !!context.user,
      editor: context.user?.role === 'editor',
    }),
  },
});

builder.queryType({});
builder.mutationType({});
