/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    outputFilePath: '@xingu/prisma/graphql/__generated__/inputs.ts',
  },
  crud: {
    outputDir: './packages/prisma/src/lib',
    inputsImporter: `import * as Inputs from '@xingu/prisma/graphql/__generated__/inputs';`,
    resolverImports: `import prisma from '@xingu/prisma';`,
    prismaCaller: 'prisma',
  },
  global: {
  },
};
