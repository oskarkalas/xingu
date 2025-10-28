export {
  UserRoleObject,
  UserRoleUserIdFieldObject,
  UserRoleRoleIdFieldObject,
  UserRoleUserFieldObject,
  UserRoleRoleFieldObject
} from './object.base';
export {
  createManyUserRoleMutation,
  createOneUserRoleMutation,
  deleteManyUserRoleMutation,
  deleteOneUserRoleMutation,
  updateManyUserRoleMutation,
  updateOneUserRoleMutation,
  upsertOneUserRoleMutation,
  createManyUserRoleMutationObject,
  createOneUserRoleMutationObject,
  deleteManyUserRoleMutationObject,
  deleteOneUserRoleMutationObject,
  updateManyUserRoleMutationObject,
  updateOneUserRoleMutationObject,
  upsertOneUserRoleMutationObject
} from './mutations';
export {
  findFirstUserRoleQuery,
  findManyUserRoleQuery,
  countUserRoleQuery,
  findUniqueUserRoleQuery,
  findFirstUserRoleQueryObject,
  findManyUserRoleQueryObject,
  countUserRoleQueryObject,
  findUniqueUserRoleQueryObject
} from './queries';
