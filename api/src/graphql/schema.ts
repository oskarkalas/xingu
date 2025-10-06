import { builder } from './builder';
import { generateAllCrud } from './generated/autocrud';

generateAllCrud({
  handleResolver: ({ field, modelName, operationName, resolverName }) => {
    const authConfig: Record<string, Record<string, any>> = {
      User: {
        // findManyUser: { authScopes: { user: true } },
        findFirstUser: { authScopes: { admin: true } },
        findUniqueUser: { authScopes: { admin: true } },
        countUser: { authScopes: { admin: true } },
        createOneUser: { authScopes: { admin: true } },
        updateOneUser: { authScopes: { admin: true } },
        deleteOneUser: { authScopes: { admin: true } },
      },
      Catalog: {
        findManyCatalog: { authScopes: { admin: true } },
        findFirstCatalog: { authScopes: { user: true } },
        findUniqueCatalog: { authScopes: { user: true } },
      },
    };

    if (authConfig[modelName]?.[resolverName]) {
      return {
        ...field,
        ...authConfig[modelName][resolverName],
      };
    }

    return field;
  },
});

export const schema = builder.toSchema();
