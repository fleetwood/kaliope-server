import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_ratingsInput } from "../inputs/UserCreateWithoutUser_ratingsInput";
import { UserUpdateWithoutUser_ratingsInput } from "../inputs/UserUpdateWithoutUser_ratingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutUser_ratingsInput", {
  isAbstract: true
})
export class UserUpsertWithoutUser_ratingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_ratingsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUser_ratingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_ratingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_ratingsInput;
}
