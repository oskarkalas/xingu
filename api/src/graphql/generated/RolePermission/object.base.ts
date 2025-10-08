import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const RolePermissionObject = definePrismaObject('RolePermission', {
  description: undefined,
  findUnique: (fields) => ({ roleId_permissionId: fields }),
  fields: (t) => ({
    roleId: t.field(RolePermissionRoleIdFieldObject),
    permissionId: t.field(RolePermissionPermissionIdFieldObject),
    role: t.relation('role', RolePermissionRoleFieldObject),
    permission: t.relation('permission', RolePermissionPermissionFieldObject),
  }),
});

export const RolePermissionRoleIdFieldObject = defineFieldObject('RolePermission', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.roleId,
});

export const RolePermissionPermissionIdFieldObject = defineFieldObject('RolePermission', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.permissionId,
});

export const RolePermissionRoleFieldObject = defineRelationObject('RolePermission', 'role', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const RolePermissionPermissionFieldObject = defineRelationObject('RolePermission', 'permission', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
