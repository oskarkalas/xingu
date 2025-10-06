/* eslint-disable */
import type { Prisma, User, Catalog } from "@prisma/client";
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
        RelationName: "catalog";
        ListRelations: "catalog";
        Relations: {
            catalog: {
                Shape: Catalog[];
                Name: "Catalog";
                Nullable: false;
            };
        };
    };
    Catalog: {
        Name: "Catalog";
        Shape: Catalog;
        Include: Prisma.CatalogInclude;
        Select: Prisma.CatalogSelect;
        OrderBy: Prisma.CatalogOrderByWithRelationInput;
        WhereUnique: Prisma.CatalogWhereUniqueInput;
        Where: Prisma.CatalogWhereInput;
        Create: {};
        Update: {};
        RelationName: "owner";
        ListRelations: never;
        Relations: {
            owner: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
}