import { builder } from './builder';
import { generateAllCrud } from './generated/autocrud';
import { registerAuthResolvers } from '../auth/auth.resolver';
import { GraphQLContext } from './context';
const authResolversMap: Partial<Record<string, Record<string, readonly string[]>>> = {
  User: {
    findManyUser: ['admin'] as const,
    createOneUser: ['admin'] as const,
    deleteOneUser: ['admin'] as const,
  },
  Role: {
    findManyRole: ['admin'] as const,
  },
  Account: {
    findManyAccount: ['user', 'admin'] as const,
  },
};

registerAuthResolvers();
generateAllCrud({
  handleResolver: ({ modelName, field, resolverName }) => {
    const originalResolve = field.resolve;

    return {
      ...field,
      async resolve(
        parent: any,
        args: any,
        ctx: GraphQLContext,
        info: any
      ) {
        const requiredRoles = authResolversMap[modelName]?.[resolverName] ?? [];
        if (requiredRoles?.length) {
          const userRoles = ctx.user?.roles ?? [];
          const isAuthorized = requiredRoles.some((r) =>
            userRoles.includes(r)
          );
          console.log(requiredRoles, userRoles, ctx);
          console.log(requiredRoles, userRoles, ctx);

          if (!isAuthorized) {
            throw new Error('Not authorized');
          }
        }

        // voláme původní resolver
        return originalResolve(parent, args, ctx, info);
      },
    };
  },
});

export const schema = builder.toSchema();

