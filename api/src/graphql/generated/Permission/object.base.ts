import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const PermissionObject = definePrismaObject('Permission', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(PermissionIdFieldObject),
    name: t.field(PermissionNameFieldObject),
    description: t.field(PermissionDescriptionFieldObject),
    roles: t.relation('roles', PermissionRolesFieldObject(t)),
  }),
});

export const PermissionIdFieldObject = defineFieldObject('Permission', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const PermissionNameFieldObject = defineFieldObject('Permission', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.name,
});

export const PermissionDescriptionFieldObject = defineFieldObject('Permission', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.description,
});

export const PermissionRolesFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RolePermissionWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.RolePermissionOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.RolePermissionWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RolePermissionScalarFieldEnum], required: false }),
}))

export const PermissionRolesFieldObject = defineRelationFunction('Permission', (t) =>
  defineRelationObject('Permission', 'roles', {
    description: undefined,
    nullable: false,
    args: PermissionRolesFieldArgs,
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
