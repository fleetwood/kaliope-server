import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookratingsInput } from "../inputs/UserCreateOrConnectWithoutBookratingsInput";
import { UserCreateWithoutBookratingsInput } from "../inputs/UserCreateWithoutBookratingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBookratingsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutBookratingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookratingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutBookratingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookratingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookratingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
