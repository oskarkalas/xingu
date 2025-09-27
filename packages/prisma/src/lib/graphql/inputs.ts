// @ts-nocheck
import { Prisma } from '.prisma/client';

import { builder } from '../builder';

type Filters = {
  string: Prisma.StringFieldUpdateOperationsInput;
  nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
  dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
  nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
  int: Prisma.IntFieldUpdateOperationsInput;
  nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
  bool: Prisma.BoolFieldUpdateOperationsInput;
  nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
  bigInt: Prisma.BigIntFieldUpdateOperationsInput;
  nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
  bytes: Prisma.BytesFieldUpdateOperationsInput;
  nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
  float: Prisma.FloatFieldUpdateOperationsInput;
  nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
  decimal: Prisma.DecimalFieldUpdateOperationsInput;
  nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};

type ApplyFilters<InputField> = {
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
    ? Filters[F]
    : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never] ? T[K] : ApplyFilters<T[K]>
};

export const DateTime = builder.scalarType('DateTime', {
  parseValue: (value) => {
    try {
      const date = new Date(value)
      if (date.toString() === 'Invalid Date') throw new Error('Invalid Date')
      return date
    } catch (error) {
      throw new Error('Invalid Date');
    }
  },
  serialize: (value) => value ? new Date(value) : null,
});

export const TransactionIsolationLevel = builder.enumType('TransactionIsolationLevel', {
  values: ["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"] as const,
});

export const UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
  values: ["id","firstName","lastName","picture","email","password","refreshToken","createdAt","updatedAt","role","provider"] as const,
});

export const CatalogScalarFieldEnum = builder.enumType('CatalogScalarFieldEnum', {
  values: ["id","title","description","type","author","ownerId"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ["default","insensitive"] as const,
});

export const NullsOrder = builder.enumType('NullsOrder', {
  values: ["first","last"] as const,
});

export const Role = builder.enumType('Role', {
  values: ["admin","user","editor"] as const,
});

export const Provider = builder.enumType('Provider', {
  values: ["google","facebook","github","microsoft"] as const,
});

export const UserWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserWhereInput]}),
  OR: t.field({"required":false,"type":[UserWhereInput]}),
  NOT: t.field({"required":false,"type":[UserWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  firstName: t.field({"required":false,"type":StringNullableFilter}),
  lastName: t.field({"required":false,"type":StringNullableFilter}),
  picture: t.field({"required":false,"type":StringNullableFilter}),
  email: t.field({"required":false,"type":StringFilter}),
  password: t.field({"required":false,"type":StringNullableFilter}),
  refreshToken: t.field({"required":false,"type":StringNullableFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  role: t.field({"required":false,"type":EnumRoleFilter}),
  provider: t.field({"required":false,"type":EnumProviderNullableListFilter}),
  catalog: t.field({"required":false,"type":CatalogListRelationFilter}),
});
export const UserWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserWhereInput>, false>('UserWhereInput').implement({
  fields: UserWhereInputFields,
});

export const UserOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  firstName: t.field({"required":false,"type":SortOrder}),
  lastName: t.field({"required":false,"type":SortOrder}),
  picture: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  role: t.field({"required":false,"type":SortOrder}),
  provider: t.field({"required":false,"type":SortOrder}),
  catalog: t.field({"required":false,"type":CatalogOrderByRelationAggregateInput}),
});
export const UserOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithRelationInput>, false>('UserOrderByWithRelationInput').implement({
  fields: UserOrderByWithRelationInputFields,
});

export const UserWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  email: t.string({"required":false}),
  AND: t.field({"required":false,"type":[UserWhereInput]}),
  OR: t.field({"required":false,"type":[UserWhereInput]}),
  NOT: t.field({"required":false,"type":[UserWhereInput]}),
  firstName: t.field({"required":false,"type":StringNullableFilter}),
  lastName: t.field({"required":false,"type":StringNullableFilter}),
  picture: t.field({"required":false,"type":StringNullableFilter}),
  password: t.field({"required":false,"type":StringNullableFilter}),
  refreshToken: t.field({"required":false,"type":StringNullableFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  role: t.field({"required":false,"type":EnumRoleFilter}),
  provider: t.field({"required":false,"type":EnumProviderNullableListFilter}),
  catalog: t.field({"required":false,"type":CatalogListRelationFilter}),
});
export const UserWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserWhereUniqueInput>, false>('UserWhereUniqueInput').implement({
  fields: UserWhereUniqueInputFields,
});

export const UserOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  firstName: t.field({"required":false,"type":SortOrder}),
  lastName: t.field({"required":false,"type":SortOrder}),
  picture: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  role: t.field({"required":false,"type":SortOrder}),
  provider: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":UserCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":UserAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":UserMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":UserMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":UserSumOrderByAggregateInput}),
});
export const UserOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithAggregationInput>, false>('UserOrderByWithAggregationInput').implement({
  fields: UserOrderByWithAggregationInputFields,
});

export const UserScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  firstName: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  lastName: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  picture: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  email: t.field({"required":false,"type":StringWithAggregatesFilter}),
  password: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  refreshToken: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  role: t.field({"required":false,"type":EnumRoleWithAggregatesFilter}),
  provider: t.field({"required":false,"type":EnumProviderNullableListFilter}),
});
export const UserScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserScalarWhereWithAggregatesInput>, false>('UserScalarWhereWithAggregatesInput').implement({
  fields: UserScalarWhereWithAggregatesInputFields,
});

export const CatalogWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[CatalogWhereInput]}),
  OR: t.field({"required":false,"type":[CatalogWhereInput]}),
  NOT: t.field({"required":false,"type":[CatalogWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  title: t.field({"required":false,"type":StringNullableFilter}),
  description: t.field({"required":false,"type":StringNullableFilter}),
  type: t.field({"required":false,"type":StringNullableFilter}),
  author: t.field({"required":false,"type":StringNullableFilter}),
  ownerId: t.field({"required":false,"type":IntFilter}),
  owner: t.field({"required":false,"type":UserWhereInput}),
});
export const CatalogWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogWhereInput>, false>('CatalogWhereInput').implement({
  fields: CatalogWhereInputFields,
});

export const CatalogOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  type: t.field({"required":false,"type":SortOrder}),
  author: t.field({"required":false,"type":SortOrder}),
  ownerId: t.field({"required":false,"type":SortOrder}),
  owner: t.field({"required":false,"type":UserOrderByWithRelationInput}),
});
export const CatalogOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogOrderByWithRelationInput>, false>('CatalogOrderByWithRelationInput').implement({
  fields: CatalogOrderByWithRelationInputFields,
});

export const CatalogWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  AND: t.field({"required":false,"type":[CatalogWhereInput]}),
  OR: t.field({"required":false,"type":[CatalogWhereInput]}),
  NOT: t.field({"required":false,"type":[CatalogWhereInput]}),
  title: t.field({"required":false,"type":StringNullableFilter}),
  description: t.field({"required":false,"type":StringNullableFilter}),
  type: t.field({"required":false,"type":StringNullableFilter}),
  author: t.field({"required":false,"type":StringNullableFilter}),
  ownerId: t.field({"required":false,"type":IntFilter}),
  owner: t.field({"required":false,"type":UserWhereInput}),
});
export const CatalogWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogWhereUniqueInput>, false>('CatalogWhereUniqueInput').implement({
  fields: CatalogWhereUniqueInputFields,
});

export const CatalogOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  type: t.field({"required":false,"type":SortOrder}),
  author: t.field({"required":false,"type":SortOrder}),
  ownerId: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":CatalogCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":CatalogAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":CatalogMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":CatalogMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":CatalogSumOrderByAggregateInput}),
});
export const CatalogOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogOrderByWithAggregationInput>, false>('CatalogOrderByWithAggregationInput').implement({
  fields: CatalogOrderByWithAggregationInputFields,
});

export const CatalogScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[CatalogScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[CatalogScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[CatalogScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  title: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  description: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  type: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  author: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  ownerId: t.field({"required":false,"type":IntWithAggregatesFilter}),
});
export const CatalogScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogScalarWhereWithAggregatesInput>, false>('CatalogScalarWhereWithAggregatesInput').implement({
  fields: CatalogScalarWhereWithAggregatesInputFields,
});

export const UserCreateInputFields = (t: any) => ({
  firstName: t.string({"required":false}),
  lastName: t.string({"required":false}),
  picture: t.string({"required":false}),
  email: t.string({"required":true}),
  password: t.string({"required":false}),
  refreshToken: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  role: t.field({"required":false,"type":Role}),
  provider: t.field({"required":false,"type":[Provider]}),
  catalog: t.field({"required":false,"type":CatalogCreateNestedManyWithoutOwnerInput}),
});
export const UserCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateInput>, false>('UserCreateInput').implement({
  fields: UserCreateInputFields,
});

export const UserUpdateInputFields = (t: any) => ({
  firstName: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  lastName: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  picture: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  password: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  refreshToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  role: t.field({"required":false,"type":EnumRoleFieldUpdateOperationsInput}),
  provider: t.field({"required":false,"type":[Provider]}),
  catalog: t.field({"required":false,"type":CatalogUpdateManyWithoutOwnerNestedInput}),
});
export const UserUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateInput>, false>('UserUpdateInput').implement({
  fields: UserUpdateInputFields,
});

export const UserCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  firstName: t.string({"required":false}),
  lastName: t.string({"required":false}),
  picture: t.string({"required":false}),
  email: t.string({"required":true}),
  password: t.string({"required":false}),
  refreshToken: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  role: t.field({"required":false,"type":Role}),
  provider: t.field({"required":false,"type":[Provider]}),
});
export const UserCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateManyInput>, false>('UserCreateManyInput').implement({
  fields: UserCreateManyInputFields,
});

export const UserUpdateManyMutationInputFields = (t: any) => ({
  firstName: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  lastName: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  picture: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  password: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  refreshToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  role: t.field({"required":false,"type":EnumRoleFieldUpdateOperationsInput}),
  provider: t.field({"required":false,"type":[Provider]}),
});
export const UserUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyMutationInput>, false>('UserUpdateManyMutationInput').implement({
  fields: UserUpdateManyMutationInputFields,
});

export const CatalogCreateInputFields = (t: any) => ({
  title: t.string({"required":false}),
  description: t.string({"required":false}),
  type: t.string({"required":false}),
  author: t.string({"required":false}),
  owner: t.field({"required":true,"type":UserCreateNestedOneWithoutCatalogInput}),
});
export const CatalogCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogCreateInput>, false>('CatalogCreateInput').implement({
  fields: CatalogCreateInputFields,
});

export const CatalogUpdateInputFields = (t: any) => ({
  title: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  type: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  author: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  owner: t.field({"required":false,"type":UserUpdateOneRequiredWithoutCatalogNestedInput}),
});
export const CatalogUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogUpdateInput>, false>('CatalogUpdateInput').implement({
  fields: CatalogUpdateInputFields,
});

export const CatalogCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  title: t.string({"required":false}),
  description: t.string({"required":false}),
  type: t.string({"required":false}),
  author: t.string({"required":false}),
  ownerId: t.int({"required":true}),
});
export const CatalogCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogCreateManyInput>, false>('CatalogCreateManyInput').implement({
  fields: CatalogCreateManyInputFields,
});

export const CatalogUpdateManyMutationInputFields = (t: any) => ({
  title: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  type: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  author: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
});
export const CatalogUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogUpdateManyMutationInput>, false>('CatalogUpdateManyMutationInput').implement({
  fields: CatalogUpdateManyMutationInputFields,
});

export const IntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFilter>, false>('IntFilter').implement({
  fields: IntFilterFields,
});

export const StringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableFilter>, false>('StringNullableFilter').implement({
  fields: StringNullableFilterFields,
});

export const StringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFilter>, false>('StringFilter').implement({
  fields: StringFilterFields,
});

export const DateTimeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const DateTimeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFilter>, false>('DateTimeFilter').implement({
  fields: DateTimeFilterFields,
});

export const EnumRoleFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Role}),
  in: t.field({"required":false,"type":[Role]}),
  notIn: t.field({"required":false,"type":[Role]}),
  not: t.field({"required":false,"type":Role}),
});
export const EnumRoleFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.EnumRoleFilter>, false>('EnumRoleFilter').implement({
  fields: EnumRoleFilterFields,
});

export const EnumProviderNullableListFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":[Provider]}),
  has: t.field({"required":false,"type":Provider}),
  hasEvery: t.field({"required":false,"type":[Provider]}),
  hasSome: t.field({"required":false,"type":[Provider]}),
  isEmpty: t.boolean({"required":false}),
});
export const EnumProviderNullableListFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.EnumProviderNullableListFilter>, false>('EnumProviderNullableListFilter').implement({
  fields: EnumProviderNullableListFilterFields,
});

export const CatalogListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":CatalogWhereInput}),
  some: t.field({"required":false,"type":CatalogWhereInput}),
  none: t.field({"required":false,"type":CatalogWhereInput}),
});
export const CatalogListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogListRelationFilter>, false>('CatalogListRelationFilter').implement({
  fields: CatalogListRelationFilterFields,
});

export const CatalogOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const CatalogOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogOrderByRelationAggregateInput>, false>('CatalogOrderByRelationAggregateInput').implement({
  fields: CatalogOrderByRelationAggregateInputFields,
});

export const UserCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  firstName: t.field({"required":false,"type":SortOrder}),
  lastName: t.field({"required":false,"type":SortOrder}),
  picture: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  role: t.field({"required":false,"type":SortOrder}),
  provider: t.field({"required":false,"type":SortOrder}),
});
export const UserCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCountOrderByAggregateInput>, false>('UserCountOrderByAggregateInput').implement({
  fields: UserCountOrderByAggregateInputFields,
});

export const UserAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const UserAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserAvgOrderByAggregateInput>, false>('UserAvgOrderByAggregateInput').implement({
  fields: UserAvgOrderByAggregateInputFields,
});

export const UserMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  firstName: t.field({"required":false,"type":SortOrder}),
  lastName: t.field({"required":false,"type":SortOrder}),
  picture: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  role: t.field({"required":false,"type":SortOrder}),
});
export const UserMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserMaxOrderByAggregateInput>, false>('UserMaxOrderByAggregateInput').implement({
  fields: UserMaxOrderByAggregateInputFields,
});

export const UserMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  firstName: t.field({"required":false,"type":SortOrder}),
  lastName: t.field({"required":false,"type":SortOrder}),
  picture: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  role: t.field({"required":false,"type":SortOrder}),
});
export const UserMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserMinOrderByAggregateInput>, false>('UserMinOrderByAggregateInput').implement({
  fields: UserMinOrderByAggregateInputFields,
});

export const UserSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const UserSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserSumOrderByAggregateInput>, false>('UserSumOrderByAggregateInput').implement({
  fields: UserSumOrderByAggregateInputFields,
});

export const IntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntWithAggregatesFilter>, false>('IntWithAggregatesFilter').implement({
  fields: IntWithAggregatesFilterFields,
});

export const StringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableWithAggregatesFilter>, false>('StringNullableWithAggregatesFilter').implement({
  fields: StringNullableWithAggregatesFilterFields,
});

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>, false>('StringWithAggregatesFilter').implement({
  fields: StringWithAggregatesFilterFields,
});

export const DateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const DateTimeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeWithAggregatesFilter>, false>('DateTimeWithAggregatesFilter').implement({
  fields: DateTimeWithAggregatesFilterFields,
});

export const EnumRoleWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Role}),
  in: t.field({"required":false,"type":[Role]}),
  notIn: t.field({"required":false,"type":[Role]}),
  not: t.field({"required":false,"type":Role}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedEnumRoleFilter}),
  _max: t.field({"required":false,"type":NestedEnumRoleFilter}),
});
export const EnumRoleWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.EnumRoleWithAggregatesFilter>, false>('EnumRoleWithAggregatesFilter').implement({
  fields: EnumRoleWithAggregatesFilterFields,
});

export const UserScalarRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":UserWhereInput}),
  isNot: t.field({"required":false,"type":UserWhereInput}),
});
export const UserScalarRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserScalarRelationFilter>, false>('UserScalarRelationFilter').implement({
  fields: UserScalarRelationFilterFields,
});

export const CatalogCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  type: t.field({"required":false,"type":SortOrder}),
  author: t.field({"required":false,"type":SortOrder}),
  ownerId: t.field({"required":false,"type":SortOrder}),
});
export const CatalogCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogCountOrderByAggregateInput>, false>('CatalogCountOrderByAggregateInput').implement({
  fields: CatalogCountOrderByAggregateInputFields,
});

export const CatalogAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  ownerId: t.field({"required":false,"type":SortOrder}),
});
export const CatalogAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogAvgOrderByAggregateInput>, false>('CatalogAvgOrderByAggregateInput').implement({
  fields: CatalogAvgOrderByAggregateInputFields,
});

export const CatalogMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  type: t.field({"required":false,"type":SortOrder}),
  author: t.field({"required":false,"type":SortOrder}),
  ownerId: t.field({"required":false,"type":SortOrder}),
});
export const CatalogMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogMaxOrderByAggregateInput>, false>('CatalogMaxOrderByAggregateInput').implement({
  fields: CatalogMaxOrderByAggregateInputFields,
});

export const CatalogMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  type: t.field({"required":false,"type":SortOrder}),
  author: t.field({"required":false,"type":SortOrder}),
  ownerId: t.field({"required":false,"type":SortOrder}),
});
export const CatalogMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogMinOrderByAggregateInput>, false>('CatalogMinOrderByAggregateInput').implement({
  fields: CatalogMinOrderByAggregateInputFields,
});

export const CatalogSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  ownerId: t.field({"required":false,"type":SortOrder}),
});
export const CatalogSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogSumOrderByAggregateInput>, false>('CatalogSumOrderByAggregateInput').implement({
  fields: CatalogSumOrderByAggregateInputFields,
});

export const UserCreateproviderInputFields = (t: any) => ({
  set: t.field({"required":true,"type":[Provider]}),
});
export const UserCreateproviderInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateproviderInput>, false>('UserCreateproviderInput').implement({
  fields: UserCreateproviderInputFields,
});

export const CatalogCreateNestedManyWithoutOwnerInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[CatalogCreateWithoutOwnerInput]}),
  connectOrCreate: t.field({"required":false,"type":[CatalogCreateOrConnectWithoutOwnerInput]}),
  createMany: t.field({"required":false,"type":CatalogCreateManyOwnerInputEnvelope}),
  connect: t.field({"required":false,"type":[CatalogWhereUniqueInput]}),
});
export const CatalogCreateNestedManyWithoutOwnerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogCreateNestedManyWithoutOwnerInput>, false>('CatalogCreateNestedManyWithoutOwnerInput').implement({
  fields: CatalogCreateNestedManyWithoutOwnerInputFields,
});

export const NullableStringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const NullableStringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableStringFieldUpdateOperationsInput>, false>('NullableStringFieldUpdateOperationsInput').implement({
  fields: NullableStringFieldUpdateOperationsInputFields,
});

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const StringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>, false>('StringFieldUpdateOperationsInput').implement({
  fields: StringFieldUpdateOperationsInputFields,
});

export const DateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":DateTime}),
});
export const DateTimeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFieldUpdateOperationsInput>, false>('DateTimeFieldUpdateOperationsInput').implement({
  fields: DateTimeFieldUpdateOperationsInputFields,
});

export const EnumRoleFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":Role}),
});
export const EnumRoleFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.EnumRoleFieldUpdateOperationsInput>, false>('EnumRoleFieldUpdateOperationsInput').implement({
  fields: EnumRoleFieldUpdateOperationsInputFields,
});

export const UserUpdateproviderInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[Provider]}),
  push: t.field({"required":false,"type":[Provider]}),
});
export const UserUpdateproviderInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateproviderInput>, false>('UserUpdateproviderInput').implement({
  fields: UserUpdateproviderInputFields,
});

export const CatalogUpdateManyWithoutOwnerNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[CatalogCreateWithoutOwnerInput]}),
  connectOrCreate: t.field({"required":false,"type":[CatalogCreateOrConnectWithoutOwnerInput]}),
  upsert: t.field({"required":false,"type":[CatalogUpsertWithWhereUniqueWithoutOwnerInput]}),
  createMany: t.field({"required":false,"type":CatalogCreateManyOwnerInputEnvelope}),
  set: t.field({"required":false,"type":[CatalogWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[CatalogWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[CatalogWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[CatalogWhereUniqueInput]}),
  update: t.field({"required":false,"type":[CatalogUpdateWithWhereUniqueWithoutOwnerInput]}),
  updateMany: t.field({"required":false,"type":[CatalogUpdateManyWithWhereWithoutOwnerInput]}),
  deleteMany: t.field({"required":false,"type":[CatalogScalarWhereInput]}),
});
export const CatalogUpdateManyWithoutOwnerNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogUpdateManyWithoutOwnerNestedInput>, false>('CatalogUpdateManyWithoutOwnerNestedInput').implement({
  fields: CatalogUpdateManyWithoutOwnerNestedInputFields,
});

export const IntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({"required":false}),
  increment: t.int({"required":false}),
  decrement: t.int({"required":false}),
  multiply: t.int({"required":false}),
  divide: t.int({"required":false}),
});
export const IntFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFieldUpdateOperationsInput>, false>('IntFieldUpdateOperationsInput').implement({
  fields: IntFieldUpdateOperationsInputFields,
});

export const UserCreateNestedOneWithoutCatalogInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutCatalogInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutCatalogInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
});
export const UserCreateNestedOneWithoutCatalogInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutCatalogInput>, false>('UserCreateNestedOneWithoutCatalogInput').implement({
  fields: UserCreateNestedOneWithoutCatalogInputFields,
});

export const UserUpdateOneRequiredWithoutCatalogNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutCatalogInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutCatalogInput}),
  upsert: t.field({"required":false,"type":UserUpsertWithoutCatalogInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  update: t.field({"required":false,"type":UserUpdateToOneWithWhereWithoutCatalogInput}),
});
export const UserUpdateOneRequiredWithoutCatalogNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutCatalogNestedInput>, false>('UserUpdateOneRequiredWithoutCatalogNestedInput').implement({
  fields: UserUpdateOneRequiredWithoutCatalogNestedInputFields,
});

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>, false>('NestedIntFilter').implement({
  fields: NestedIntFilterFields,
});

export const NestedStringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableFilter>, false>('NestedStringNullableFilter').implement({
  fields: NestedStringNullableFilterFields,
});

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>, false>('NestedStringFilter').implement({
  fields: NestedStringFilterFields,
});

export const NestedDateTimeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const NestedDateTimeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeFilter>, false>('NestedDateTimeFilter').implement({
  fields: NestedDateTimeFilterFields,
});

export const NestedEnumRoleFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Role}),
  in: t.field({"required":false,"type":[Role]}),
  notIn: t.field({"required":false,"type":[Role]}),
  not: t.field({"required":false,"type":Role}),
});
export const NestedEnumRoleFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumRoleFilter>, false>('NestedEnumRoleFilter').implement({
  fields: NestedEnumRoleFilterFields,
});

export const NestedIntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntWithAggregatesFilter>, false>('NestedIntWithAggregatesFilter').implement({
  fields: NestedIntWithAggregatesFilterFields,
});

export const NestedFloatFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatFilter}),
});
export const NestedFloatFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatFilter>, false>('NestedFloatFilter').implement({
  fields: NestedFloatFilterFields,
});

export const NestedStringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableWithAggregatesFilter>, false>('NestedStringNullableWithAggregatesFilter').implement({
  fields: NestedStringNullableWithAggregatesFilterFields,
});

export const NestedIntNullableFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntNullableFilter}),
});
export const NestedIntNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableFilter>, false>('NestedIntNullableFilter').implement({
  fields: NestedIntNullableFilterFields,
});

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>, false>('NestedStringWithAggregatesFilter').implement({
  fields: NestedStringWithAggregatesFilterFields,
});

export const NestedDateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const NestedDateTimeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeWithAggregatesFilter>, false>('NestedDateTimeWithAggregatesFilter').implement({
  fields: NestedDateTimeWithAggregatesFilterFields,
});

export const NestedEnumRoleWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Role}),
  in: t.field({"required":false,"type":[Role]}),
  notIn: t.field({"required":false,"type":[Role]}),
  not: t.field({"required":false,"type":Role}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedEnumRoleFilter}),
  _max: t.field({"required":false,"type":NestedEnumRoleFilter}),
});
export const NestedEnumRoleWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumRoleWithAggregatesFilter>, false>('NestedEnumRoleWithAggregatesFilter').implement({
  fields: NestedEnumRoleWithAggregatesFilterFields,
});

export const CatalogCreateWithoutOwnerInputFields = (t: any) => ({
  title: t.string({"required":false}),
  description: t.string({"required":false}),
  type: t.string({"required":false}),
  author: t.string({"required":false}),
});
export const CatalogCreateWithoutOwnerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogCreateWithoutOwnerInput>, false>('CatalogCreateWithoutOwnerInput').implement({
  fields: CatalogCreateWithoutOwnerInputFields,
});

export const CatalogCreateOrConnectWithoutOwnerInputFields = (t: any) => ({
  where: t.field({"required":true,"type":CatalogWhereUniqueInput}),
  create: t.field({"required":true,"type":CatalogCreateWithoutOwnerInput}),
});
export const CatalogCreateOrConnectWithoutOwnerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogCreateOrConnectWithoutOwnerInput>, false>('CatalogCreateOrConnectWithoutOwnerInput').implement({
  fields: CatalogCreateOrConnectWithoutOwnerInputFields,
});

export const CatalogCreateManyOwnerInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[CatalogCreateManyOwnerInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const CatalogCreateManyOwnerInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogCreateManyOwnerInputEnvelope>, false>('CatalogCreateManyOwnerInputEnvelope').implement({
  fields: CatalogCreateManyOwnerInputEnvelopeFields,
});

export const CatalogUpsertWithWhereUniqueWithoutOwnerInputFields = (t: any) => ({
  where: t.field({"required":true,"type":CatalogWhereUniqueInput}),
  update: t.field({"required":true,"type":CatalogUpdateWithoutOwnerInput}),
  create: t.field({"required":true,"type":CatalogCreateWithoutOwnerInput}),
});
export const CatalogUpsertWithWhereUniqueWithoutOwnerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogUpsertWithWhereUniqueWithoutOwnerInput>, false>('CatalogUpsertWithWhereUniqueWithoutOwnerInput').implement({
  fields: CatalogUpsertWithWhereUniqueWithoutOwnerInputFields,
});

export const CatalogUpdateWithWhereUniqueWithoutOwnerInputFields = (t: any) => ({
  where: t.field({"required":true,"type":CatalogWhereUniqueInput}),
  data: t.field({"required":true,"type":CatalogUpdateWithoutOwnerInput}),
});
export const CatalogUpdateWithWhereUniqueWithoutOwnerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogUpdateWithWhereUniqueWithoutOwnerInput>, false>('CatalogUpdateWithWhereUniqueWithoutOwnerInput').implement({
  fields: CatalogUpdateWithWhereUniqueWithoutOwnerInputFields,
});

export const CatalogUpdateManyWithWhereWithoutOwnerInputFields = (t: any) => ({
  where: t.field({"required":true,"type":CatalogScalarWhereInput}),
  data: t.field({"required":true,"type":CatalogUpdateManyMutationInput}),
});
export const CatalogUpdateManyWithWhereWithoutOwnerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogUpdateManyWithWhereWithoutOwnerInput>, false>('CatalogUpdateManyWithWhereWithoutOwnerInput').implement({
  fields: CatalogUpdateManyWithWhereWithoutOwnerInputFields,
});

export const CatalogScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[CatalogScalarWhereInput]}),
  OR: t.field({"required":false,"type":[CatalogScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[CatalogScalarWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  title: t.field({"required":false,"type":StringNullableFilter}),
  description: t.field({"required":false,"type":StringNullableFilter}),
  type: t.field({"required":false,"type":StringNullableFilter}),
  author: t.field({"required":false,"type":StringNullableFilter}),
  ownerId: t.field({"required":false,"type":IntFilter}),
});
export const CatalogScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogScalarWhereInput>, false>('CatalogScalarWhereInput').implement({
  fields: CatalogScalarWhereInputFields,
});

export const UserCreateWithoutCatalogInputFields = (t: any) => ({
  firstName: t.string({"required":false}),
  lastName: t.string({"required":false}),
  picture: t.string({"required":false}),
  email: t.string({"required":true}),
  password: t.string({"required":false}),
  refreshToken: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  role: t.field({"required":false,"type":Role}),
  provider: t.field({"required":false,"type":[Provider]}),
});
export const UserCreateWithoutCatalogInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutCatalogInput>, false>('UserCreateWithoutCatalogInput').implement({
  fields: UserCreateWithoutCatalogInputFields,
});

export const UserCreateOrConnectWithoutCatalogInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  create: t.field({"required":true,"type":UserCreateWithoutCatalogInput}),
});
export const UserCreateOrConnectWithoutCatalogInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutCatalogInput>, false>('UserCreateOrConnectWithoutCatalogInput').implement({
  fields: UserCreateOrConnectWithoutCatalogInputFields,
});

export const UserUpsertWithoutCatalogInputFields = (t: any) => ({
  update: t.field({"required":true,"type":UserUpdateWithoutCatalogInput}),
  create: t.field({"required":true,"type":UserCreateWithoutCatalogInput}),
  where: t.field({"required":false,"type":UserWhereInput}),
});
export const UserUpsertWithoutCatalogInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutCatalogInput>, false>('UserUpsertWithoutCatalogInput').implement({
  fields: UserUpsertWithoutCatalogInputFields,
});

export const UserUpdateToOneWithWhereWithoutCatalogInputFields = (t: any) => ({
  where: t.field({"required":false,"type":UserWhereInput}),
  data: t.field({"required":true,"type":UserUpdateWithoutCatalogInput}),
});
export const UserUpdateToOneWithWhereWithoutCatalogInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateToOneWithWhereWithoutCatalogInput>, false>('UserUpdateToOneWithWhereWithoutCatalogInput').implement({
  fields: UserUpdateToOneWithWhereWithoutCatalogInputFields,
});

export const UserUpdateWithoutCatalogInputFields = (t: any) => ({
  firstName: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  lastName: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  picture: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  password: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  refreshToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  role: t.field({"required":false,"type":EnumRoleFieldUpdateOperationsInput}),
  provider: t.field({"required":false,"type":[Provider]}),
});
export const UserUpdateWithoutCatalogInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutCatalogInput>, false>('UserUpdateWithoutCatalogInput').implement({
  fields: UserUpdateWithoutCatalogInputFields,
});

export const CatalogCreateManyOwnerInputFields = (t: any) => ({
  id: t.int({"required":false}),
  title: t.string({"required":false}),
  description: t.string({"required":false}),
  type: t.string({"required":false}),
  author: t.string({"required":false}),
});
export const CatalogCreateManyOwnerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogCreateManyOwnerInput>, false>('CatalogCreateManyOwnerInput').implement({
  fields: CatalogCreateManyOwnerInputFields,
});

export const CatalogUpdateWithoutOwnerInputFields = (t: any) => ({
  title: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  type: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  author: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
});
export const CatalogUpdateWithoutOwnerInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.CatalogUpdateWithoutOwnerInput>, false>('CatalogUpdateWithoutOwnerInput').implement({
  fields: CatalogUpdateWithoutOwnerInputFields,
});