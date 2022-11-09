import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBookratingsInput } from "../inputs/UserCreateWithoutBookratingsInput";
import { UserUpdateWithoutBookratingsInput } from "../inputs/UserUpdateWithoutBookratingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookratingsInput", {
  isAbstract: true
})
export class UserUpsertWithoutBookratingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBookratingsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBookratingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookratingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutBookratingsInput;
}
