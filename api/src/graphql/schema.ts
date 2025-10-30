import { builder } from './builder';
import { generateAllCrud } from './generated/autocrud';
import { registerAuthResolvers } from '../auth/auth.resolver';

const authResolversMap: Partial<Record<string, Record<string, readonly string[]>>> = {
  User: {
    findManyUser: ['user'] as const,
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
      resolve: async function(...allArgs: any[]) {
        let parent, args, ctx, info;
        if (allArgs.length === 5) {
          [, parent, args, ctx, info] = allArgs;
        } else {
          [parent, args, ctx, info] = allArgs;
        }

        const requiredRoles = authResolversMap[modelName]?.[resolverName] ?? [];
        if (requiredRoles?.length) {
          const userRoles = ctx?.user?.roles ?? [];
          const isAuthorized = requiredRoles.some((r) =>
            userRoles.includes(r)
          );
          if (!isAuthorized) {
            throw new Error('Not authorized');
          }
        }
        return originalResolve.apply(this, allArgs);
      },
    };
  },
});

export const schema = builder.toSchema();
