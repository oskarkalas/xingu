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

export const NEVER = builder.scalarType('NEVER', {
  serialize: (value) => value,
  description: 'Never fill this, its created for inputs that dont have fields',
});

export const TransactionIsolationLevel = builder.enumType('TransactionIsolationLevel', {
  values: ["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"] as const,
});

export const UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
  values: ["id","email","name","image","password","createdAt","updatedAt"] as const,
});

export const AccountScalarFieldEnum = builder.enumType('AccountScalarFieldEnum', {
  values: ["id","provider","providerAccountId","accessToken","refreshToken","expiresAt","userId"] as const,
});

export const RoleScalarFieldEnum = builder.enumType('RoleScalarFieldEnum', {
  values: ["id","name","description"] as const,
});

export const PermissionScalarFieldEnum = builder.enumType('PermissionScalarFieldEnum', {
  values: ["id","name","description"] as const,
});

export const UserRoleScalarFieldEnum = builder.enumType('UserRoleScalarFieldEnum', {
  values: ["userId","roleId"] as const,
});

export const RolePermissionScalarFieldEnum = builder.enumType('RolePermissionScalarFieldEnum', {
  values: ["roleId","permissionId"] as const,
});

export const PasswordResetTokenScalarFieldEnum = builder.enumType('PasswordResetTokenScalarFieldEnum', {
  values: ["id","userId","tokenHash","expiresAt"] as const,
});

export const VerificationTokenScalarFieldEnum = builder.enumType('VerificationTokenScalarFieldEnum', {
  values: ["id","userId","tokenHash","expiresAt"] as const,
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

export const UserWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserWhereInput]}),
  OR: t.field({"required":false,"type":[UserWhereInput]}),
  NOT: t.field({"required":false,"type":[UserWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  email: t.field({"required":false,"type":StringNullableFilter}),
  name: t.field({"required":false,"type":StringNullableFilter}),
  image: t.field({"required":false,"type":StringNullableFilter}),
  password: t.field({"required":false,"type":StringNullableFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  roles: t.field({"required":false,"type":UserRoleListRelationFilter}),
  accounts: t.field({"required":false,"type":AccountListRelationFilter}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenListRelationFilter}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenListRelationFilter}),
});
export const UserWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserWhereInput>, false>('UserWhereInput').implement({
  fields: UserWhereInputFields,
});

export const UserOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  roles: t.field({"required":false,"type":UserRoleOrderByRelationAggregateInput}),
  accounts: t.field({"required":false,"type":AccountOrderByRelationAggregateInput}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenOrderByRelationAggregateInput}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenOrderByRelationAggregateInput}),
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
  name: t.field({"required":false,"type":StringNullableFilter}),
  image: t.field({"required":false,"type":StringNullableFilter}),
  password: t.field({"required":false,"type":StringNullableFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  roles: t.field({"required":false,"type":UserRoleListRelationFilter}),
  accounts: t.field({"required":false,"type":AccountListRelationFilter}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenListRelationFilter}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenListRelationFilter}),
});
export const UserWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserWhereUniqueInput>, false>('UserWhereUniqueInput').implement({
  fields: UserWhereUniqueInputFields,
});

export const UserOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
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
  email: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  image: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  password: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
});
export const UserScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserScalarWhereWithAggregatesInput>, false>('UserScalarWhereWithAggregatesInput').implement({
  fields: UserScalarWhereWithAggregatesInputFields,
});

export const AccountWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[AccountWhereInput]}),
  OR: t.field({"required":false,"type":[AccountWhereInput]}),
  NOT: t.field({"required":false,"type":[AccountWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  provider: t.field({"required":false,"type":StringFilter}),
  providerAccountId: t.field({"required":false,"type":StringFilter}),
  accessToken: t.field({"required":false,"type":StringNullableFilter}),
  refreshToken: t.field({"required":false,"type":StringNullableFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
});
export const AccountWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountWhereInput>, false>('AccountWhereInput').implement({
  fields: AccountWhereInputFields,
});

export const AccountOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  provider: t.field({"required":false,"type":SortOrder}),
  providerAccountId: t.field({"required":false,"type":SortOrder}),
  accessToken: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  user: t.field({"required":false,"type":UserOrderByWithRelationInput}),
});
export const AccountOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountOrderByWithRelationInput>, false>('AccountOrderByWithRelationInput').implement({
  fields: AccountOrderByWithRelationInputFields,
});

export const AccountWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  provider_providerAccountId: t.field({"required":false,"type":AccountProviderProviderAccountIdCompoundUniqueInput}),
  AND: t.field({"required":false,"type":[AccountWhereInput]}),
  OR: t.field({"required":false,"type":[AccountWhereInput]}),
  NOT: t.field({"required":false,"type":[AccountWhereInput]}),
  provider: t.field({"required":false,"type":StringFilter}),
  providerAccountId: t.field({"required":false,"type":StringFilter}),
  accessToken: t.field({"required":false,"type":StringNullableFilter}),
  refreshToken: t.field({"required":false,"type":StringNullableFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
});
export const AccountWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountWhereUniqueInput>, false>('AccountWhereUniqueInput').implement({
  fields: AccountWhereUniqueInputFields,
});

export const AccountOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  provider: t.field({"required":false,"type":SortOrder}),
  providerAccountId: t.field({"required":false,"type":SortOrder}),
  accessToken: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":AccountCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":AccountAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":AccountMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":AccountMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":AccountSumOrderByAggregateInput}),
});
export const AccountOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountOrderByWithAggregationInput>, false>('AccountOrderByWithAggregationInput').implement({
  fields: AccountOrderByWithAggregationInputFields,
});

export const AccountScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[AccountScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[AccountScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[AccountScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  provider: t.field({"required":false,"type":StringWithAggregatesFilter}),
  providerAccountId: t.field({"required":false,"type":StringWithAggregatesFilter}),
  accessToken: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  refreshToken: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeNullableWithAggregatesFilter}),
  userId: t.field({"required":false,"type":IntWithAggregatesFilter}),
});
export const AccountScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountScalarWhereWithAggregatesInput>, false>('AccountScalarWhereWithAggregatesInput').implement({
  fields: AccountScalarWhereWithAggregatesInputFields,
});

export const RoleWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RoleWhereInput]}),
  OR: t.field({"required":false,"type":[RoleWhereInput]}),
  NOT: t.field({"required":false,"type":[RoleWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  description: t.field({"required":false,"type":StringNullableFilter}),
  users: t.field({"required":false,"type":UserRoleListRelationFilter}),
  permissions: t.field({"required":false,"type":RolePermissionListRelationFilter}),
});
export const RoleWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleWhereInput>, false>('RoleWhereInput').implement({
  fields: RoleWhereInputFields,
});

export const RoleOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  users: t.field({"required":false,"type":UserRoleOrderByRelationAggregateInput}),
  permissions: t.field({"required":false,"type":RolePermissionOrderByRelationAggregateInput}),
});
export const RoleOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleOrderByWithRelationInput>, false>('RoleOrderByWithRelationInput').implement({
  fields: RoleOrderByWithRelationInputFields,
});

export const RoleWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  name: t.string({"required":false}),
  AND: t.field({"required":false,"type":[RoleWhereInput]}),
  OR: t.field({"required":false,"type":[RoleWhereInput]}),
  NOT: t.field({"required":false,"type":[RoleWhereInput]}),
  description: t.field({"required":false,"type":StringNullableFilter}),
  users: t.field({"required":false,"type":UserRoleListRelationFilter}),
  permissions: t.field({"required":false,"type":RolePermissionListRelationFilter}),
});
export const RoleWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleWhereUniqueInput>, false>('RoleWhereUniqueInput').implement({
  fields: RoleWhereUniqueInputFields,
});

export const RoleOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":RoleCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":RoleAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":RoleMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":RoleMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":RoleSumOrderByAggregateInput}),
});
export const RoleOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleOrderByWithAggregationInput>, false>('RoleOrderByWithAggregationInput').implement({
  fields: RoleOrderByWithAggregationInputFields,
});

export const RoleScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RoleScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[RoleScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[RoleScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringWithAggregatesFilter}),
  description: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
});
export const RoleScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleScalarWhereWithAggregatesInput>, false>('RoleScalarWhereWithAggregatesInput').implement({
  fields: RoleScalarWhereWithAggregatesInputFields,
});

export const PermissionWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[PermissionWhereInput]}),
  OR: t.field({"required":false,"type":[PermissionWhereInput]}),
  NOT: t.field({"required":false,"type":[PermissionWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  description: t.field({"required":false,"type":StringNullableFilter}),
  roles: t.field({"required":false,"type":RolePermissionListRelationFilter}),
});
export const PermissionWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionWhereInput>, false>('PermissionWhereInput').implement({
  fields: PermissionWhereInputFields,
});

export const PermissionOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  roles: t.field({"required":false,"type":RolePermissionOrderByRelationAggregateInput}),
});
export const PermissionOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionOrderByWithRelationInput>, false>('PermissionOrderByWithRelationInput').implement({
  fields: PermissionOrderByWithRelationInputFields,
});

export const PermissionWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  name: t.string({"required":false}),
  AND: t.field({"required":false,"type":[PermissionWhereInput]}),
  OR: t.field({"required":false,"type":[PermissionWhereInput]}),
  NOT: t.field({"required":false,"type":[PermissionWhereInput]}),
  description: t.field({"required":false,"type":StringNullableFilter}),
  roles: t.field({"required":false,"type":RolePermissionListRelationFilter}),
});
export const PermissionWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionWhereUniqueInput>, false>('PermissionWhereUniqueInput').implement({
  fields: PermissionWhereUniqueInputFields,
});

export const PermissionOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":PermissionCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":PermissionAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":PermissionMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":PermissionMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":PermissionSumOrderByAggregateInput}),
});
export const PermissionOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionOrderByWithAggregationInput>, false>('PermissionOrderByWithAggregationInput').implement({
  fields: PermissionOrderByWithAggregationInputFields,
});

export const PermissionScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[PermissionScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[PermissionScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[PermissionScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringWithAggregatesFilter}),
  description: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
});
export const PermissionScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionScalarWhereWithAggregatesInput>, false>('PermissionScalarWhereWithAggregatesInput').implement({
  fields: PermissionScalarWhereWithAggregatesInputFields,
});

export const UserRoleWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserRoleWhereInput]}),
  OR: t.field({"required":false,"type":[UserRoleWhereInput]}),
  NOT: t.field({"required":false,"type":[UserRoleWhereInput]}),
  userId: t.field({"required":false,"type":IntFilter}),
  roleId: t.field({"required":false,"type":IntFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
  role: t.field({"required":false,"type":RoleWhereInput}),
});
export const UserRoleWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleWhereInput>, false>('UserRoleWhereInput').implement({
  fields: UserRoleWhereInputFields,
});

export const UserRoleOrderByWithRelationInputFields = (t: any) => ({
  userId: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
  user: t.field({"required":false,"type":UserOrderByWithRelationInput}),
  role: t.field({"required":false,"type":RoleOrderByWithRelationInput}),
});
export const UserRoleOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleOrderByWithRelationInput>, false>('UserRoleOrderByWithRelationInput').implement({
  fields: UserRoleOrderByWithRelationInputFields,
});

export const UserRoleWhereUniqueInputFields = (t: any) => ({
  userId_roleId: t.field({"required":false,"type":UserRoleUserIdRoleIdCompoundUniqueInput}),
  AND: t.field({"required":false,"type":[UserRoleWhereInput]}),
  OR: t.field({"required":false,"type":[UserRoleWhereInput]}),
  NOT: t.field({"required":false,"type":[UserRoleWhereInput]}),
  userId: t.field({"required":false,"type":IntFilter}),
  roleId: t.field({"required":false,"type":IntFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
  role: t.field({"required":false,"type":RoleWhereInput}),
});
export const UserRoleWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleWhereUniqueInput>, false>('UserRoleWhereUniqueInput').implement({
  fields: UserRoleWhereUniqueInputFields,
});

export const UserRoleOrderByWithAggregationInputFields = (t: any) => ({
  userId: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":UserRoleCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":UserRoleAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":UserRoleMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":UserRoleMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":UserRoleSumOrderByAggregateInput}),
});
export const UserRoleOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleOrderByWithAggregationInput>, false>('UserRoleOrderByWithAggregationInput').implement({
  fields: UserRoleOrderByWithAggregationInputFields,
});

export const UserRoleScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserRoleScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[UserRoleScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[UserRoleScalarWhereWithAggregatesInput]}),
  userId: t.field({"required":false,"type":IntWithAggregatesFilter}),
  roleId: t.field({"required":false,"type":IntWithAggregatesFilter}),
});
export const UserRoleScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleScalarWhereWithAggregatesInput>, false>('UserRoleScalarWhereWithAggregatesInput').implement({
  fields: UserRoleScalarWhereWithAggregatesInputFields,
});

export const RolePermissionWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RolePermissionWhereInput]}),
  OR: t.field({"required":false,"type":[RolePermissionWhereInput]}),
  NOT: t.field({"required":false,"type":[RolePermissionWhereInput]}),
  roleId: t.field({"required":false,"type":IntFilter}),
  permissionId: t.field({"required":false,"type":IntFilter}),
  role: t.field({"required":false,"type":RoleWhereInput}),
  permission: t.field({"required":false,"type":PermissionWhereInput}),
});
export const RolePermissionWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionWhereInput>, false>('RolePermissionWhereInput').implement({
  fields: RolePermissionWhereInputFields,
});

export const RolePermissionOrderByWithRelationInputFields = (t: any) => ({
  roleId: t.field({"required":false,"type":SortOrder}),
  permissionId: t.field({"required":false,"type":SortOrder}),
  role: t.field({"required":false,"type":RoleOrderByWithRelationInput}),
  permission: t.field({"required":false,"type":PermissionOrderByWithRelationInput}),
});
export const RolePermissionOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionOrderByWithRelationInput>, false>('RolePermissionOrderByWithRelationInput').implement({
  fields: RolePermissionOrderByWithRelationInputFields,
});

export const RolePermissionWhereUniqueInputFields = (t: any) => ({
  roleId_permissionId: t.field({"required":false,"type":RolePermissionRoleIdPermissionIdCompoundUniqueInput}),
  AND: t.field({"required":false,"type":[RolePermissionWhereInput]}),
  OR: t.field({"required":false,"type":[RolePermissionWhereInput]}),
  NOT: t.field({"required":false,"type":[RolePermissionWhereInput]}),
  roleId: t.field({"required":false,"type":IntFilter}),
  permissionId: t.field({"required":false,"type":IntFilter}),
  role: t.field({"required":false,"type":RoleWhereInput}),
  permission: t.field({"required":false,"type":PermissionWhereInput}),
});
export const RolePermissionWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionWhereUniqueInput>, false>('RolePermissionWhereUniqueInput').implement({
  fields: RolePermissionWhereUniqueInputFields,
});

export const RolePermissionOrderByWithAggregationInputFields = (t: any) => ({
  roleId: t.field({"required":false,"type":SortOrder}),
  permissionId: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":RolePermissionCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":RolePermissionAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":RolePermissionMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":RolePermissionMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":RolePermissionSumOrderByAggregateInput}),
});
export const RolePermissionOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionOrderByWithAggregationInput>, false>('RolePermissionOrderByWithAggregationInput').implement({
  fields: RolePermissionOrderByWithAggregationInputFields,
});

export const RolePermissionScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RolePermissionScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[RolePermissionScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[RolePermissionScalarWhereWithAggregatesInput]}),
  roleId: t.field({"required":false,"type":IntWithAggregatesFilter}),
  permissionId: t.field({"required":false,"type":IntWithAggregatesFilter}),
});
export const RolePermissionScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionScalarWhereWithAggregatesInput>, false>('RolePermissionScalarWhereWithAggregatesInput').implement({
  fields: RolePermissionScalarWhereWithAggregatesInputFields,
});

export const PasswordResetTokenWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[PasswordResetTokenWhereInput]}),
  OR: t.field({"required":false,"type":[PasswordResetTokenWhereInput]}),
  NOT: t.field({"required":false,"type":[PasswordResetTokenWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
  tokenHash: t.field({"required":false,"type":StringFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
});
export const PasswordResetTokenWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenWhereInput>, false>('PasswordResetTokenWhereInput').implement({
  fields: PasswordResetTokenWhereInputFields,
});

export const PasswordResetTokenOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
  user: t.field({"required":false,"type":UserOrderByWithRelationInput}),
});
export const PasswordResetTokenOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenOrderByWithRelationInput>, false>('PasswordResetTokenOrderByWithRelationInput').implement({
  fields: PasswordResetTokenOrderByWithRelationInputFields,
});

export const PasswordResetTokenWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  AND: t.field({"required":false,"type":[PasswordResetTokenWhereInput]}),
  OR: t.field({"required":false,"type":[PasswordResetTokenWhereInput]}),
  NOT: t.field({"required":false,"type":[PasswordResetTokenWhereInput]}),
  userId: t.field({"required":false,"type":IntFilter}),
  tokenHash: t.field({"required":false,"type":StringFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
});
export const PasswordResetTokenWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenWhereUniqueInput>, false>('PasswordResetTokenWhereUniqueInput').implement({
  fields: PasswordResetTokenWhereUniqueInputFields,
});

export const PasswordResetTokenOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":PasswordResetTokenCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":PasswordResetTokenAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":PasswordResetTokenMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":PasswordResetTokenMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":PasswordResetTokenSumOrderByAggregateInput}),
});
export const PasswordResetTokenOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenOrderByWithAggregationInput>, false>('PasswordResetTokenOrderByWithAggregationInput').implement({
  fields: PasswordResetTokenOrderByWithAggregationInputFields,
});

export const PasswordResetTokenScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[PasswordResetTokenScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[PasswordResetTokenScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[PasswordResetTokenScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  userId: t.field({"required":false,"type":IntWithAggregatesFilter}),
  tokenHash: t.field({"required":false,"type":StringWithAggregatesFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
});
export const PasswordResetTokenScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenScalarWhereWithAggregatesInput>, false>('PasswordResetTokenScalarWhereWithAggregatesInput').implement({
  fields: PasswordResetTokenScalarWhereWithAggregatesInputFields,
});

export const VerificationTokenWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[VerificationTokenWhereInput]}),
  OR: t.field({"required":false,"type":[VerificationTokenWhereInput]}),
  NOT: t.field({"required":false,"type":[VerificationTokenWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
  tokenHash: t.field({"required":false,"type":StringFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
});
export const VerificationTokenWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenWhereInput>, false>('VerificationTokenWhereInput').implement({
  fields: VerificationTokenWhereInputFields,
});

export const VerificationTokenOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
  user: t.field({"required":false,"type":UserOrderByWithRelationInput}),
});
export const VerificationTokenOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenOrderByWithRelationInput>, false>('VerificationTokenOrderByWithRelationInput').implement({
  fields: VerificationTokenOrderByWithRelationInputFields,
});

export const VerificationTokenWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  AND: t.field({"required":false,"type":[VerificationTokenWhereInput]}),
  OR: t.field({"required":false,"type":[VerificationTokenWhereInput]}),
  NOT: t.field({"required":false,"type":[VerificationTokenWhereInput]}),
  userId: t.field({"required":false,"type":IntFilter}),
  tokenHash: t.field({"required":false,"type":StringFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
});
export const VerificationTokenWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenWhereUniqueInput>, false>('VerificationTokenWhereUniqueInput').implement({
  fields: VerificationTokenWhereUniqueInputFields,
});

export const VerificationTokenOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":VerificationTokenCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":VerificationTokenAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":VerificationTokenMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":VerificationTokenMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":VerificationTokenSumOrderByAggregateInput}),
});
export const VerificationTokenOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenOrderByWithAggregationInput>, false>('VerificationTokenOrderByWithAggregationInput').implement({
  fields: VerificationTokenOrderByWithAggregationInputFields,
});

export const VerificationTokenScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[VerificationTokenScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[VerificationTokenScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[VerificationTokenScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  userId: t.field({"required":false,"type":IntWithAggregatesFilter}),
  tokenHash: t.field({"required":false,"type":StringWithAggregatesFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
});
export const VerificationTokenScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenScalarWhereWithAggregatesInput>, false>('VerificationTokenScalarWhereWithAggregatesInput').implement({
  fields: VerificationTokenScalarWhereWithAggregatesInputFields,
});

export const UserCreateInputFields = (t: any) => ({
  email: t.string({"required":false}),
  name: t.string({"required":false}),
  image: t.string({"required":false}),
  password: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  roles: t.field({"required":false,"type":UserRoleCreateNestedManyWithoutUserInput}),
  accounts: t.field({"required":false,"type":AccountCreateNestedManyWithoutUserInput}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenCreateNestedManyWithoutUserInput}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenCreateNestedManyWithoutUserInput}),
});
export const UserCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateInput>, false>('UserCreateInput').implement({
  fields: UserCreateInputFields,
});

export const UserUpdateInputFields = (t: any) => ({
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  password: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  roles: t.field({"required":false,"type":UserRoleUpdateManyWithoutUserNestedInput}),
  accounts: t.field({"required":false,"type":AccountUpdateManyWithoutUserNestedInput}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenUpdateManyWithoutUserNestedInput}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenUpdateManyWithoutUserNestedInput}),
});
export const UserUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateInput>, false>('UserUpdateInput').implement({
  fields: UserUpdateInputFields,
});

export const UserCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  email: t.string({"required":false}),
  name: t.string({"required":false}),
  image: t.string({"required":false}),
  password: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const UserCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateManyInput>, false>('UserCreateManyInput').implement({
  fields: UserCreateManyInputFields,
});

export const UserUpdateManyMutationInputFields = (t: any) => ({
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  password: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
});
export const UserUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyMutationInput>, false>('UserUpdateManyMutationInput').implement({
  fields: UserUpdateManyMutationInputFields,
});

export const AccountCreateInputFields = (t: any) => ({
  provider: t.string({"required":true}),
  providerAccountId: t.string({"required":true}),
  accessToken: t.string({"required":false}),
  refreshToken: t.string({"required":false}),
  expiresAt: t.field({"required":false,"type":DateTime}),
  user: t.field({"required":true,"type":UserCreateNestedOneWithoutAccountsInput}),
});
export const AccountCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountCreateInput>, false>('AccountCreateInput').implement({
  fields: AccountCreateInputFields,
});

export const AccountUpdateInputFields = (t: any) => ({
  provider: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  providerAccountId: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  accessToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  refreshToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  expiresAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  user: t.field({"required":false,"type":UserUpdateOneRequiredWithoutAccountsNestedInput}),
});
export const AccountUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountUpdateInput>, false>('AccountUpdateInput').implement({
  fields: AccountUpdateInputFields,
});

export const AccountCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  provider: t.string({"required":true}),
  providerAccountId: t.string({"required":true}),
  accessToken: t.string({"required":false}),
  refreshToken: t.string({"required":false}),
  expiresAt: t.field({"required":false,"type":DateTime}),
  userId: t.int({"required":true}),
});
export const AccountCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountCreateManyInput>, false>('AccountCreateManyInput').implement({
  fields: AccountCreateManyInputFields,
});

export const AccountUpdateManyMutationInputFields = (t: any) => ({
  provider: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  providerAccountId: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  accessToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  refreshToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  expiresAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const AccountUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountUpdateManyMutationInput>, false>('AccountUpdateManyMutationInput').implement({
  fields: AccountUpdateManyMutationInputFields,
});

export const RoleCreateInputFields = (t: any) => ({
  name: t.string({"required":true}),
  description: t.string({"required":false}),
  users: t.field({"required":false,"type":UserRoleCreateNestedManyWithoutRoleInput}),
  permissions: t.field({"required":false,"type":RolePermissionCreateNestedManyWithoutRoleInput}),
});
export const RoleCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateInput>, false>('RoleCreateInput').implement({
  fields: RoleCreateInputFields,
});

export const RoleUpdateInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  users: t.field({"required":false,"type":UserRoleUpdateManyWithoutRoleNestedInput}),
  permissions: t.field({"required":false,"type":RolePermissionUpdateManyWithoutRoleNestedInput}),
});
export const RoleUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateInput>, false>('RoleUpdateInput').implement({
  fields: RoleUpdateInputFields,
});

export const RoleCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  name: t.string({"required":true}),
  description: t.string({"required":false}),
});
export const RoleCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateManyInput>, false>('RoleCreateManyInput').implement({
  fields: RoleCreateManyInputFields,
});

export const RoleUpdateManyMutationInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
});
export const RoleUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateManyMutationInput>, false>('RoleUpdateManyMutationInput').implement({
  fields: RoleUpdateManyMutationInputFields,
});

export const PermissionCreateInputFields = (t: any) => ({
  name: t.string({"required":true}),
  description: t.string({"required":false}),
  roles: t.field({"required":false,"type":RolePermissionCreateNestedManyWithoutPermissionInput}),
});
export const PermissionCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionCreateInput>, false>('PermissionCreateInput').implement({
  fields: PermissionCreateInputFields,
});

export const PermissionUpdateInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  roles: t.field({"required":false,"type":RolePermissionUpdateManyWithoutPermissionNestedInput}),
});
export const PermissionUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionUpdateInput>, false>('PermissionUpdateInput').implement({
  fields: PermissionUpdateInputFields,
});

export const PermissionCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  name: t.string({"required":true}),
  description: t.string({"required":false}),
});
export const PermissionCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionCreateManyInput>, false>('PermissionCreateManyInput').implement({
  fields: PermissionCreateManyInputFields,
});

export const PermissionUpdateManyMutationInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
});
export const PermissionUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionUpdateManyMutationInput>, false>('PermissionUpdateManyMutationInput').implement({
  fields: PermissionUpdateManyMutationInputFields,
});

export const UserRoleCreateInputFields = (t: any) => ({
  user: t.field({"required":true,"type":UserCreateNestedOneWithoutRolesInput}),
  role: t.field({"required":true,"type":RoleCreateNestedOneWithoutUsersInput}),
});
export const UserRoleCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateInput>, false>('UserRoleCreateInput').implement({
  fields: UserRoleCreateInputFields,
});

export const UserRoleUpdateInputFields = (t: any) => ({
  user: t.field({"required":false,"type":UserUpdateOneRequiredWithoutRolesNestedInput}),
  role: t.field({"required":false,"type":RoleUpdateOneRequiredWithoutUsersNestedInput}),
});
export const UserRoleUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateInput>, false>('UserRoleUpdateInput').implement({
  fields: UserRoleUpdateInputFields,
});

export const UserRoleCreateManyInputFields = (t: any) => ({
  userId: t.int({"required":true}),
  roleId: t.int({"required":true}),
});
export const UserRoleCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateManyInput>, false>('UserRoleCreateManyInput').implement({
  fields: UserRoleCreateManyInputFields,
});

export const UserRoleUpdateManyMutationInputFields = (t: any) => ({
  _: t.field({ type: NEVER }),
});
export const UserRoleUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateManyMutationInput>, false>('UserRoleUpdateManyMutationInput').implement({
  fields: UserRoleUpdateManyMutationInputFields,
});

export const RolePermissionCreateInputFields = (t: any) => ({
  role: t.field({"required":true,"type":RoleCreateNestedOneWithoutPermissionsInput}),
  permission: t.field({"required":true,"type":PermissionCreateNestedOneWithoutRolesInput}),
});
export const RolePermissionCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateInput>, false>('RolePermissionCreateInput').implement({
  fields: RolePermissionCreateInputFields,
});

export const RolePermissionUpdateInputFields = (t: any) => ({
  role: t.field({"required":false,"type":RoleUpdateOneRequiredWithoutPermissionsNestedInput}),
  permission: t.field({"required":false,"type":PermissionUpdateOneRequiredWithoutRolesNestedInput}),
});
export const RolePermissionUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateInput>, false>('RolePermissionUpdateInput').implement({
  fields: RolePermissionUpdateInputFields,
});

export const RolePermissionCreateManyInputFields = (t: any) => ({
  roleId: t.int({"required":true}),
  permissionId: t.int({"required":true}),
});
export const RolePermissionCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateManyInput>, false>('RolePermissionCreateManyInput').implement({
  fields: RolePermissionCreateManyInputFields,
});

export const RolePermissionUpdateManyMutationInputFields = (t: any) => ({
  _: t.field({ type: NEVER }),
});
export const RolePermissionUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateManyMutationInput>, false>('RolePermissionUpdateManyMutationInput').implement({
  fields: RolePermissionUpdateManyMutationInputFields,
});

export const PasswordResetTokenCreateInputFields = (t: any) => ({
  tokenHash: t.string({"required":true}),
  expiresAt: t.field({"required":true,"type":DateTime}),
  user: t.field({"required":true,"type":UserCreateNestedOneWithoutPasswordResetTokenInput}),
});
export const PasswordResetTokenCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenCreateInput>, false>('PasswordResetTokenCreateInput').implement({
  fields: PasswordResetTokenCreateInputFields,
});

export const PasswordResetTokenUpdateInputFields = (t: any) => ({
  tokenHash: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  expiresAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  user: t.field({"required":false,"type":UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput}),
});
export const PasswordResetTokenUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenUpdateInput>, false>('PasswordResetTokenUpdateInput').implement({
  fields: PasswordResetTokenUpdateInputFields,
});

export const PasswordResetTokenCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  userId: t.int({"required":true}),
  tokenHash: t.string({"required":true}),
  expiresAt: t.field({"required":true,"type":DateTime}),
});
export const PasswordResetTokenCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenCreateManyInput>, false>('PasswordResetTokenCreateManyInput').implement({
  fields: PasswordResetTokenCreateManyInputFields,
});

export const PasswordResetTokenUpdateManyMutationInputFields = (t: any) => ({
  tokenHash: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  expiresAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
});
export const PasswordResetTokenUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenUpdateManyMutationInput>, false>('PasswordResetTokenUpdateManyMutationInput').implement({
  fields: PasswordResetTokenUpdateManyMutationInputFields,
});

export const VerificationTokenCreateInputFields = (t: any) => ({
  tokenHash: t.string({"required":true}),
  expiresAt: t.field({"required":true,"type":DateTime}),
  user: t.field({"required":true,"type":UserCreateNestedOneWithoutVerificationTokenInput}),
});
export const VerificationTokenCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenCreateInput>, false>('VerificationTokenCreateInput').implement({
  fields: VerificationTokenCreateInputFields,
});

export const VerificationTokenUpdateInputFields = (t: any) => ({
  tokenHash: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  expiresAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  user: t.field({"required":false,"type":UserUpdateOneRequiredWithoutVerificationTokenNestedInput}),
});
export const VerificationTokenUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenUpdateInput>, false>('VerificationTokenUpdateInput').implement({
  fields: VerificationTokenUpdateInputFields,
});

export const VerificationTokenCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  userId: t.int({"required":true}),
  tokenHash: t.string({"required":true}),
  expiresAt: t.field({"required":true,"type":DateTime}),
});
export const VerificationTokenCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenCreateManyInput>, false>('VerificationTokenCreateManyInput').implement({
  fields: VerificationTokenCreateManyInputFields,
});

export const VerificationTokenUpdateManyMutationInputFields = (t: any) => ({
  tokenHash: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  expiresAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
});
export const VerificationTokenUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenUpdateManyMutationInput>, false>('VerificationTokenUpdateManyMutationInput').implement({
  fields: VerificationTokenUpdateManyMutationInputFields,
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

export const UserRoleListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":UserRoleWhereInput}),
  some: t.field({"required":false,"type":UserRoleWhereInput}),
  none: t.field({"required":false,"type":UserRoleWhereInput}),
});
export const UserRoleListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleListRelationFilter>, false>('UserRoleListRelationFilter').implement({
  fields: UserRoleListRelationFilterFields,
});

export const AccountListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":AccountWhereInput}),
  some: t.field({"required":false,"type":AccountWhereInput}),
  none: t.field({"required":false,"type":AccountWhereInput}),
});
export const AccountListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountListRelationFilter>, false>('AccountListRelationFilter').implement({
  fields: AccountListRelationFilterFields,
});

export const PasswordResetTokenListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":PasswordResetTokenWhereInput}),
  some: t.field({"required":false,"type":PasswordResetTokenWhereInput}),
  none: t.field({"required":false,"type":PasswordResetTokenWhereInput}),
});
export const PasswordResetTokenListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenListRelationFilter>, false>('PasswordResetTokenListRelationFilter').implement({
  fields: PasswordResetTokenListRelationFilterFields,
});

export const VerificationTokenListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":VerificationTokenWhereInput}),
  some: t.field({"required":false,"type":VerificationTokenWhereInput}),
  none: t.field({"required":false,"type":VerificationTokenWhereInput}),
});
export const VerificationTokenListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenListRelationFilter>, false>('VerificationTokenListRelationFilter').implement({
  fields: VerificationTokenListRelationFilterFields,
});

export const UserRoleOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const UserRoleOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleOrderByRelationAggregateInput>, false>('UserRoleOrderByRelationAggregateInput').implement({
  fields: UserRoleOrderByRelationAggregateInputFields,
});

export const AccountOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const AccountOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountOrderByRelationAggregateInput>, false>('AccountOrderByRelationAggregateInput').implement({
  fields: AccountOrderByRelationAggregateInputFields,
});

export const PasswordResetTokenOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const PasswordResetTokenOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenOrderByRelationAggregateInput>, false>('PasswordResetTokenOrderByRelationAggregateInput').implement({
  fields: PasswordResetTokenOrderByRelationAggregateInputFields,
});

export const VerificationTokenOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const VerificationTokenOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenOrderByRelationAggregateInput>, false>('VerificationTokenOrderByRelationAggregateInput').implement({
  fields: VerificationTokenOrderByRelationAggregateInputFields,
});

export const UserCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
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
  email: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
});
export const UserMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserMaxOrderByAggregateInput>, false>('UserMaxOrderByAggregateInput').implement({
  fields: UserMaxOrderByAggregateInputFields,
});

export const UserMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  password: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
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

export const DateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const DateTimeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableFilter>, false>('DateTimeNullableFilter').implement({
  fields: DateTimeNullableFilterFields,
});

export const UserScalarRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":UserWhereInput}),
  isNot: t.field({"required":false,"type":UserWhereInput}),
});
export const UserScalarRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserScalarRelationFilter>, false>('UserScalarRelationFilter').implement({
  fields: UserScalarRelationFilterFields,
});

export const AccountProviderProviderAccountIdCompoundUniqueInputFields = (t: any) => ({
  provider: t.string({"required":true}),
  providerAccountId: t.string({"required":true}),
});
export const AccountProviderProviderAccountIdCompoundUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput>, false>('AccountProviderProviderAccountIdCompoundUniqueInput').implement({
  fields: AccountProviderProviderAccountIdCompoundUniqueInputFields,
});

export const AccountCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  provider: t.field({"required":false,"type":SortOrder}),
  providerAccountId: t.field({"required":false,"type":SortOrder}),
  accessToken: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const AccountCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountCountOrderByAggregateInput>, false>('AccountCountOrderByAggregateInput').implement({
  fields: AccountCountOrderByAggregateInputFields,
});

export const AccountAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const AccountAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountAvgOrderByAggregateInput>, false>('AccountAvgOrderByAggregateInput').implement({
  fields: AccountAvgOrderByAggregateInputFields,
});

export const AccountMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  provider: t.field({"required":false,"type":SortOrder}),
  providerAccountId: t.field({"required":false,"type":SortOrder}),
  accessToken: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const AccountMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountMaxOrderByAggregateInput>, false>('AccountMaxOrderByAggregateInput').implement({
  fields: AccountMaxOrderByAggregateInputFields,
});

export const AccountMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  provider: t.field({"required":false,"type":SortOrder}),
  providerAccountId: t.field({"required":false,"type":SortOrder}),
  accessToken: t.field({"required":false,"type":SortOrder}),
  refreshToken: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const AccountMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountMinOrderByAggregateInput>, false>('AccountMinOrderByAggregateInput').implement({
  fields: AccountMinOrderByAggregateInputFields,
});

export const AccountSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const AccountSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountSumOrderByAggregateInput>, false>('AccountSumOrderByAggregateInput').implement({
  fields: AccountSumOrderByAggregateInputFields,
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

export const DateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const DateTimeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableWithAggregatesFilter>, false>('DateTimeNullableWithAggregatesFilter').implement({
  fields: DateTimeNullableWithAggregatesFilterFields,
});

export const RolePermissionListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":RolePermissionWhereInput}),
  some: t.field({"required":false,"type":RolePermissionWhereInput}),
  none: t.field({"required":false,"type":RolePermissionWhereInput}),
});
export const RolePermissionListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionListRelationFilter>, false>('RolePermissionListRelationFilter').implement({
  fields: RolePermissionListRelationFilterFields,
});

export const RolePermissionOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const RolePermissionOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionOrderByRelationAggregateInput>, false>('RolePermissionOrderByRelationAggregateInput').implement({
  fields: RolePermissionOrderByRelationAggregateInputFields,
});

export const RoleCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
});
export const RoleCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCountOrderByAggregateInput>, false>('RoleCountOrderByAggregateInput').implement({
  fields: RoleCountOrderByAggregateInputFields,
});

export const RoleAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const RoleAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleAvgOrderByAggregateInput>, false>('RoleAvgOrderByAggregateInput').implement({
  fields: RoleAvgOrderByAggregateInputFields,
});

export const RoleMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
});
export const RoleMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleMaxOrderByAggregateInput>, false>('RoleMaxOrderByAggregateInput').implement({
  fields: RoleMaxOrderByAggregateInputFields,
});

export const RoleMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
});
export const RoleMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleMinOrderByAggregateInput>, false>('RoleMinOrderByAggregateInput').implement({
  fields: RoleMinOrderByAggregateInputFields,
});

export const RoleSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const RoleSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleSumOrderByAggregateInput>, false>('RoleSumOrderByAggregateInput').implement({
  fields: RoleSumOrderByAggregateInputFields,
});

export const PermissionCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
});
export const PermissionCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionCountOrderByAggregateInput>, false>('PermissionCountOrderByAggregateInput').implement({
  fields: PermissionCountOrderByAggregateInputFields,
});

export const PermissionAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const PermissionAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionAvgOrderByAggregateInput>, false>('PermissionAvgOrderByAggregateInput').implement({
  fields: PermissionAvgOrderByAggregateInputFields,
});

export const PermissionMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
});
export const PermissionMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionMaxOrderByAggregateInput>, false>('PermissionMaxOrderByAggregateInput').implement({
  fields: PermissionMaxOrderByAggregateInputFields,
});

export const PermissionMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
});
export const PermissionMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionMinOrderByAggregateInput>, false>('PermissionMinOrderByAggregateInput').implement({
  fields: PermissionMinOrderByAggregateInputFields,
});

export const PermissionSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const PermissionSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionSumOrderByAggregateInput>, false>('PermissionSumOrderByAggregateInput').implement({
  fields: PermissionSumOrderByAggregateInputFields,
});

export const RoleScalarRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":RoleWhereInput}),
  isNot: t.field({"required":false,"type":RoleWhereInput}),
});
export const RoleScalarRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleScalarRelationFilter>, false>('RoleScalarRelationFilter').implement({
  fields: RoleScalarRelationFilterFields,
});

export const UserRoleUserIdRoleIdCompoundUniqueInputFields = (t: any) => ({
  userId: t.int({"required":true}),
  roleId: t.int({"required":true}),
});
export const UserRoleUserIdRoleIdCompoundUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUserIdRoleIdCompoundUniqueInput>, false>('UserRoleUserIdRoleIdCompoundUniqueInput').implement({
  fields: UserRoleUserIdRoleIdCompoundUniqueInputFields,
});

export const UserRoleCountOrderByAggregateInputFields = (t: any) => ({
  userId: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserRoleCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCountOrderByAggregateInput>, false>('UserRoleCountOrderByAggregateInput').implement({
  fields: UserRoleCountOrderByAggregateInputFields,
});

export const UserRoleAvgOrderByAggregateInputFields = (t: any) => ({
  userId: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserRoleAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleAvgOrderByAggregateInput>, false>('UserRoleAvgOrderByAggregateInput').implement({
  fields: UserRoleAvgOrderByAggregateInputFields,
});

export const UserRoleMaxOrderByAggregateInputFields = (t: any) => ({
  userId: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserRoleMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleMaxOrderByAggregateInput>, false>('UserRoleMaxOrderByAggregateInput').implement({
  fields: UserRoleMaxOrderByAggregateInputFields,
});

export const UserRoleMinOrderByAggregateInputFields = (t: any) => ({
  userId: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserRoleMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleMinOrderByAggregateInput>, false>('UserRoleMinOrderByAggregateInput').implement({
  fields: UserRoleMinOrderByAggregateInputFields,
});

export const UserRoleSumOrderByAggregateInputFields = (t: any) => ({
  userId: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserRoleSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleSumOrderByAggregateInput>, false>('UserRoleSumOrderByAggregateInput').implement({
  fields: UserRoleSumOrderByAggregateInputFields,
});

export const PermissionScalarRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":PermissionWhereInput}),
  isNot: t.field({"required":false,"type":PermissionWhereInput}),
});
export const PermissionScalarRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionScalarRelationFilter>, false>('PermissionScalarRelationFilter').implement({
  fields: PermissionScalarRelationFilterFields,
});

export const RolePermissionRoleIdPermissionIdCompoundUniqueInputFields = (t: any) => ({
  roleId: t.int({"required":true}),
  permissionId: t.int({"required":true}),
});
export const RolePermissionRoleIdPermissionIdCompoundUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionRoleIdPermissionIdCompoundUniqueInput>, false>('RolePermissionRoleIdPermissionIdCompoundUniqueInput').implement({
  fields: RolePermissionRoleIdPermissionIdCompoundUniqueInputFields,
});

export const RolePermissionCountOrderByAggregateInputFields = (t: any) => ({
  roleId: t.field({"required":false,"type":SortOrder}),
  permissionId: t.field({"required":false,"type":SortOrder}),
});
export const RolePermissionCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCountOrderByAggregateInput>, false>('RolePermissionCountOrderByAggregateInput').implement({
  fields: RolePermissionCountOrderByAggregateInputFields,
});

export const RolePermissionAvgOrderByAggregateInputFields = (t: any) => ({
  roleId: t.field({"required":false,"type":SortOrder}),
  permissionId: t.field({"required":false,"type":SortOrder}),
});
export const RolePermissionAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionAvgOrderByAggregateInput>, false>('RolePermissionAvgOrderByAggregateInput').implement({
  fields: RolePermissionAvgOrderByAggregateInputFields,
});

export const RolePermissionMaxOrderByAggregateInputFields = (t: any) => ({
  roleId: t.field({"required":false,"type":SortOrder}),
  permissionId: t.field({"required":false,"type":SortOrder}),
});
export const RolePermissionMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionMaxOrderByAggregateInput>, false>('RolePermissionMaxOrderByAggregateInput').implement({
  fields: RolePermissionMaxOrderByAggregateInputFields,
});

export const RolePermissionMinOrderByAggregateInputFields = (t: any) => ({
  roleId: t.field({"required":false,"type":SortOrder}),
  permissionId: t.field({"required":false,"type":SortOrder}),
});
export const RolePermissionMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionMinOrderByAggregateInput>, false>('RolePermissionMinOrderByAggregateInput').implement({
  fields: RolePermissionMinOrderByAggregateInputFields,
});

export const RolePermissionSumOrderByAggregateInputFields = (t: any) => ({
  roleId: t.field({"required":false,"type":SortOrder}),
  permissionId: t.field({"required":false,"type":SortOrder}),
});
export const RolePermissionSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionSumOrderByAggregateInput>, false>('RolePermissionSumOrderByAggregateInput').implement({
  fields: RolePermissionSumOrderByAggregateInputFields,
});

export const PasswordResetTokenCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
});
export const PasswordResetTokenCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenCountOrderByAggregateInput>, false>('PasswordResetTokenCountOrderByAggregateInput').implement({
  fields: PasswordResetTokenCountOrderByAggregateInputFields,
});

export const PasswordResetTokenAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const PasswordResetTokenAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenAvgOrderByAggregateInput>, false>('PasswordResetTokenAvgOrderByAggregateInput').implement({
  fields: PasswordResetTokenAvgOrderByAggregateInputFields,
});

export const PasswordResetTokenMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
});
export const PasswordResetTokenMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenMaxOrderByAggregateInput>, false>('PasswordResetTokenMaxOrderByAggregateInput').implement({
  fields: PasswordResetTokenMaxOrderByAggregateInputFields,
});

export const PasswordResetTokenMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
});
export const PasswordResetTokenMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenMinOrderByAggregateInput>, false>('PasswordResetTokenMinOrderByAggregateInput').implement({
  fields: PasswordResetTokenMinOrderByAggregateInputFields,
});

export const PasswordResetTokenSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const PasswordResetTokenSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenSumOrderByAggregateInput>, false>('PasswordResetTokenSumOrderByAggregateInput').implement({
  fields: PasswordResetTokenSumOrderByAggregateInputFields,
});

export const VerificationTokenCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
});
export const VerificationTokenCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenCountOrderByAggregateInput>, false>('VerificationTokenCountOrderByAggregateInput').implement({
  fields: VerificationTokenCountOrderByAggregateInputFields,
});

export const VerificationTokenAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const VerificationTokenAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenAvgOrderByAggregateInput>, false>('VerificationTokenAvgOrderByAggregateInput').implement({
  fields: VerificationTokenAvgOrderByAggregateInputFields,
});

export const VerificationTokenMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
});
export const VerificationTokenMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenMaxOrderByAggregateInput>, false>('VerificationTokenMaxOrderByAggregateInput').implement({
  fields: VerificationTokenMaxOrderByAggregateInputFields,
});

export const VerificationTokenMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  tokenHash: t.field({"required":false,"type":SortOrder}),
  expiresAt: t.field({"required":false,"type":SortOrder}),
});
export const VerificationTokenMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenMinOrderByAggregateInput>, false>('VerificationTokenMinOrderByAggregateInput').implement({
  fields: VerificationTokenMinOrderByAggregateInputFields,
});

export const VerificationTokenSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const VerificationTokenSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenSumOrderByAggregateInput>, false>('VerificationTokenSumOrderByAggregateInput').implement({
  fields: VerificationTokenSumOrderByAggregateInputFields,
});

export const UserRoleCreateNestedManyWithoutUserInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[UserRoleCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[UserRoleCreateOrConnectWithoutUserInput]}),
  createMany: t.field({"required":false,"type":UserRoleCreateManyUserInputEnvelope}),
  connect: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
});
export const UserRoleCreateNestedManyWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateNestedManyWithoutUserInput>, false>('UserRoleCreateNestedManyWithoutUserInput').implement({
  fields: UserRoleCreateNestedManyWithoutUserInputFields,
});

export const AccountCreateNestedManyWithoutUserInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[AccountCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[AccountCreateOrConnectWithoutUserInput]}),
  createMany: t.field({"required":false,"type":AccountCreateManyUserInputEnvelope}),
  connect: t.field({"required":false,"type":[AccountWhereUniqueInput]}),
});
export const AccountCreateNestedManyWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountCreateNestedManyWithoutUserInput>, false>('AccountCreateNestedManyWithoutUserInput').implement({
  fields: AccountCreateNestedManyWithoutUserInputFields,
});

export const PasswordResetTokenCreateNestedManyWithoutUserInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[PasswordResetTokenCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[PasswordResetTokenCreateOrConnectWithoutUserInput]}),
  createMany: t.field({"required":false,"type":PasswordResetTokenCreateManyUserInputEnvelope}),
  connect: t.field({"required":false,"type":[PasswordResetTokenWhereUniqueInput]}),
});
export const PasswordResetTokenCreateNestedManyWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenCreateNestedManyWithoutUserInput>, false>('PasswordResetTokenCreateNestedManyWithoutUserInput').implement({
  fields: PasswordResetTokenCreateNestedManyWithoutUserInputFields,
});

export const VerificationTokenCreateNestedManyWithoutUserInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[VerificationTokenCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[VerificationTokenCreateOrConnectWithoutUserInput]}),
  createMany: t.field({"required":false,"type":VerificationTokenCreateManyUserInputEnvelope}),
  connect: t.field({"required":false,"type":[VerificationTokenWhereUniqueInput]}),
});
export const VerificationTokenCreateNestedManyWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenCreateNestedManyWithoutUserInput>, false>('VerificationTokenCreateNestedManyWithoutUserInput').implement({
  fields: VerificationTokenCreateNestedManyWithoutUserInputFields,
});

export const NullableStringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const NullableStringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableStringFieldUpdateOperationsInput>, false>('NullableStringFieldUpdateOperationsInput').implement({
  fields: NullableStringFieldUpdateOperationsInputFields,
});

export const DateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":DateTime}),
});
export const DateTimeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFieldUpdateOperationsInput>, false>('DateTimeFieldUpdateOperationsInput').implement({
  fields: DateTimeFieldUpdateOperationsInputFields,
});

export const UserRoleUpdateManyWithoutUserNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[UserRoleCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[UserRoleCreateOrConnectWithoutUserInput]}),
  upsert: t.field({"required":false,"type":[UserRoleUpsertWithWhereUniqueWithoutUserInput]}),
  createMany: t.field({"required":false,"type":UserRoleCreateManyUserInputEnvelope}),
  set: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
  update: t.field({"required":false,"type":[UserRoleUpdateWithWhereUniqueWithoutUserInput]}),
  updateMany: t.field({"required":false,"type":[UserRoleUpdateManyWithWhereWithoutUserInput]}),
  deleteMany: t.field({"required":false,"type":[UserRoleScalarWhereInput]}),
});
export const UserRoleUpdateManyWithoutUserNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateManyWithoutUserNestedInput>, false>('UserRoleUpdateManyWithoutUserNestedInput').implement({
  fields: UserRoleUpdateManyWithoutUserNestedInputFields,
});

export const AccountUpdateManyWithoutUserNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[AccountCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[AccountCreateOrConnectWithoutUserInput]}),
  upsert: t.field({"required":false,"type":[AccountUpsertWithWhereUniqueWithoutUserInput]}),
  createMany: t.field({"required":false,"type":AccountCreateManyUserInputEnvelope}),
  set: t.field({"required":false,"type":[AccountWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[AccountWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[AccountWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[AccountWhereUniqueInput]}),
  update: t.field({"required":false,"type":[AccountUpdateWithWhereUniqueWithoutUserInput]}),
  updateMany: t.field({"required":false,"type":[AccountUpdateManyWithWhereWithoutUserInput]}),
  deleteMany: t.field({"required":false,"type":[AccountScalarWhereInput]}),
});
export const AccountUpdateManyWithoutUserNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountUpdateManyWithoutUserNestedInput>, false>('AccountUpdateManyWithoutUserNestedInput').implement({
  fields: AccountUpdateManyWithoutUserNestedInputFields,
});

export const PasswordResetTokenUpdateManyWithoutUserNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[PasswordResetTokenCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[PasswordResetTokenCreateOrConnectWithoutUserInput]}),
  upsert: t.field({"required":false,"type":[PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput]}),
  createMany: t.field({"required":false,"type":PasswordResetTokenCreateManyUserInputEnvelope}),
  set: t.field({"required":false,"type":[PasswordResetTokenWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[PasswordResetTokenWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[PasswordResetTokenWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[PasswordResetTokenWhereUniqueInput]}),
  update: t.field({"required":false,"type":[PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput]}),
  updateMany: t.field({"required":false,"type":[PasswordResetTokenUpdateManyWithWhereWithoutUserInput]}),
  deleteMany: t.field({"required":false,"type":[PasswordResetTokenScalarWhereInput]}),
});
export const PasswordResetTokenUpdateManyWithoutUserNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenUpdateManyWithoutUserNestedInput>, false>('PasswordResetTokenUpdateManyWithoutUserNestedInput').implement({
  fields: PasswordResetTokenUpdateManyWithoutUserNestedInputFields,
});

export const VerificationTokenUpdateManyWithoutUserNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[VerificationTokenCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[VerificationTokenCreateOrConnectWithoutUserInput]}),
  upsert: t.field({"required":false,"type":[VerificationTokenUpsertWithWhereUniqueWithoutUserInput]}),
  createMany: t.field({"required":false,"type":VerificationTokenCreateManyUserInputEnvelope}),
  set: t.field({"required":false,"type":[VerificationTokenWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[VerificationTokenWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[VerificationTokenWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[VerificationTokenWhereUniqueInput]}),
  update: t.field({"required":false,"type":[VerificationTokenUpdateWithWhereUniqueWithoutUserInput]}),
  updateMany: t.field({"required":false,"type":[VerificationTokenUpdateManyWithWhereWithoutUserInput]}),
  deleteMany: t.field({"required":false,"type":[VerificationTokenScalarWhereInput]}),
});
export const VerificationTokenUpdateManyWithoutUserNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenUpdateManyWithoutUserNestedInput>, false>('VerificationTokenUpdateManyWithoutUserNestedInput').implement({
  fields: VerificationTokenUpdateManyWithoutUserNestedInputFields,
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

export const UserCreateNestedOneWithoutAccountsInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutAccountsInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutAccountsInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
});
export const UserCreateNestedOneWithoutAccountsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutAccountsInput>, false>('UserCreateNestedOneWithoutAccountsInput').implement({
  fields: UserCreateNestedOneWithoutAccountsInputFields,
});

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const StringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>, false>('StringFieldUpdateOperationsInput').implement({
  fields: StringFieldUpdateOperationsInputFields,
});

export const NullableDateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":DateTime}),
});
export const NullableDateTimeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableDateTimeFieldUpdateOperationsInput>, false>('NullableDateTimeFieldUpdateOperationsInput').implement({
  fields: NullableDateTimeFieldUpdateOperationsInputFields,
});

export const UserUpdateOneRequiredWithoutAccountsNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutAccountsInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutAccountsInput}),
  upsert: t.field({"required":false,"type":UserUpsertWithoutAccountsInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  update: t.field({"required":false,"type":UserUpdateToOneWithWhereWithoutAccountsInput}),
});
export const UserUpdateOneRequiredWithoutAccountsNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput>, false>('UserUpdateOneRequiredWithoutAccountsNestedInput').implement({
  fields: UserUpdateOneRequiredWithoutAccountsNestedInputFields,
});

export const UserRoleCreateNestedManyWithoutRoleInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[UserRoleCreateWithoutRoleInput]}),
  connectOrCreate: t.field({"required":false,"type":[UserRoleCreateOrConnectWithoutRoleInput]}),
  createMany: t.field({"required":false,"type":UserRoleCreateManyRoleInputEnvelope}),
  connect: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
});
export const UserRoleCreateNestedManyWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateNestedManyWithoutRoleInput>, false>('UserRoleCreateNestedManyWithoutRoleInput').implement({
  fields: UserRoleCreateNestedManyWithoutRoleInputFields,
});

export const RolePermissionCreateNestedManyWithoutRoleInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[RolePermissionCreateWithoutRoleInput]}),
  connectOrCreate: t.field({"required":false,"type":[RolePermissionCreateOrConnectWithoutRoleInput]}),
  createMany: t.field({"required":false,"type":RolePermissionCreateManyRoleInputEnvelope}),
  connect: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
});
export const RolePermissionCreateNestedManyWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateNestedManyWithoutRoleInput>, false>('RolePermissionCreateNestedManyWithoutRoleInput').implement({
  fields: RolePermissionCreateNestedManyWithoutRoleInputFields,
});

export const UserRoleUpdateManyWithoutRoleNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[UserRoleCreateWithoutRoleInput]}),
  connectOrCreate: t.field({"required":false,"type":[UserRoleCreateOrConnectWithoutRoleInput]}),
  upsert: t.field({"required":false,"type":[UserRoleUpsertWithWhereUniqueWithoutRoleInput]}),
  createMany: t.field({"required":false,"type":UserRoleCreateManyRoleInputEnvelope}),
  set: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[UserRoleWhereUniqueInput]}),
  update: t.field({"required":false,"type":[UserRoleUpdateWithWhereUniqueWithoutRoleInput]}),
  updateMany: t.field({"required":false,"type":[UserRoleUpdateManyWithWhereWithoutRoleInput]}),
  deleteMany: t.field({"required":false,"type":[UserRoleScalarWhereInput]}),
});
export const UserRoleUpdateManyWithoutRoleNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateManyWithoutRoleNestedInput>, false>('UserRoleUpdateManyWithoutRoleNestedInput').implement({
  fields: UserRoleUpdateManyWithoutRoleNestedInputFields,
});

export const RolePermissionUpdateManyWithoutRoleNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[RolePermissionCreateWithoutRoleInput]}),
  connectOrCreate: t.field({"required":false,"type":[RolePermissionCreateOrConnectWithoutRoleInput]}),
  upsert: t.field({"required":false,"type":[RolePermissionUpsertWithWhereUniqueWithoutRoleInput]}),
  createMany: t.field({"required":false,"type":RolePermissionCreateManyRoleInputEnvelope}),
  set: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
  update: t.field({"required":false,"type":[RolePermissionUpdateWithWhereUniqueWithoutRoleInput]}),
  updateMany: t.field({"required":false,"type":[RolePermissionUpdateManyWithWhereWithoutRoleInput]}),
  deleteMany: t.field({"required":false,"type":[RolePermissionScalarWhereInput]}),
});
export const RolePermissionUpdateManyWithoutRoleNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateManyWithoutRoleNestedInput>, false>('RolePermissionUpdateManyWithoutRoleNestedInput').implement({
  fields: RolePermissionUpdateManyWithoutRoleNestedInputFields,
});

export const RolePermissionCreateNestedManyWithoutPermissionInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[RolePermissionCreateWithoutPermissionInput]}),
  connectOrCreate: t.field({"required":false,"type":[RolePermissionCreateOrConnectWithoutPermissionInput]}),
  createMany: t.field({"required":false,"type":RolePermissionCreateManyPermissionInputEnvelope}),
  connect: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
});
export const RolePermissionCreateNestedManyWithoutPermissionInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateNestedManyWithoutPermissionInput>, false>('RolePermissionCreateNestedManyWithoutPermissionInput').implement({
  fields: RolePermissionCreateNestedManyWithoutPermissionInputFields,
});

export const RolePermissionUpdateManyWithoutPermissionNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[RolePermissionCreateWithoutPermissionInput]}),
  connectOrCreate: t.field({"required":false,"type":[RolePermissionCreateOrConnectWithoutPermissionInput]}),
  upsert: t.field({"required":false,"type":[RolePermissionUpsertWithWhereUniqueWithoutPermissionInput]}),
  createMany: t.field({"required":false,"type":RolePermissionCreateManyPermissionInputEnvelope}),
  set: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[RolePermissionWhereUniqueInput]}),
  update: t.field({"required":false,"type":[RolePermissionUpdateWithWhereUniqueWithoutPermissionInput]}),
  updateMany: t.field({"required":false,"type":[RolePermissionUpdateManyWithWhereWithoutPermissionInput]}),
  deleteMany: t.field({"required":false,"type":[RolePermissionScalarWhereInput]}),
});
export const RolePermissionUpdateManyWithoutPermissionNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateManyWithoutPermissionNestedInput>, false>('RolePermissionUpdateManyWithoutPermissionNestedInput').implement({
  fields: RolePermissionUpdateManyWithoutPermissionNestedInputFields,
});

export const UserCreateNestedOneWithoutRolesInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutRolesInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutRolesInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
});
export const UserCreateNestedOneWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutRolesInput>, false>('UserCreateNestedOneWithoutRolesInput').implement({
  fields: UserCreateNestedOneWithoutRolesInputFields,
});

export const RoleCreateNestedOneWithoutUsersInputFields = (t: any) => ({
  create: t.field({"required":false,"type":RoleCreateWithoutUsersInput}),
  connectOrCreate: t.field({"required":false,"type":RoleCreateOrConnectWithoutUsersInput}),
  connect: t.field({"required":false,"type":RoleWhereUniqueInput}),
});
export const RoleCreateNestedOneWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateNestedOneWithoutUsersInput>, false>('RoleCreateNestedOneWithoutUsersInput').implement({
  fields: RoleCreateNestedOneWithoutUsersInputFields,
});

export const UserUpdateOneRequiredWithoutRolesNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutRolesInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutRolesInput}),
  upsert: t.field({"required":false,"type":UserUpsertWithoutRolesInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  update: t.field({"required":false,"type":UserUpdateToOneWithWhereWithoutRolesInput}),
});
export const UserUpdateOneRequiredWithoutRolesNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutRolesNestedInput>, false>('UserUpdateOneRequiredWithoutRolesNestedInput').implement({
  fields: UserUpdateOneRequiredWithoutRolesNestedInputFields,
});

export const RoleUpdateOneRequiredWithoutUsersNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":RoleCreateWithoutUsersInput}),
  connectOrCreate: t.field({"required":false,"type":RoleCreateOrConnectWithoutUsersInput}),
  upsert: t.field({"required":false,"type":RoleUpsertWithoutUsersInput}),
  connect: t.field({"required":false,"type":RoleWhereUniqueInput}),
  update: t.field({"required":false,"type":RoleUpdateToOneWithWhereWithoutUsersInput}),
});
export const RoleUpdateOneRequiredWithoutUsersNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateOneRequiredWithoutUsersNestedInput>, false>('RoleUpdateOneRequiredWithoutUsersNestedInput').implement({
  fields: RoleUpdateOneRequiredWithoutUsersNestedInputFields,
});

export const RoleCreateNestedOneWithoutPermissionsInputFields = (t: any) => ({
  create: t.field({"required":false,"type":RoleCreateWithoutPermissionsInput}),
  connectOrCreate: t.field({"required":false,"type":RoleCreateOrConnectWithoutPermissionsInput}),
  connect: t.field({"required":false,"type":RoleWhereUniqueInput}),
});
export const RoleCreateNestedOneWithoutPermissionsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateNestedOneWithoutPermissionsInput>, false>('RoleCreateNestedOneWithoutPermissionsInput').implement({
  fields: RoleCreateNestedOneWithoutPermissionsInputFields,
});

export const PermissionCreateNestedOneWithoutRolesInputFields = (t: any) => ({
  create: t.field({"required":false,"type":PermissionCreateWithoutRolesInput}),
  connectOrCreate: t.field({"required":false,"type":PermissionCreateOrConnectWithoutRolesInput}),
  connect: t.field({"required":false,"type":PermissionWhereUniqueInput}),
});
export const PermissionCreateNestedOneWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionCreateNestedOneWithoutRolesInput>, false>('PermissionCreateNestedOneWithoutRolesInput').implement({
  fields: PermissionCreateNestedOneWithoutRolesInputFields,
});

export const RoleUpdateOneRequiredWithoutPermissionsNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":RoleCreateWithoutPermissionsInput}),
  connectOrCreate: t.field({"required":false,"type":RoleCreateOrConnectWithoutPermissionsInput}),
  upsert: t.field({"required":false,"type":RoleUpsertWithoutPermissionsInput}),
  connect: t.field({"required":false,"type":RoleWhereUniqueInput}),
  update: t.field({"required":false,"type":RoleUpdateToOneWithWhereWithoutPermissionsInput}),
});
export const RoleUpdateOneRequiredWithoutPermissionsNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateOneRequiredWithoutPermissionsNestedInput>, false>('RoleUpdateOneRequiredWithoutPermissionsNestedInput').implement({
  fields: RoleUpdateOneRequiredWithoutPermissionsNestedInputFields,
});

export const PermissionUpdateOneRequiredWithoutRolesNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":PermissionCreateWithoutRolesInput}),
  connectOrCreate: t.field({"required":false,"type":PermissionCreateOrConnectWithoutRolesInput}),
  upsert: t.field({"required":false,"type":PermissionUpsertWithoutRolesInput}),
  connect: t.field({"required":false,"type":PermissionWhereUniqueInput}),
  update: t.field({"required":false,"type":PermissionUpdateToOneWithWhereWithoutRolesInput}),
});
export const PermissionUpdateOneRequiredWithoutRolesNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionUpdateOneRequiredWithoutRolesNestedInput>, false>('PermissionUpdateOneRequiredWithoutRolesNestedInput').implement({
  fields: PermissionUpdateOneRequiredWithoutRolesNestedInputFields,
});

export const UserCreateNestedOneWithoutPasswordResetTokenInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutPasswordResetTokenInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutPasswordResetTokenInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
});
export const UserCreateNestedOneWithoutPasswordResetTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutPasswordResetTokenInput>, false>('UserCreateNestedOneWithoutPasswordResetTokenInput').implement({
  fields: UserCreateNestedOneWithoutPasswordResetTokenInputFields,
});

export const UserUpdateOneRequiredWithoutPasswordResetTokenNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutPasswordResetTokenInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutPasswordResetTokenInput}),
  upsert: t.field({"required":false,"type":UserUpsertWithoutPasswordResetTokenInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  update: t.field({"required":false,"type":UserUpdateToOneWithWhereWithoutPasswordResetTokenInput}),
});
export const UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput>, false>('UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput').implement({
  fields: UserUpdateOneRequiredWithoutPasswordResetTokenNestedInputFields,
});

export const UserCreateNestedOneWithoutVerificationTokenInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutVerificationTokenInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutVerificationTokenInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
});
export const UserCreateNestedOneWithoutVerificationTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutVerificationTokenInput>, false>('UserCreateNestedOneWithoutVerificationTokenInput').implement({
  fields: UserCreateNestedOneWithoutVerificationTokenInputFields,
});

export const UserUpdateOneRequiredWithoutVerificationTokenNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutVerificationTokenInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutVerificationTokenInput}),
  upsert: t.field({"required":false,"type":UserUpsertWithoutVerificationTokenInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  update: t.field({"required":false,"type":UserUpdateToOneWithWhereWithoutVerificationTokenInput}),
});
export const UserUpdateOneRequiredWithoutVerificationTokenNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutVerificationTokenNestedInput>, false>('UserUpdateOneRequiredWithoutVerificationTokenNestedInput').implement({
  fields: UserUpdateOneRequiredWithoutVerificationTokenNestedInputFields,
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

export const NestedDateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const NestedDateTimeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableFilter>, false>('NestedDateTimeNullableFilter').implement({
  fields: NestedDateTimeNullableFilterFields,
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

export const NestedDateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const NestedDateTimeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableWithAggregatesFilter>, false>('NestedDateTimeNullableWithAggregatesFilter').implement({
  fields: NestedDateTimeNullableWithAggregatesFilterFields,
});

export const UserRoleCreateWithoutUserInputFields = (t: any) => ({
  role: t.field({"required":true,"type":RoleCreateNestedOneWithoutUsersInput}),
});
export const UserRoleCreateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateWithoutUserInput>, false>('UserRoleCreateWithoutUserInput').implement({
  fields: UserRoleCreateWithoutUserInputFields,
});

export const UserRoleCreateOrConnectWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserRoleWhereUniqueInput}),
  create: t.field({"required":true,"type":UserRoleCreateWithoutUserInput}),
});
export const UserRoleCreateOrConnectWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateOrConnectWithoutUserInput>, false>('UserRoleCreateOrConnectWithoutUserInput').implement({
  fields: UserRoleCreateOrConnectWithoutUserInputFields,
});

export const UserRoleCreateManyUserInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[UserRoleCreateManyUserInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const UserRoleCreateManyUserInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateManyUserInputEnvelope>, false>('UserRoleCreateManyUserInputEnvelope').implement({
  fields: UserRoleCreateManyUserInputEnvelopeFields,
});

export const AccountCreateWithoutUserInputFields = (t: any) => ({
  provider: t.string({"required":true}),
  providerAccountId: t.string({"required":true}),
  accessToken: t.string({"required":false}),
  refreshToken: t.string({"required":false}),
  expiresAt: t.field({"required":false,"type":DateTime}),
});
export const AccountCreateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountCreateWithoutUserInput>, false>('AccountCreateWithoutUserInput').implement({
  fields: AccountCreateWithoutUserInputFields,
});

export const AccountCreateOrConnectWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":AccountWhereUniqueInput}),
  create: t.field({"required":true,"type":AccountCreateWithoutUserInput}),
});
export const AccountCreateOrConnectWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountCreateOrConnectWithoutUserInput>, false>('AccountCreateOrConnectWithoutUserInput').implement({
  fields: AccountCreateOrConnectWithoutUserInputFields,
});

export const AccountCreateManyUserInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[AccountCreateManyUserInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const AccountCreateManyUserInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountCreateManyUserInputEnvelope>, false>('AccountCreateManyUserInputEnvelope').implement({
  fields: AccountCreateManyUserInputEnvelopeFields,
});

export const PasswordResetTokenCreateWithoutUserInputFields = (t: any) => ({
  tokenHash: t.string({"required":true}),
  expiresAt: t.field({"required":true,"type":DateTime}),
});
export const PasswordResetTokenCreateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenCreateWithoutUserInput>, false>('PasswordResetTokenCreateWithoutUserInput').implement({
  fields: PasswordResetTokenCreateWithoutUserInputFields,
});

export const PasswordResetTokenCreateOrConnectWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":PasswordResetTokenWhereUniqueInput}),
  create: t.field({"required":true,"type":PasswordResetTokenCreateWithoutUserInput}),
});
export const PasswordResetTokenCreateOrConnectWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenCreateOrConnectWithoutUserInput>, false>('PasswordResetTokenCreateOrConnectWithoutUserInput').implement({
  fields: PasswordResetTokenCreateOrConnectWithoutUserInputFields,
});

export const PasswordResetTokenCreateManyUserInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[PasswordResetTokenCreateManyUserInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const PasswordResetTokenCreateManyUserInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenCreateManyUserInputEnvelope>, false>('PasswordResetTokenCreateManyUserInputEnvelope').implement({
  fields: PasswordResetTokenCreateManyUserInputEnvelopeFields,
});

export const VerificationTokenCreateWithoutUserInputFields = (t: any) => ({
  tokenHash: t.string({"required":true}),
  expiresAt: t.field({"required":true,"type":DateTime}),
});
export const VerificationTokenCreateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenCreateWithoutUserInput>, false>('VerificationTokenCreateWithoutUserInput').implement({
  fields: VerificationTokenCreateWithoutUserInputFields,
});

export const VerificationTokenCreateOrConnectWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":VerificationTokenWhereUniqueInput}),
  create: t.field({"required":true,"type":VerificationTokenCreateWithoutUserInput}),
});
export const VerificationTokenCreateOrConnectWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenCreateOrConnectWithoutUserInput>, false>('VerificationTokenCreateOrConnectWithoutUserInput').implement({
  fields: VerificationTokenCreateOrConnectWithoutUserInputFields,
});

export const VerificationTokenCreateManyUserInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[VerificationTokenCreateManyUserInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const VerificationTokenCreateManyUserInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenCreateManyUserInputEnvelope>, false>('VerificationTokenCreateManyUserInputEnvelope').implement({
  fields: VerificationTokenCreateManyUserInputEnvelopeFields,
});

export const UserRoleUpsertWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserRoleWhereUniqueInput}),
  update: t.field({"required":true,"type":UserRoleUpdateWithoutUserInput}),
  create: t.field({"required":true,"type":UserRoleCreateWithoutUserInput}),
});
export const UserRoleUpsertWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpsertWithWhereUniqueWithoutUserInput>, false>('UserRoleUpsertWithWhereUniqueWithoutUserInput').implement({
  fields: UserRoleUpsertWithWhereUniqueWithoutUserInputFields,
});

export const UserRoleUpdateWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserRoleWhereUniqueInput}),
  data: t.field({"required":true,"type":UserRoleUpdateWithoutUserInput}),
});
export const UserRoleUpdateWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateWithWhereUniqueWithoutUserInput>, false>('UserRoleUpdateWithWhereUniqueWithoutUserInput').implement({
  fields: UserRoleUpdateWithWhereUniqueWithoutUserInputFields,
});

export const UserRoleUpdateManyWithWhereWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserRoleScalarWhereInput}),
  data: t.field({"required":true,"type":UserRoleUpdateManyMutationInput}),
});
export const UserRoleUpdateManyWithWhereWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateManyWithWhereWithoutUserInput>, false>('UserRoleUpdateManyWithWhereWithoutUserInput').implement({
  fields: UserRoleUpdateManyWithWhereWithoutUserInputFields,
});

export const UserRoleScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserRoleScalarWhereInput]}),
  OR: t.field({"required":false,"type":[UserRoleScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[UserRoleScalarWhereInput]}),
  userId: t.field({"required":false,"type":IntFilter}),
  roleId: t.field({"required":false,"type":IntFilter}),
});
export const UserRoleScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleScalarWhereInput>, false>('UserRoleScalarWhereInput').implement({
  fields: UserRoleScalarWhereInputFields,
});

export const AccountUpsertWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":AccountWhereUniqueInput}),
  update: t.field({"required":true,"type":AccountUpdateWithoutUserInput}),
  create: t.field({"required":true,"type":AccountCreateWithoutUserInput}),
});
export const AccountUpsertWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput>, false>('AccountUpsertWithWhereUniqueWithoutUserInput').implement({
  fields: AccountUpsertWithWhereUniqueWithoutUserInputFields,
});

export const AccountUpdateWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":AccountWhereUniqueInput}),
  data: t.field({"required":true,"type":AccountUpdateWithoutUserInput}),
});
export const AccountUpdateWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput>, false>('AccountUpdateWithWhereUniqueWithoutUserInput').implement({
  fields: AccountUpdateWithWhereUniqueWithoutUserInputFields,
});

export const AccountUpdateManyWithWhereWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":AccountScalarWhereInput}),
  data: t.field({"required":true,"type":AccountUpdateManyMutationInput}),
});
export const AccountUpdateManyWithWhereWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountUpdateManyWithWhereWithoutUserInput>, false>('AccountUpdateManyWithWhereWithoutUserInput').implement({
  fields: AccountUpdateManyWithWhereWithoutUserInputFields,
});

export const AccountScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[AccountScalarWhereInput]}),
  OR: t.field({"required":false,"type":[AccountScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[AccountScalarWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  provider: t.field({"required":false,"type":StringFilter}),
  providerAccountId: t.field({"required":false,"type":StringFilter}),
  accessToken: t.field({"required":false,"type":StringNullableFilter}),
  refreshToken: t.field({"required":false,"type":StringNullableFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
});
export const AccountScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountScalarWhereInput>, false>('AccountScalarWhereInput').implement({
  fields: AccountScalarWhereInputFields,
});

export const PasswordResetTokenUpsertWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":PasswordResetTokenWhereUniqueInput}),
  update: t.field({"required":true,"type":PasswordResetTokenUpdateWithoutUserInput}),
  create: t.field({"required":true,"type":PasswordResetTokenCreateWithoutUserInput}),
});
export const PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput>, false>('PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput').implement({
  fields: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInputFields,
});

export const PasswordResetTokenUpdateWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":PasswordResetTokenWhereUniqueInput}),
  data: t.field({"required":true,"type":PasswordResetTokenUpdateWithoutUserInput}),
});
export const PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput>, false>('PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput').implement({
  fields: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInputFields,
});

export const PasswordResetTokenUpdateManyWithWhereWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":PasswordResetTokenScalarWhereInput}),
  data: t.field({"required":true,"type":PasswordResetTokenUpdateManyMutationInput}),
});
export const PasswordResetTokenUpdateManyWithWhereWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenUpdateManyWithWhereWithoutUserInput>, false>('PasswordResetTokenUpdateManyWithWhereWithoutUserInput').implement({
  fields: PasswordResetTokenUpdateManyWithWhereWithoutUserInputFields,
});

export const PasswordResetTokenScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[PasswordResetTokenScalarWhereInput]}),
  OR: t.field({"required":false,"type":[PasswordResetTokenScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[PasswordResetTokenScalarWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
  tokenHash: t.field({"required":false,"type":StringFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeFilter}),
});
export const PasswordResetTokenScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenScalarWhereInput>, false>('PasswordResetTokenScalarWhereInput').implement({
  fields: PasswordResetTokenScalarWhereInputFields,
});

export const VerificationTokenUpsertWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":VerificationTokenWhereUniqueInput}),
  update: t.field({"required":true,"type":VerificationTokenUpdateWithoutUserInput}),
  create: t.field({"required":true,"type":VerificationTokenCreateWithoutUserInput}),
});
export const VerificationTokenUpsertWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenUpsertWithWhereUniqueWithoutUserInput>, false>('VerificationTokenUpsertWithWhereUniqueWithoutUserInput').implement({
  fields: VerificationTokenUpsertWithWhereUniqueWithoutUserInputFields,
});

export const VerificationTokenUpdateWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":VerificationTokenWhereUniqueInput}),
  data: t.field({"required":true,"type":VerificationTokenUpdateWithoutUserInput}),
});
export const VerificationTokenUpdateWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenUpdateWithWhereUniqueWithoutUserInput>, false>('VerificationTokenUpdateWithWhereUniqueWithoutUserInput').implement({
  fields: VerificationTokenUpdateWithWhereUniqueWithoutUserInputFields,
});

export const VerificationTokenUpdateManyWithWhereWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":VerificationTokenScalarWhereInput}),
  data: t.field({"required":true,"type":VerificationTokenUpdateManyMutationInput}),
});
export const VerificationTokenUpdateManyWithWhereWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenUpdateManyWithWhereWithoutUserInput>, false>('VerificationTokenUpdateManyWithWhereWithoutUserInput').implement({
  fields: VerificationTokenUpdateManyWithWhereWithoutUserInputFields,
});

export const VerificationTokenScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[VerificationTokenScalarWhereInput]}),
  OR: t.field({"required":false,"type":[VerificationTokenScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[VerificationTokenScalarWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
  tokenHash: t.field({"required":false,"type":StringFilter}),
  expiresAt: t.field({"required":false,"type":DateTimeFilter}),
});
export const VerificationTokenScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenScalarWhereInput>, false>('VerificationTokenScalarWhereInput').implement({
  fields: VerificationTokenScalarWhereInputFields,
});

export const UserCreateWithoutAccountsInputFields = (t: any) => ({
  email: t.string({"required":false}),
  name: t.string({"required":false}),
  image: t.string({"required":false}),
  password: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  roles: t.field({"required":false,"type":UserRoleCreateNestedManyWithoutUserInput}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenCreateNestedManyWithoutUserInput}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenCreateNestedManyWithoutUserInput}),
});
export const UserCreateWithoutAccountsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutAccountsInput>, false>('UserCreateWithoutAccountsInput').implement({
  fields: UserCreateWithoutAccountsInputFields,
});

export const UserCreateOrConnectWithoutAccountsInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  create: t.field({"required":true,"type":UserCreateWithoutAccountsInput}),
});
export const UserCreateOrConnectWithoutAccountsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutAccountsInput>, false>('UserCreateOrConnectWithoutAccountsInput').implement({
  fields: UserCreateOrConnectWithoutAccountsInputFields,
});

export const UserUpsertWithoutAccountsInputFields = (t: any) => ({
  update: t.field({"required":true,"type":UserUpdateWithoutAccountsInput}),
  create: t.field({"required":true,"type":UserCreateWithoutAccountsInput}),
  where: t.field({"required":false,"type":UserWhereInput}),
});
export const UserUpsertWithoutAccountsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutAccountsInput>, false>('UserUpsertWithoutAccountsInput').implement({
  fields: UserUpsertWithoutAccountsInputFields,
});

export const UserUpdateToOneWithWhereWithoutAccountsInputFields = (t: any) => ({
  where: t.field({"required":false,"type":UserWhereInput}),
  data: t.field({"required":true,"type":UserUpdateWithoutAccountsInput}),
});
export const UserUpdateToOneWithWhereWithoutAccountsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput>, false>('UserUpdateToOneWithWhereWithoutAccountsInput').implement({
  fields: UserUpdateToOneWithWhereWithoutAccountsInputFields,
});

export const UserUpdateWithoutAccountsInputFields = (t: any) => ({
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  password: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  roles: t.field({"required":false,"type":UserRoleUpdateManyWithoutUserNestedInput}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenUpdateManyWithoutUserNestedInput}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenUpdateManyWithoutUserNestedInput}),
});
export const UserUpdateWithoutAccountsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutAccountsInput>, false>('UserUpdateWithoutAccountsInput').implement({
  fields: UserUpdateWithoutAccountsInputFields,
});

export const UserRoleCreateWithoutRoleInputFields = (t: any) => ({
  user: t.field({"required":true,"type":UserCreateNestedOneWithoutRolesInput}),
});
export const UserRoleCreateWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateWithoutRoleInput>, false>('UserRoleCreateWithoutRoleInput').implement({
  fields: UserRoleCreateWithoutRoleInputFields,
});

export const UserRoleCreateOrConnectWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserRoleWhereUniqueInput}),
  create: t.field({"required":true,"type":UserRoleCreateWithoutRoleInput}),
});
export const UserRoleCreateOrConnectWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateOrConnectWithoutRoleInput>, false>('UserRoleCreateOrConnectWithoutRoleInput').implement({
  fields: UserRoleCreateOrConnectWithoutRoleInputFields,
});

export const UserRoleCreateManyRoleInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[UserRoleCreateManyRoleInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const UserRoleCreateManyRoleInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateManyRoleInputEnvelope>, false>('UserRoleCreateManyRoleInputEnvelope').implement({
  fields: UserRoleCreateManyRoleInputEnvelopeFields,
});

export const RolePermissionCreateWithoutRoleInputFields = (t: any) => ({
  permission: t.field({"required":true,"type":PermissionCreateNestedOneWithoutRolesInput}),
});
export const RolePermissionCreateWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateWithoutRoleInput>, false>('RolePermissionCreateWithoutRoleInput').implement({
  fields: RolePermissionCreateWithoutRoleInputFields,
});

export const RolePermissionCreateOrConnectWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RolePermissionWhereUniqueInput}),
  create: t.field({"required":true,"type":RolePermissionCreateWithoutRoleInput}),
});
export const RolePermissionCreateOrConnectWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateOrConnectWithoutRoleInput>, false>('RolePermissionCreateOrConnectWithoutRoleInput').implement({
  fields: RolePermissionCreateOrConnectWithoutRoleInputFields,
});

export const RolePermissionCreateManyRoleInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[RolePermissionCreateManyRoleInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const RolePermissionCreateManyRoleInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateManyRoleInputEnvelope>, false>('RolePermissionCreateManyRoleInputEnvelope').implement({
  fields: RolePermissionCreateManyRoleInputEnvelopeFields,
});

export const UserRoleUpsertWithWhereUniqueWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserRoleWhereUniqueInput}),
  update: t.field({"required":true,"type":UserRoleUpdateWithoutRoleInput}),
  create: t.field({"required":true,"type":UserRoleCreateWithoutRoleInput}),
});
export const UserRoleUpsertWithWhereUniqueWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpsertWithWhereUniqueWithoutRoleInput>, false>('UserRoleUpsertWithWhereUniqueWithoutRoleInput').implement({
  fields: UserRoleUpsertWithWhereUniqueWithoutRoleInputFields,
});

export const UserRoleUpdateWithWhereUniqueWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserRoleWhereUniqueInput}),
  data: t.field({"required":true,"type":UserRoleUpdateWithoutRoleInput}),
});
export const UserRoleUpdateWithWhereUniqueWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateWithWhereUniqueWithoutRoleInput>, false>('UserRoleUpdateWithWhereUniqueWithoutRoleInput').implement({
  fields: UserRoleUpdateWithWhereUniqueWithoutRoleInputFields,
});

export const UserRoleUpdateManyWithWhereWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserRoleScalarWhereInput}),
  data: t.field({"required":true,"type":UserRoleUpdateManyMutationInput}),
});
export const UserRoleUpdateManyWithWhereWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateManyWithWhereWithoutRoleInput>, false>('UserRoleUpdateManyWithWhereWithoutRoleInput').implement({
  fields: UserRoleUpdateManyWithWhereWithoutRoleInputFields,
});

export const RolePermissionUpsertWithWhereUniqueWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RolePermissionWhereUniqueInput}),
  update: t.field({"required":true,"type":RolePermissionUpdateWithoutRoleInput}),
  create: t.field({"required":true,"type":RolePermissionCreateWithoutRoleInput}),
});
export const RolePermissionUpsertWithWhereUniqueWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpsertWithWhereUniqueWithoutRoleInput>, false>('RolePermissionUpsertWithWhereUniqueWithoutRoleInput').implement({
  fields: RolePermissionUpsertWithWhereUniqueWithoutRoleInputFields,
});

export const RolePermissionUpdateWithWhereUniqueWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RolePermissionWhereUniqueInput}),
  data: t.field({"required":true,"type":RolePermissionUpdateWithoutRoleInput}),
});
export const RolePermissionUpdateWithWhereUniqueWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateWithWhereUniqueWithoutRoleInput>, false>('RolePermissionUpdateWithWhereUniqueWithoutRoleInput').implement({
  fields: RolePermissionUpdateWithWhereUniqueWithoutRoleInputFields,
});

export const RolePermissionUpdateManyWithWhereWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RolePermissionScalarWhereInput}),
  data: t.field({"required":true,"type":RolePermissionUpdateManyMutationInput}),
});
export const RolePermissionUpdateManyWithWhereWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateManyWithWhereWithoutRoleInput>, false>('RolePermissionUpdateManyWithWhereWithoutRoleInput').implement({
  fields: RolePermissionUpdateManyWithWhereWithoutRoleInputFields,
});

export const RolePermissionScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RolePermissionScalarWhereInput]}),
  OR: t.field({"required":false,"type":[RolePermissionScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[RolePermissionScalarWhereInput]}),
  roleId: t.field({"required":false,"type":IntFilter}),
  permissionId: t.field({"required":false,"type":IntFilter}),
});
export const RolePermissionScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionScalarWhereInput>, false>('RolePermissionScalarWhereInput').implement({
  fields: RolePermissionScalarWhereInputFields,
});

export const RolePermissionCreateWithoutPermissionInputFields = (t: any) => ({
  role: t.field({"required":true,"type":RoleCreateNestedOneWithoutPermissionsInput}),
});
export const RolePermissionCreateWithoutPermissionInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateWithoutPermissionInput>, false>('RolePermissionCreateWithoutPermissionInput').implement({
  fields: RolePermissionCreateWithoutPermissionInputFields,
});

export const RolePermissionCreateOrConnectWithoutPermissionInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RolePermissionWhereUniqueInput}),
  create: t.field({"required":true,"type":RolePermissionCreateWithoutPermissionInput}),
});
export const RolePermissionCreateOrConnectWithoutPermissionInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateOrConnectWithoutPermissionInput>, false>('RolePermissionCreateOrConnectWithoutPermissionInput').implement({
  fields: RolePermissionCreateOrConnectWithoutPermissionInputFields,
});

export const RolePermissionCreateManyPermissionInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[RolePermissionCreateManyPermissionInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const RolePermissionCreateManyPermissionInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateManyPermissionInputEnvelope>, false>('RolePermissionCreateManyPermissionInputEnvelope').implement({
  fields: RolePermissionCreateManyPermissionInputEnvelopeFields,
});

export const RolePermissionUpsertWithWhereUniqueWithoutPermissionInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RolePermissionWhereUniqueInput}),
  update: t.field({"required":true,"type":RolePermissionUpdateWithoutPermissionInput}),
  create: t.field({"required":true,"type":RolePermissionCreateWithoutPermissionInput}),
});
export const RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpsertWithWhereUniqueWithoutPermissionInput>, false>('RolePermissionUpsertWithWhereUniqueWithoutPermissionInput').implement({
  fields: RolePermissionUpsertWithWhereUniqueWithoutPermissionInputFields,
});

export const RolePermissionUpdateWithWhereUniqueWithoutPermissionInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RolePermissionWhereUniqueInput}),
  data: t.field({"required":true,"type":RolePermissionUpdateWithoutPermissionInput}),
});
export const RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateWithWhereUniqueWithoutPermissionInput>, false>('RolePermissionUpdateWithWhereUniqueWithoutPermissionInput').implement({
  fields: RolePermissionUpdateWithWhereUniqueWithoutPermissionInputFields,
});

export const RolePermissionUpdateManyWithWhereWithoutPermissionInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RolePermissionScalarWhereInput}),
  data: t.field({"required":true,"type":RolePermissionUpdateManyMutationInput}),
});
export const RolePermissionUpdateManyWithWhereWithoutPermissionInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateManyWithWhereWithoutPermissionInput>, false>('RolePermissionUpdateManyWithWhereWithoutPermissionInput').implement({
  fields: RolePermissionUpdateManyWithWhereWithoutPermissionInputFields,
});

export const UserCreateWithoutRolesInputFields = (t: any) => ({
  email: t.string({"required":false}),
  name: t.string({"required":false}),
  image: t.string({"required":false}),
  password: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  accounts: t.field({"required":false,"type":AccountCreateNestedManyWithoutUserInput}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenCreateNestedManyWithoutUserInput}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenCreateNestedManyWithoutUserInput}),
});
export const UserCreateWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutRolesInput>, false>('UserCreateWithoutRolesInput').implement({
  fields: UserCreateWithoutRolesInputFields,
});

export const UserCreateOrConnectWithoutRolesInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  create: t.field({"required":true,"type":UserCreateWithoutRolesInput}),
});
export const UserCreateOrConnectWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutRolesInput>, false>('UserCreateOrConnectWithoutRolesInput').implement({
  fields: UserCreateOrConnectWithoutRolesInputFields,
});

export const RoleCreateWithoutUsersInputFields = (t: any) => ({
  name: t.string({"required":true}),
  description: t.string({"required":false}),
  permissions: t.field({"required":false,"type":RolePermissionCreateNestedManyWithoutRoleInput}),
});
export const RoleCreateWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateWithoutUsersInput>, false>('RoleCreateWithoutUsersInput').implement({
  fields: RoleCreateWithoutUsersInputFields,
});

export const RoleCreateOrConnectWithoutUsersInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RoleWhereUniqueInput}),
  create: t.field({"required":true,"type":RoleCreateWithoutUsersInput}),
});
export const RoleCreateOrConnectWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateOrConnectWithoutUsersInput>, false>('RoleCreateOrConnectWithoutUsersInput').implement({
  fields: RoleCreateOrConnectWithoutUsersInputFields,
});

export const UserUpsertWithoutRolesInputFields = (t: any) => ({
  update: t.field({"required":true,"type":UserUpdateWithoutRolesInput}),
  create: t.field({"required":true,"type":UserCreateWithoutRolesInput}),
  where: t.field({"required":false,"type":UserWhereInput}),
});
export const UserUpsertWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutRolesInput>, false>('UserUpsertWithoutRolesInput').implement({
  fields: UserUpsertWithoutRolesInputFields,
});

export const UserUpdateToOneWithWhereWithoutRolesInputFields = (t: any) => ({
  where: t.field({"required":false,"type":UserWhereInput}),
  data: t.field({"required":true,"type":UserUpdateWithoutRolesInput}),
});
export const UserUpdateToOneWithWhereWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateToOneWithWhereWithoutRolesInput>, false>('UserUpdateToOneWithWhereWithoutRolesInput').implement({
  fields: UserUpdateToOneWithWhereWithoutRolesInputFields,
});

export const UserUpdateWithoutRolesInputFields = (t: any) => ({
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  password: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  accounts: t.field({"required":false,"type":AccountUpdateManyWithoutUserNestedInput}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenUpdateManyWithoutUserNestedInput}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenUpdateManyWithoutUserNestedInput}),
});
export const UserUpdateWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutRolesInput>, false>('UserUpdateWithoutRolesInput').implement({
  fields: UserUpdateWithoutRolesInputFields,
});

export const RoleUpsertWithoutUsersInputFields = (t: any) => ({
  update: t.field({"required":true,"type":RoleUpdateWithoutUsersInput}),
  create: t.field({"required":true,"type":RoleCreateWithoutUsersInput}),
  where: t.field({"required":false,"type":RoleWhereInput}),
});
export const RoleUpsertWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpsertWithoutUsersInput>, false>('RoleUpsertWithoutUsersInput').implement({
  fields: RoleUpsertWithoutUsersInputFields,
});

export const RoleUpdateToOneWithWhereWithoutUsersInputFields = (t: any) => ({
  where: t.field({"required":false,"type":RoleWhereInput}),
  data: t.field({"required":true,"type":RoleUpdateWithoutUsersInput}),
});
export const RoleUpdateToOneWithWhereWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateToOneWithWhereWithoutUsersInput>, false>('RoleUpdateToOneWithWhereWithoutUsersInput').implement({
  fields: RoleUpdateToOneWithWhereWithoutUsersInputFields,
});

export const RoleUpdateWithoutUsersInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  permissions: t.field({"required":false,"type":RolePermissionUpdateManyWithoutRoleNestedInput}),
});
export const RoleUpdateWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateWithoutUsersInput>, false>('RoleUpdateWithoutUsersInput').implement({
  fields: RoleUpdateWithoutUsersInputFields,
});

export const RoleCreateWithoutPermissionsInputFields = (t: any) => ({
  name: t.string({"required":true}),
  description: t.string({"required":false}),
  users: t.field({"required":false,"type":UserRoleCreateNestedManyWithoutRoleInput}),
});
export const RoleCreateWithoutPermissionsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateWithoutPermissionsInput>, false>('RoleCreateWithoutPermissionsInput').implement({
  fields: RoleCreateWithoutPermissionsInputFields,
});

export const RoleCreateOrConnectWithoutPermissionsInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RoleWhereUniqueInput}),
  create: t.field({"required":true,"type":RoleCreateWithoutPermissionsInput}),
});
export const RoleCreateOrConnectWithoutPermissionsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateOrConnectWithoutPermissionsInput>, false>('RoleCreateOrConnectWithoutPermissionsInput').implement({
  fields: RoleCreateOrConnectWithoutPermissionsInputFields,
});

export const PermissionCreateWithoutRolesInputFields = (t: any) => ({
  name: t.string({"required":true}),
  description: t.string({"required":false}),
});
export const PermissionCreateWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionCreateWithoutRolesInput>, false>('PermissionCreateWithoutRolesInput').implement({
  fields: PermissionCreateWithoutRolesInputFields,
});

export const PermissionCreateOrConnectWithoutRolesInputFields = (t: any) => ({
  where: t.field({"required":true,"type":PermissionWhereUniqueInput}),
  create: t.field({"required":true,"type":PermissionCreateWithoutRolesInput}),
});
export const PermissionCreateOrConnectWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionCreateOrConnectWithoutRolesInput>, false>('PermissionCreateOrConnectWithoutRolesInput').implement({
  fields: PermissionCreateOrConnectWithoutRolesInputFields,
});

export const RoleUpsertWithoutPermissionsInputFields = (t: any) => ({
  update: t.field({"required":true,"type":RoleUpdateWithoutPermissionsInput}),
  create: t.field({"required":true,"type":RoleCreateWithoutPermissionsInput}),
  where: t.field({"required":false,"type":RoleWhereInput}),
});
export const RoleUpsertWithoutPermissionsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpsertWithoutPermissionsInput>, false>('RoleUpsertWithoutPermissionsInput').implement({
  fields: RoleUpsertWithoutPermissionsInputFields,
});

export const RoleUpdateToOneWithWhereWithoutPermissionsInputFields = (t: any) => ({
  where: t.field({"required":false,"type":RoleWhereInput}),
  data: t.field({"required":true,"type":RoleUpdateWithoutPermissionsInput}),
});
export const RoleUpdateToOneWithWhereWithoutPermissionsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateToOneWithWhereWithoutPermissionsInput>, false>('RoleUpdateToOneWithWhereWithoutPermissionsInput').implement({
  fields: RoleUpdateToOneWithWhereWithoutPermissionsInputFields,
});

export const RoleUpdateWithoutPermissionsInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  users: t.field({"required":false,"type":UserRoleUpdateManyWithoutRoleNestedInput}),
});
export const RoleUpdateWithoutPermissionsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateWithoutPermissionsInput>, false>('RoleUpdateWithoutPermissionsInput').implement({
  fields: RoleUpdateWithoutPermissionsInputFields,
});

export const PermissionUpsertWithoutRolesInputFields = (t: any) => ({
  update: t.field({"required":true,"type":PermissionUpdateWithoutRolesInput}),
  create: t.field({"required":true,"type":PermissionCreateWithoutRolesInput}),
  where: t.field({"required":false,"type":PermissionWhereInput}),
});
export const PermissionUpsertWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionUpsertWithoutRolesInput>, false>('PermissionUpsertWithoutRolesInput').implement({
  fields: PermissionUpsertWithoutRolesInputFields,
});

export const PermissionUpdateToOneWithWhereWithoutRolesInputFields = (t: any) => ({
  where: t.field({"required":false,"type":PermissionWhereInput}),
  data: t.field({"required":true,"type":PermissionUpdateWithoutRolesInput}),
});
export const PermissionUpdateToOneWithWhereWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionUpdateToOneWithWhereWithoutRolesInput>, false>('PermissionUpdateToOneWithWhereWithoutRolesInput').implement({
  fields: PermissionUpdateToOneWithWhereWithoutRolesInputFields,
});

export const PermissionUpdateWithoutRolesInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
});
export const PermissionUpdateWithoutRolesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PermissionUpdateWithoutRolesInput>, false>('PermissionUpdateWithoutRolesInput').implement({
  fields: PermissionUpdateWithoutRolesInputFields,
});

export const UserCreateWithoutPasswordResetTokenInputFields = (t: any) => ({
  email: t.string({"required":false}),
  name: t.string({"required":false}),
  image: t.string({"required":false}),
  password: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  roles: t.field({"required":false,"type":UserRoleCreateNestedManyWithoutUserInput}),
  accounts: t.field({"required":false,"type":AccountCreateNestedManyWithoutUserInput}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenCreateNestedManyWithoutUserInput}),
});
export const UserCreateWithoutPasswordResetTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutPasswordResetTokenInput>, false>('UserCreateWithoutPasswordResetTokenInput').implement({
  fields: UserCreateWithoutPasswordResetTokenInputFields,
});

export const UserCreateOrConnectWithoutPasswordResetTokenInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  create: t.field({"required":true,"type":UserCreateWithoutPasswordResetTokenInput}),
});
export const UserCreateOrConnectWithoutPasswordResetTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutPasswordResetTokenInput>, false>('UserCreateOrConnectWithoutPasswordResetTokenInput').implement({
  fields: UserCreateOrConnectWithoutPasswordResetTokenInputFields,
});

export const UserUpsertWithoutPasswordResetTokenInputFields = (t: any) => ({
  update: t.field({"required":true,"type":UserUpdateWithoutPasswordResetTokenInput}),
  create: t.field({"required":true,"type":UserCreateWithoutPasswordResetTokenInput}),
  where: t.field({"required":false,"type":UserWhereInput}),
});
export const UserUpsertWithoutPasswordResetTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutPasswordResetTokenInput>, false>('UserUpsertWithoutPasswordResetTokenInput').implement({
  fields: UserUpsertWithoutPasswordResetTokenInputFields,
});

export const UserUpdateToOneWithWhereWithoutPasswordResetTokenInputFields = (t: any) => ({
  where: t.field({"required":false,"type":UserWhereInput}),
  data: t.field({"required":true,"type":UserUpdateWithoutPasswordResetTokenInput}),
});
export const UserUpdateToOneWithWhereWithoutPasswordResetTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateToOneWithWhereWithoutPasswordResetTokenInput>, false>('UserUpdateToOneWithWhereWithoutPasswordResetTokenInput').implement({
  fields: UserUpdateToOneWithWhereWithoutPasswordResetTokenInputFields,
});

export const UserUpdateWithoutPasswordResetTokenInputFields = (t: any) => ({
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  password: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  roles: t.field({"required":false,"type":UserRoleUpdateManyWithoutUserNestedInput}),
  accounts: t.field({"required":false,"type":AccountUpdateManyWithoutUserNestedInput}),
  VerificationToken: t.field({"required":false,"type":VerificationTokenUpdateManyWithoutUserNestedInput}),
});
export const UserUpdateWithoutPasswordResetTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutPasswordResetTokenInput>, false>('UserUpdateWithoutPasswordResetTokenInput').implement({
  fields: UserUpdateWithoutPasswordResetTokenInputFields,
});

export const UserCreateWithoutVerificationTokenInputFields = (t: any) => ({
  email: t.string({"required":false}),
  name: t.string({"required":false}),
  image: t.string({"required":false}),
  password: t.string({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  roles: t.field({"required":false,"type":UserRoleCreateNestedManyWithoutUserInput}),
  accounts: t.field({"required":false,"type":AccountCreateNestedManyWithoutUserInput}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenCreateNestedManyWithoutUserInput}),
});
export const UserCreateWithoutVerificationTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutVerificationTokenInput>, false>('UserCreateWithoutVerificationTokenInput').implement({
  fields: UserCreateWithoutVerificationTokenInputFields,
});

export const UserCreateOrConnectWithoutVerificationTokenInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  create: t.field({"required":true,"type":UserCreateWithoutVerificationTokenInput}),
});
export const UserCreateOrConnectWithoutVerificationTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutVerificationTokenInput>, false>('UserCreateOrConnectWithoutVerificationTokenInput').implement({
  fields: UserCreateOrConnectWithoutVerificationTokenInputFields,
});

export const UserUpsertWithoutVerificationTokenInputFields = (t: any) => ({
  update: t.field({"required":true,"type":UserUpdateWithoutVerificationTokenInput}),
  create: t.field({"required":true,"type":UserCreateWithoutVerificationTokenInput}),
  where: t.field({"required":false,"type":UserWhereInput}),
});
export const UserUpsertWithoutVerificationTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutVerificationTokenInput>, false>('UserUpsertWithoutVerificationTokenInput').implement({
  fields: UserUpsertWithoutVerificationTokenInputFields,
});

export const UserUpdateToOneWithWhereWithoutVerificationTokenInputFields = (t: any) => ({
  where: t.field({"required":false,"type":UserWhereInput}),
  data: t.field({"required":true,"type":UserUpdateWithoutVerificationTokenInput}),
});
export const UserUpdateToOneWithWhereWithoutVerificationTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateToOneWithWhereWithoutVerificationTokenInput>, false>('UserUpdateToOneWithWhereWithoutVerificationTokenInput').implement({
  fields: UserUpdateToOneWithWhereWithoutVerificationTokenInputFields,
});

export const UserUpdateWithoutVerificationTokenInputFields = (t: any) => ({
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  password: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  roles: t.field({"required":false,"type":UserRoleUpdateManyWithoutUserNestedInput}),
  accounts: t.field({"required":false,"type":AccountUpdateManyWithoutUserNestedInput}),
  PasswordResetToken: t.field({"required":false,"type":PasswordResetTokenUpdateManyWithoutUserNestedInput}),
});
export const UserUpdateWithoutVerificationTokenInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutVerificationTokenInput>, false>('UserUpdateWithoutVerificationTokenInput').implement({
  fields: UserUpdateWithoutVerificationTokenInputFields,
});

export const UserRoleCreateManyUserInputFields = (t: any) => ({
  roleId: t.int({"required":true}),
});
export const UserRoleCreateManyUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateManyUserInput>, false>('UserRoleCreateManyUserInput').implement({
  fields: UserRoleCreateManyUserInputFields,
});

export const AccountCreateManyUserInputFields = (t: any) => ({
  id: t.int({"required":false}),
  provider: t.string({"required":true}),
  providerAccountId: t.string({"required":true}),
  accessToken: t.string({"required":false}),
  refreshToken: t.string({"required":false}),
  expiresAt: t.field({"required":false,"type":DateTime}),
});
export const AccountCreateManyUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountCreateManyUserInput>, false>('AccountCreateManyUserInput').implement({
  fields: AccountCreateManyUserInputFields,
});

export const PasswordResetTokenCreateManyUserInputFields = (t: any) => ({
  id: t.int({"required":false}),
  tokenHash: t.string({"required":true}),
  expiresAt: t.field({"required":true,"type":DateTime}),
});
export const PasswordResetTokenCreateManyUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenCreateManyUserInput>, false>('PasswordResetTokenCreateManyUserInput').implement({
  fields: PasswordResetTokenCreateManyUserInputFields,
});

export const VerificationTokenCreateManyUserInputFields = (t: any) => ({
  id: t.int({"required":false}),
  tokenHash: t.string({"required":true}),
  expiresAt: t.field({"required":true,"type":DateTime}),
});
export const VerificationTokenCreateManyUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenCreateManyUserInput>, false>('VerificationTokenCreateManyUserInput').implement({
  fields: VerificationTokenCreateManyUserInputFields,
});

export const UserRoleUpdateWithoutUserInputFields = (t: any) => ({
  role: t.field({"required":false,"type":RoleUpdateOneRequiredWithoutUsersNestedInput}),
});
export const UserRoleUpdateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateWithoutUserInput>, false>('UserRoleUpdateWithoutUserInput').implement({
  fields: UserRoleUpdateWithoutUserInputFields,
});

export const AccountUpdateWithoutUserInputFields = (t: any) => ({
  provider: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  providerAccountId: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  accessToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  refreshToken: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  expiresAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const AccountUpdateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.AccountUpdateWithoutUserInput>, false>('AccountUpdateWithoutUserInput').implement({
  fields: AccountUpdateWithoutUserInputFields,
});

export const PasswordResetTokenUpdateWithoutUserInputFields = (t: any) => ({
  tokenHash: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  expiresAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
});
export const PasswordResetTokenUpdateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.PasswordResetTokenUpdateWithoutUserInput>, false>('PasswordResetTokenUpdateWithoutUserInput').implement({
  fields: PasswordResetTokenUpdateWithoutUserInputFields,
});

export const VerificationTokenUpdateWithoutUserInputFields = (t: any) => ({
  tokenHash: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  expiresAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
});
export const VerificationTokenUpdateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.VerificationTokenUpdateWithoutUserInput>, false>('VerificationTokenUpdateWithoutUserInput').implement({
  fields: VerificationTokenUpdateWithoutUserInputFields,
});

export const UserRoleCreateManyRoleInputFields = (t: any) => ({
  userId: t.int({"required":true}),
});
export const UserRoleCreateManyRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleCreateManyRoleInput>, false>('UserRoleCreateManyRoleInput').implement({
  fields: UserRoleCreateManyRoleInputFields,
});

export const RolePermissionCreateManyRoleInputFields = (t: any) => ({
  permissionId: t.int({"required":true}),
});
export const RolePermissionCreateManyRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateManyRoleInput>, false>('RolePermissionCreateManyRoleInput').implement({
  fields: RolePermissionCreateManyRoleInputFields,
});

export const UserRoleUpdateWithoutRoleInputFields = (t: any) => ({
  user: t.field({"required":false,"type":UserUpdateOneRequiredWithoutRolesNestedInput}),
});
export const UserRoleUpdateWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRoleUpdateWithoutRoleInput>, false>('UserRoleUpdateWithoutRoleInput').implement({
  fields: UserRoleUpdateWithoutRoleInputFields,
});

export const RolePermissionUpdateWithoutRoleInputFields = (t: any) => ({
  permission: t.field({"required":false,"type":PermissionUpdateOneRequiredWithoutRolesNestedInput}),
});
export const RolePermissionUpdateWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateWithoutRoleInput>, false>('RolePermissionUpdateWithoutRoleInput').implement({
  fields: RolePermissionUpdateWithoutRoleInputFields,
});

export const RolePermissionCreateManyPermissionInputFields = (t: any) => ({
  roleId: t.int({"required":true}),
});
export const RolePermissionCreateManyPermissionInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionCreateManyPermissionInput>, false>('RolePermissionCreateManyPermissionInput').implement({
  fields: RolePermissionCreateManyPermissionInputFields,
});

export const RolePermissionUpdateWithoutPermissionInputFields = (t: any) => ({
  role: t.field({"required":false,"type":RoleUpdateOneRequiredWithoutPermissionsNestedInput}),
});
export const RolePermissionUpdateWithoutPermissionInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RolePermissionUpdateWithoutPermissionInput>, false>('RolePermissionUpdateWithoutPermissionInput').implement({
  fields: RolePermissionUpdateWithoutPermissionInputFields,
});