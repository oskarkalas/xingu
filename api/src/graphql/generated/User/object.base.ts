import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const UserObject = definePrismaObject('User', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(UserIdFieldObject),
    firstName: t.field(UserFirstNameFieldObject),
    lastName: t.field(UserLastNameFieldObject),
    picture: t.field(UserPictureFieldObject),
    email: t.field(UserEmailFieldObject),
    catalog: t.relation('catalog', UserCatalogFieldObject(t)),
    password: t.field(UserPasswordFieldObject),
    refreshToken: t.field(UserRefreshTokenFieldObject),
    createdAt: t.field(UserCreatedAtFieldObject),
    updatedAt: t.field(UserUpdatedAtFieldObject),
    role: t.field(UserRoleFieldObject),
    provider: t.field(UserProviderFieldObject),
  }),
});

export const UserIdFieldObject = defineFieldObject('User', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const UserFirstNameFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.firstName,
});

export const UserLastNameFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.lastName,
});

export const UserPictureFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.picture,
});

export const UserEmailFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.email,
});

export const UserCatalogFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.CatalogWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.CatalogOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.CatalogWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.CatalogScalarFieldEnum], required: false }),
}))

export const UserCatalogFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'catalog', {
    description: undefined,
    nullable: false,
    args: UserCatalogFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);

export const UserPasswordFieldObject = defineFieldObject('User', {
  type: "String",
  description: '@TypeGraphQL.omit(output: true)',
  nullable: true,
  resolve: (parent) => parent.password,
});

export const UserRefreshTokenFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.refreshToken,
});

export const UserCreatedAtFieldObject = defineFieldObject('User', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const UserUpdatedAtFieldObject = defineFieldObject('User', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});

export const UserRoleFieldObject = defineFieldObject('User', {
  type: Inputs.Role,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.role,
});

export const UserProviderFieldObject = defineFieldObject('User', {
  type: [Inputs.Provider],
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.provider,
});
