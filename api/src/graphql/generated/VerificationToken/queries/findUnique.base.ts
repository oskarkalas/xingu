import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueVerificationTokenQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.VerificationTokenWhereUniqueInput, required: true }) }))

export const findUniqueVerificationTokenQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'VerificationToken',
    nullable: true,
    args: findUniqueVerificationTokenQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.verificationToken.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueVerificationTokenQuery = defineQuery((t) => ({
  findUniqueVerificationToken: t.prismaField(findUniqueVerificationTokenQueryObject(t)),
}));
