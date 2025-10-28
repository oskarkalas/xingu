/* eslint-disable */
import type { Prisma, User, Account, Role, Permission, UserRole, RolePermission, PasswordResetToken, VerificationToken } from "@prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "roles" | "accounts" | "PasswordResetToken" | "VerificationToken";
        ListRelations: "roles" | "accounts" | "PasswordResetToken" | "VerificationToken";
        Relations: {
            roles: {
                Shape: UserRole[];
                Name: "UserRole";
                Nullable: false;
            };
            accounts: {
                Shape: Account[];
                Name: "Account";
                Nullable: false;
            };
            PasswordResetToken: {
                Shape: PasswordResetToken[];
                Name: "PasswordResetToken";
                Nullable: false;
            };
            VerificationToken: {
                Shape: VerificationToken[];
                Name: "VerificationToken";
                Nullable: false;
            };
        };
    };
    Account: {
        Name: "Account";
        Shape: Account;
        Include: Prisma.AccountInclude;
        Select: Prisma.AccountSelect;
        OrderBy: Prisma.AccountOrderByWithRelationInput;
        WhereUnique: Prisma.AccountWhereUniqueInput;
        Where: Prisma.AccountWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    Role: {
        Name: "Role";
        Shape: Role;
        Include: Prisma.RoleInclude;
        Select: Prisma.RoleSelect;
        OrderBy: Prisma.RoleOrderByWithRelationInput;
        WhereUnique: Prisma.RoleWhereUniqueInput;
        Where: Prisma.RoleWhereInput;
        Create: {};
        Update: {};
        RelationName: "users" | "permissions";
        ListRelations: "users" | "permissions";
        Relations: {
            users: {
                Shape: UserRole[];
                Name: "UserRole";
                Nullable: false;
            };
            permissions: {
                Shape: RolePermission[];
                Name: "RolePermission";
                Nullable: false;
            };
        };
    };
    Permission: {
        Name: "Permission";
        Shape: Permission;
        Include: Prisma.PermissionInclude;
        Select: Prisma.PermissionSelect;
        OrderBy: Prisma.PermissionOrderByWithRelationInput;
        WhereUnique: Prisma.PermissionWhereUniqueInput;
        Where: Prisma.PermissionWhereInput;
        Create: {};
        Update: {};
        RelationName: "roles";
        ListRelations: "roles";
        Relations: {
            roles: {
                Shape: RolePermission[];
                Name: "RolePermission";
                Nullable: false;
            };
        };
    };
    UserRole: {
        Name: "UserRole";
        Shape: UserRole;
        Include: Prisma.UserRoleInclude;
        Select: Prisma.UserRoleSelect;
        OrderBy: Prisma.UserRoleOrderByWithRelationInput;
        WhereUnique: Prisma.UserRoleWhereUniqueInput;
        Where: Prisma.UserRoleWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "role";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            role: {
                Shape: Role;
                Name: "Role";
                Nullable: false;
            };
        };
    };
    RolePermission: {
        Name: "RolePermission";
        Shape: RolePermission;
        Include: Prisma.RolePermissionInclude;
        Select: Prisma.RolePermissionSelect;
        OrderBy: Prisma.RolePermissionOrderByWithRelationInput;
        WhereUnique: Prisma.RolePermissionWhereUniqueInput;
        Where: Prisma.RolePermissionWhereInput;
        Create: {};
        Update: {};
        RelationName: "role" | "permission";
        ListRelations: never;
        Relations: {
            role: {
                Shape: Role;
                Name: "Role";
                Nullable: false;
            };
            permission: {
                Shape: Permission;
                Name: "Permission";
                Nullable: false;
            };
        };
    };
    PasswordResetToken: {
        Name: "PasswordResetToken";
        Shape: PasswordResetToken;
        Include: Prisma.PasswordResetTokenInclude;
        Select: Prisma.PasswordResetTokenSelect;
        OrderBy: Prisma.PasswordResetTokenOrderByWithRelationInput;
        WhereUnique: Prisma.PasswordResetTokenWhereUniqueInput;
        Where: Prisma.PasswordResetTokenWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    VerificationToken: {
        Name: "VerificationToken";
        Shape: VerificationToken;
        Include: Prisma.VerificationTokenInclude;
        Select: Prisma.VerificationTokenSelect;
        OrderBy: Prisma.VerificationTokenOrderByWithRelationInput;
        WhereUnique: Prisma.VerificationTokenWhereUniqueInput;
        Where: Prisma.VerificationTokenWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
}