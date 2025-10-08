import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const UserRoleObject = definePrismaObject('UserRole', {
  description: undefined,
  findUnique: (fields) => ({ userId_roleId: fields }),
  fields: (t) => ({
    userId: t.field(UserRoleUserIdFieldObject),
    roleId: t.field(UserRoleRoleIdFieldObject),
    user: t.relation('user', UserRoleUserFieldObject),
    role: t.relation('role', UserRoleRoleFieldObject),
  }),
});

export const UserRoleUserIdFieldObject = defineFieldObject('UserRole', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.userId,
});

export const UserRoleRoleIdFieldObject = defineFieldObject('UserRole', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.roleId,
});

export const UserRoleUserFieldObject = defineRelationObject('UserRole', 'user', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const UserRoleRoleFieldObject = defineRelationObject('UserRole', 'role', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
