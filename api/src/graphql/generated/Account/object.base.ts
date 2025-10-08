import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const AccountObject = definePrismaObject('Account', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(AccountIdFieldObject),
    provider: t.field(AccountProviderFieldObject),
    providerAccountId: t.field(AccountProviderAccountIdFieldObject),
    accessToken: t.field(AccountAccessTokenFieldObject),
    refreshToken: t.field(AccountRefreshTokenFieldObject),
    expiresAt: t.field(AccountExpiresAtFieldObject),
    userId: t.field(AccountUserIdFieldObject),
    user: t.relation('user', AccountUserFieldObject),
  }),
});

export const AccountIdFieldObject = defineFieldObject('Account', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const AccountProviderFieldObject = defineFieldObject('Account', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.provider,
});

export const AccountProviderAccountIdFieldObject = defineFieldObject('Account', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.providerAccountId,
});

export const AccountAccessTokenFieldObject = defineFieldObject('Account', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.accessToken,
});

export const AccountRefreshTokenFieldObject = defineFieldObject('Account', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.refreshToken,
});

export const AccountExpiresAtFieldObject = defineFieldObject('Account', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.expiresAt,
});

export const AccountUserIdFieldObject = defineFieldObject('Account', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.userId,
});

export const AccountUserFieldObject = defineRelationObject('Account', 'user', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
