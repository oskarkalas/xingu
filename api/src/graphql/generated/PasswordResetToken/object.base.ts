import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const PasswordResetTokenObject = definePrismaObject('PasswordResetToken', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(PasswordResetTokenIdFieldObject),
    userId: t.field(PasswordResetTokenUserIdFieldObject),
    tokenHash: t.field(PasswordResetTokenTokenHashFieldObject),
    expiresAt: t.field(PasswordResetTokenExpiresAtFieldObject),
    user: t.relation('user', PasswordResetTokenUserFieldObject),
  }),
});

export const PasswordResetTokenIdFieldObject = defineFieldObject('PasswordResetToken', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const PasswordResetTokenUserIdFieldObject = defineFieldObject('PasswordResetToken', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.userId,
});

export const PasswordResetTokenTokenHashFieldObject = defineFieldObject('PasswordResetToken', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.tokenHash,
});

export const PasswordResetTokenExpiresAtFieldObject = defineFieldObject('PasswordResetToken', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.expiresAt,
});

export const PasswordResetTokenUserFieldObject = defineRelationObject('PasswordResetToken', 'user', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
