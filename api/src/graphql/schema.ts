import { builder } from './builder';
import { generateAllCrud } from './generated/autocrud';

const authResolversMap = {
  User: {
    // findManyUser: ['admin'],
    findFirstUser: ['admin'],
    findUniqueUser: ['admin'],
    countUser: ['admin'],
    createOneUser: ['admin'],
    updateOneUser: ['admin'],
    deleteOneUser: ['admin'],
  },
  Catalog: {
    findManyCatalog: ['admin'],
    findFirstCatalog: ['user'],
    findUniqueCatalog: ['user'],
  },
} as const;

function createAuthScopes(roles: readonly string[]) {
  return roles.reduce((acc, role) => ({ ...acc, [role]: true }), {});
}

generateAllCrud({
  handleResolver: ({ field, modelName, resolverName }) => {
    const roles = authResolversMap[modelName as keyof typeof authResolversMap]?.[
      resolverName as keyof (typeof authResolversMap)[keyof typeof authResolversMap]
      ];

    if (roles) {
      return {
        ...field,
        authScopes: createAuthScopes(roles),
      };
    }

    return field;
  },
});

export const schema = builder.toSchema();
