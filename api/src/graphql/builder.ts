import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaTypes from './generated/pothos-types';
import ScopeAuthPlugin from '@pothos/plugin-scope-auth';
import { prisma } from '../prisma.client';
import { GraphQLContext } from './context';

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    DateTime: { Input: Date; Output: Date };
  };
  Context: GraphQLContext;
  AuthScopes: {
    isAuthenticated: boolean;
    hasRole: string;
    isAdmin: boolean; // ← PŘIDALI JSME
  };
}>({
  plugins: [PrismaPlugin, ScopeAuthPlugin],
  prisma: {
    client: prisma,
    // DŮLEŽITÉ: Explicitně říct Pothos, kde je prisma v contextu
    dmmf: undefined,
  },
  scopeAuth: {
    authScopes: async (ctx) => {
      console.log('🔑 ScopeAuth - checking context:', {
        hasCtx: !!ctx,
        keys: ctx ? Object.keys(ctx) : 'NO CTX',
        hasUser: !!ctx?.user,
        user: ctx?.user
      });

      return {
        isAuthenticated: !!ctx?.user,
        hasRole: (role: string) => {
          const hasIt = !!ctx?.user?.roles.includes(role);
          console.log(`   🔍 Checking hasRole("${role}"):`, hasIt, '| User roles:', ctx?.user?.roles);
          return hasIt;
        },
        isAdmin: !!ctx.user && ctx.user.roles.includes('admin'),
      };
    },
    unauthorizedError: (parent, context, info, result) => {
      return new Error('Nemáte oprávnění k této operaci');
    },
  },
});

builder.queryType({});
builder.mutationType({});
