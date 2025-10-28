import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const RoleObject = definePrismaObject('Role', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(RoleIdFieldObject),
    name: t.field(RoleNameFieldObject),
    description: t.field(RoleDescriptionFieldObject),
    users: t.relation('users', RoleUsersFieldObject(t)),
    permissions: t.relation('permissions', RolePermissionsFieldObject(t)),
  }),
});

export const RoleIdFieldObject = defineFieldObject('Role', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const RoleNameFieldObject = defineFieldObject('Role', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.name,
});

export const RoleDescriptionFieldObject = defineFieldObject('Role', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.description,
});

export const RoleUsersFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.UserRoleWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.UserRoleOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.UserRoleWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.UserRoleScalarFieldEnum], required: false }),
}))

export const RoleUsersFieldObject = defineRelationFunction('Role', (t) =>
  defineRelationObject('Role', 'users', {
    description: undefined,
    nullable: false,
    args: RoleUsersFieldArgs,
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

export const RolePermissionsFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RolePermissionWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.RolePermissionOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.RolePermissionWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RolePermissionScalarFieldEnum], required: false }),
}))

export const RolePermissionsFieldObject = defineRelationFunction('Role', (t) =>
  defineRelationObject('Role', 'permissions', {
    description: undefined,
    nullable: false,
    args: RolePermissionsFieldArgs,
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
