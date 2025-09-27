import { Prisma } from '@prisma/client';
export {
  UserObject,
  UserIdFieldObject,
  UserFirstNameFieldObject,
  UserLastNameFieldObject,
  UserPictureFieldObject,
  UserEmailFieldObject,
  UserCatalogFieldObject,
  UserPasswordFieldObject,
  UserRefreshTokenFieldObject,
  UserCreatedAtFieldObject,
  UserUpdatedAtFieldObject,
  UserRoleFieldObject,
  UserProviderFieldObject,
  createManyUserMutation,
  createOneUserMutation,
  deleteManyUserMutation,
  deleteOneUserMutation,
  updateManyUserMutation,
  updateOneUserMutation,
  upsertOneUserMutation,
  createManyUserMutationObject,
  createOneUserMutationObject,
  deleteManyUserMutationObject,
  deleteOneUserMutationObject,
  updateManyUserMutationObject,
  updateOneUserMutationObject,
  upsertOneUserMutationObject,
  findFirstUserQuery,
  findManyUserQuery,
  countUserQuery,
  findUniqueUserQuery,
  findFirstUserQueryObject,
  findManyUserQueryObject,
  countUserQueryObject,
  findUniqueUserQueryObject
} from './User';
export {
  CatalogObject,
  CatalogIdFieldObject,
  CatalogTitleFieldObject,
  CatalogDescriptionFieldObject,
  CatalogTypeFieldObject,
  CatalogAuthorFieldObject,
  CatalogOwnerFieldObject,
  CatalogOwnerIdFieldObject,
  createManyCatalogMutation,
  createOneCatalogMutation,
  deleteManyCatalogMutation,
  deleteOneCatalogMutation,
  updateManyCatalogMutation,
  updateOneCatalogMutation,
  upsertOneCatalogMutation,
  createManyCatalogMutationObject,
  createOneCatalogMutationObject,
  deleteManyCatalogMutationObject,
  deleteOneCatalogMutationObject,
  updateManyCatalogMutationObject,
  updateOneCatalogMutationObject,
  upsertOneCatalogMutationObject,
  findFirstCatalogQuery,
  findManyCatalogQuery,
  countCatalogQuery,
  findUniqueCatalogQuery,
  findFirstCatalogQueryObject,
  findManyCatalogQueryObject,
  countCatalogQueryObject,
  findUniqueCatalogQueryObject
} from './Catalog';
import { builder } from '../builder';

export const BatchPayload = builder.objectType(builder.objectRef<Prisma.BatchPayload>('BatchPayload'), {
  description: 'Batch payloads from prisma.',
  fields: (t) => ({
    count: t.exposeInt('count', { description: 'Prisma Batch Payload', nullable: false }),
  }),
});

export const modelNames = [
  'User',
  'Catalog',
] as const;

export type Model = typeof modelNames[number];
