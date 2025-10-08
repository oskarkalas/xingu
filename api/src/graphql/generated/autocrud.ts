import * as User from './User';
import * as Account from './Account';
import * as Role from './Role';
import * as Permission from './Permission';
import * as UserRole from './UserRole';
import * as RolePermission from './RolePermission';
import { builder } from '../builder';
import * as Objects from './objects';

type Model = Objects.Model;

export const Cruds: Record<
  Objects.Model,
  {
    Object: any;
    queries: Record<string, Function>;
    mutations: Record<string, Function>;
  }
> = {
  User: {
    Object: User.UserObject,
    queries: {
      findFirst: User.findFirstUserQueryObject,
      findMany: User.findManyUserQueryObject,
      count: User.countUserQueryObject,
      findUnique: User.findUniqueUserQueryObject,
    },
    mutations: {
      createMany: User.createManyUserMutationObject,
      createOne: User.createOneUserMutationObject,
      deleteMany: User.deleteManyUserMutationObject,
      deleteOne: User.deleteOneUserMutationObject,
      updateMany: User.updateManyUserMutationObject,
      updateOne: User.updateOneUserMutationObject,
      upsertOne: User.upsertOneUserMutationObject,
    },
  },
  Account: {
    Object: Account.AccountObject,
    queries: {
      findFirst: Account.findFirstAccountQueryObject,
      findMany: Account.findManyAccountQueryObject,
      count: Account.countAccountQueryObject,
      findUnique: Account.findUniqueAccountQueryObject,
    },
    mutations: {
      createMany: Account.createManyAccountMutationObject,
      createOne: Account.createOneAccountMutationObject,
      deleteMany: Account.deleteManyAccountMutationObject,
      deleteOne: Account.deleteOneAccountMutationObject,
      updateMany: Account.updateManyAccountMutationObject,
      updateOne: Account.updateOneAccountMutationObject,
      upsertOne: Account.upsertOneAccountMutationObject,
    },
  },
  Role: {
    Object: Role.RoleObject,
    queries: {
      findFirst: Role.findFirstRoleQueryObject,
      findMany: Role.findManyRoleQueryObject,
      count: Role.countRoleQueryObject,
      findUnique: Role.findUniqueRoleQueryObject,
    },
    mutations: {
      createMany: Role.createManyRoleMutationObject,
      createOne: Role.createOneRoleMutationObject,
      deleteMany: Role.deleteManyRoleMutationObject,
      deleteOne: Role.deleteOneRoleMutationObject,
      updateMany: Role.updateManyRoleMutationObject,
      updateOne: Role.updateOneRoleMutationObject,
      upsertOne: Role.upsertOneRoleMutationObject,
    },
  },
  Permission: {
    Object: Permission.PermissionObject,
    queries: {
      findFirst: Permission.findFirstPermissionQueryObject,
      findMany: Permission.findManyPermissionQueryObject,
      count: Permission.countPermissionQueryObject,
      findUnique: Permission.findUniquePermissionQueryObject,
    },
    mutations: {
      createMany: Permission.createManyPermissionMutationObject,
      createOne: Permission.createOnePermissionMutationObject,
      deleteMany: Permission.deleteManyPermissionMutationObject,
      deleteOne: Permission.deleteOnePermissionMutationObject,
      updateMany: Permission.updateManyPermissionMutationObject,
      updateOne: Permission.updateOnePermissionMutationObject,
      upsertOne: Permission.upsertOnePermissionMutationObject,
    },
  },
  UserRole: {
    Object: UserRole.UserRoleObject,
    queries: {
      findFirst: UserRole.findFirstUserRoleQueryObject,
      findMany: UserRole.findManyUserRoleQueryObject,
      count: UserRole.countUserRoleQueryObject,
      findUnique: UserRole.findUniqueUserRoleQueryObject,
    },
    mutations: {
      createMany: UserRole.createManyUserRoleMutationObject,
      createOne: UserRole.createOneUserRoleMutationObject,
      deleteMany: UserRole.deleteManyUserRoleMutationObject,
      deleteOne: UserRole.deleteOneUserRoleMutationObject,
      updateMany: UserRole.updateManyUserRoleMutationObject,
      updateOne: UserRole.updateOneUserRoleMutationObject,
      upsertOne: UserRole.upsertOneUserRoleMutationObject,
    },
  },
  RolePermission: {
    Object: RolePermission.RolePermissionObject,
    queries: {
      findFirst: RolePermission.findFirstRolePermissionQueryObject,
      findMany: RolePermission.findManyRolePermissionQueryObject,
      count: RolePermission.countRolePermissionQueryObject,
      findUnique: RolePermission.findUniqueRolePermissionQueryObject,
    },
    mutations: {
      createMany: RolePermission.createManyRolePermissionMutationObject,
      createOne: RolePermission.createOneRolePermissionMutationObject,
      deleteMany: RolePermission.deleteManyRolePermissionMutationObject,
      deleteOne: RolePermission.deleteOneRolePermissionMutationObject,
      updateMany: RolePermission.updateManyRolePermissionMutationObject,
      updateOne: RolePermission.updateOneRolePermissionMutationObject,
      upsertOne: RolePermission.upsertOneRolePermissionMutationObject,
    },
  },
};

const crudEntries = Object.entries(Cruds);

type ResolverType = "Query" | "Mutation";
function generateResolversByType(type: ResolverType, opts?: CrudOptions) {
  return crudEntries
    .filter(([modelName]) => includeModel(modelName, opts))
    .map(([modelName, config]) => {
      const resolverEntries = Object.entries(config[type === "Query" ? "queries" : "mutations"]);

      return resolverEntries.map(([operationName, resolverObjectDefiner]) => {
        const resolverName = operationName + modelName;
        const isntPrismaFieldList = ["count", "deleteMany", "updateMany"];
        const isPrismaField = !isntPrismaFieldList.includes(operationName);

        const getFields = (t: any) => {
          const field = resolverObjectDefiner(t);
          const handledField = opts?.handleResolver
            ? opts.handleResolver({
                field,
                modelName: modelName as Model,
                operationName,
                resolverName,
                t,
                isPrismaField,
                type,
              })
            : field;

          return {
            [resolverName]: isPrismaField
              ? t.prismaField(handledField)
              : t.field(handledField),
          }
        }

        return type === "Query"
          ? builder.queryFields((t) => getFields(t))
          : builder.mutationFields((t) => getFields(t));
      });
    });
}

export function generateAllObjects(opts?: CrudOptions) {
  return crudEntries
    .filter(([md]) => includeModel(md, opts))
    .map(([modelName, { Object }]) => {
      return builder.prismaObject(modelName as Model, Object); // Objects is all imports
    });
}

export function generateAllQueries(opts?: CrudOptions) {
  generateResolversByType("Query", opts);
}

export function generateAllMutations(opts?: CrudOptions) {
  generateResolversByType("Mutation", opts);
}

export function generateAllResolvers(opts?: CrudOptions) {
  generateResolversByType("Mutation", opts);
  generateResolversByType("Query", opts);
}

type CrudOptions = {
  include?: Model[];
  exclude?: Model[];
  /**
   * Caution: This is not type safe
   * Wrap all queries/mutations to override args, run extra code in resolve function (ie: throw errors, logs), apply plugins, etc.
   */
  handleResolver?: (props: {
    modelName: Model;
    field: any;
    operationName: string;
    resolverName: string;
    t: any;
    isPrismaField: boolean;
    type: ResolverType;
  }) => any;
};

const includeModel = (model: string, opts?: CrudOptions): boolean => {
  if (!opts) return true;
  if (opts.include) return opts.include.includes(model as Model);
  if (opts.exclude) return !opts.exclude.includes(model as Model);
  return true;
};

export function generateAllCrud(opts?: CrudOptions) {
  generateAllObjects(opts);
  generateAllQueries(opts);
  generateAllMutations(opts);
}
