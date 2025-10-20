import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaTypes from './generated/pothos-types';
import ScopeAuthPlugin from '@pothos/plugin-scope-auth';
import { prisma } from '../prisma.client';
import { PrismaClient } from '@prisma/client';

export interface GraphQLContext {
  user?: {
    email: any;
    id: number;
    roles: string[];
    permissions: string[];
  };
  prisma: PrismaClient;
}

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    DateTime: { Input: Date; Output: Date };
  };
  Context: GraphQLContext;
}>({
  plugins: [PrismaPlugin, ScopeAuthPlugin],
  prisma: {
    client: prisma,
  },
  scopeAuth: {
    authScopes: async (ctx) => ({
      isAuthenticated: !!ctx.user,
      hasRole: (r: string) => {console.log(r);return !!ctx.user?.roles.includes(r)} ,
      hasPerm: (p: string) => !!ctx.user?.permissions.includes(p),
    }),
  },
});

builder.queryType({});
builder.mutationType({});
