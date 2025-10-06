/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    outputFilePath: './api/src/graphql/generated/inputs.ts',
  },
  crud: {
    outputDir: './api/src/graphql/generated',
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    inputsImporter: `import * as Inputs from '../inputs';`,
    resolverImports: `import { prisma } from '../../../../prisma.client';`,
    prismaCaller: 'prisma',
  },
  global: {
    builderLocation: "./api/src/graphql/builder"
  },
};