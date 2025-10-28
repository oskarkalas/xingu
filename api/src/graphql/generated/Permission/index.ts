export {
  PermissionObject,
  PermissionIdFieldObject,
  PermissionNameFieldObject,
  PermissionDescriptionFieldObject,
  PermissionRolesFieldObject
} from './object.base';
export {
  createManyPermissionMutation,
  createOnePermissionMutation,
  deleteManyPermissionMutation,
  deleteOnePermissionMutation,
  updateManyPermissionMutation,
  updateOnePermissionMutation,
  upsertOnePermissionMutation,
  createManyPermissionMutationObject,
  createOnePermissionMutationObject,
  deleteManyPermissionMutationObject,
  deleteOnePermissionMutationObject,
  updateManyPermissionMutationObject,
  updateOnePermissionMutationObject,
  upsertOnePermissionMutationObject
} from './mutations';
export {
  findFirstPermissionQuery,
  findManyPermissionQuery,
  countPermissionQuery,
  findUniquePermissionQuery,
  findFirstPermissionQueryObject,
  findManyPermissionQueryObject,
  countPermissionQueryObject,
  findUniquePermissionQueryObject
} from './queries';
