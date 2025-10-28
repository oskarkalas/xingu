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
    email: t.field(UserEmailFieldObject),
    name: t.field(UserNameFieldObject),
    image: t.field(UserImageFieldObject),
    password: t.field(UserPasswordFieldObject),
    roles: t.relation('roles', UserRolesFieldObject(t)),
    accounts: t.relation('accounts', UserAccountsFieldObject(t)),
    createdAt: t.field(UserCreatedAtFieldObject),
    updatedAt: t.field(UserUpdatedAtFieldObject),
    PasswordResetToken: t.relation('PasswordResetToken', UserPasswordResetTokenFieldObject(t)),
    VerificationToken: t.relation('VerificationToken', UserVerificationTokenFieldObject(t)),
  }),
});

export const UserIdFieldObject = defineFieldObject('User', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const UserEmailFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.email,
});

export const UserNameFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.name,
});

export const UserImageFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.image,
});

export const UserPasswordFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.password,
});

export const UserRolesFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.UserRoleWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.UserRoleOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.UserRoleWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.UserRoleScalarFieldEnum], required: false }),
}))

export const UserRolesFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'roles', {
    description: undefined,
    nullable: false,
    args: UserRolesFieldArgs,
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

export const UserAccountsFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.AccountWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.AccountOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.AccountWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.AccountScalarFieldEnum], required: false }),
}))

export const UserAccountsFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'accounts', {
    description: undefined,
    nullable: false,
    args: UserAccountsFieldArgs,
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

export const UserPasswordResetTokenFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.PasswordResetTokenWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.PasswordResetTokenOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.PasswordResetTokenWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.PasswordResetTokenScalarFieldEnum], required: false }),
}))

export const UserPasswordResetTokenFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'PasswordResetToken', {
    description: undefined,
    nullable: false,
    args: UserPasswordResetTokenFieldArgs,
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

export const UserVerificationTokenFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.VerificationTokenWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.VerificationTokenOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.VerificationTokenWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.VerificationTokenScalarFieldEnum], required: false }),
}))

export const UserVerificationTokenFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'VerificationToken', {
    description: undefined,
    nullable: false,
    args: UserVerificationTokenFieldArgs,
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
