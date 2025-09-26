/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    outputFilePath: './packages/prisma/src/lib/graphql/inputs.ts',
  },
  crud: {
    outputDir: './packages/prisma/src/lib/graphql',
    inputsImporter: `import * as Inputs from './packages/prisma/src/lib/graphql/inputs';`,
    resolverImports: `import prisma from '@xingu/prisma';`,
    prismaCaller: 'prisma',
  },
  global: {
  },
};
