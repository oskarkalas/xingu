/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    outputFilePath: './packages/prisma/src/lib/graphql/inputs.ts',
  },
  crud: {
    outputDir: './packages/prisma/src/lib/graphql/',
    inputsImporter: `import * as Inputs from '../inputs';`,
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    resolverImports: `import { prisma } from '../../../prisma.client';`,
    prismaCaller: 'prisma',
  },
  global: {
    builderLocation: './packages/prisma/src/lib/builder',
  },
};
