import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const CatalogObject = definePrismaObject('Catalog', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(CatalogIdFieldObject),
    title: t.field(CatalogTitleFieldObject),
    description: t.field(CatalogDescriptionFieldObject),
    type: t.field(CatalogTypeFieldObject),
    author: t.field(CatalogAuthorFieldObject),
    owner: t.relation('owner', CatalogOwnerFieldObject),
    ownerId: t.field(CatalogOwnerIdFieldObject),
  }),
});

export const CatalogIdFieldObject = defineFieldObject('Catalog', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const CatalogTitleFieldObject = defineFieldObject('Catalog', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.title,
});

export const CatalogDescriptionFieldObject = defineFieldObject('Catalog', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.description,
});

export const CatalogTypeFieldObject = defineFieldObject('Catalog', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.type,
});

export const CatalogAuthorFieldObject = defineFieldObject('Catalog', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.author,
});

export const CatalogOwnerFieldObject = defineRelationObject('Catalog', 'owner', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const CatalogOwnerIdFieldObject = defineFieldObject('Catalog', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.ownerId,
});
