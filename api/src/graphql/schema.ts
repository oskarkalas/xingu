import { builder } from './builder';
import { generateAllCrud } from './generated/autocrud';
import { registerAuthResolvers } from '../auth/auth.resolver';

const authResolversMap = {
  User: {
    findManyUser: ['admin'],
    // findFirstUser: ['admin'],
    // findUniqueUser: ['admin'],
    // createOneUser: ['admin'],
    // updateOneUser: ['admin'],
    // deleteOneUser: ['admin'],
  }
} as const;

function createAuthScopes(roles: readonly string[]) {
  // console.log(roles.reduce((acc, role) => ({ ...acc, [role]: true }), {}))
  return roles.reduce((acc, role) => ({ ...acc, [role]: true }), {});
}
registerAuthResolvers();
generateAllCrud({
  handleResolver: ({ field, modelName, resolverName }) => {
    const roles = authResolversMap[modelName as keyof typeof authResolversMap]?.[
      resolverName as keyof (typeof authResolversMap)[keyof typeof authResolversMap]
      ];

    if (roles) {
      console.log(roles);
      return {
        ...field,
        authScopes: createAuthScopes(roles),
      };
    }

    return field;
  },
});


export const schema = builder.toSchema();
