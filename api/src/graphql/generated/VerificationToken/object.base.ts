import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const VerificationTokenObject = definePrismaObject('VerificationToken', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(VerificationTokenIdFieldObject),
    userId: t.field(VerificationTokenUserIdFieldObject),
    tokenHash: t.field(VerificationTokenTokenHashFieldObject),
    expiresAt: t.field(VerificationTokenExpiresAtFieldObject),
    user: t.relation('user', VerificationTokenUserFieldObject),
  }),
});

export const VerificationTokenIdFieldObject = defineFieldObject('VerificationToken', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const VerificationTokenUserIdFieldObject = defineFieldObject('VerificationToken', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.userId,
});

export const VerificationTokenTokenHashFieldObject = defineFieldObject('VerificationToken', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.tokenHash,
});

export const VerificationTokenExpiresAtFieldObject = defineFieldObject('VerificationToken', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.expiresAt,
});

export const VerificationTokenUserFieldObject = defineRelationObject('VerificationToken', 'user', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
