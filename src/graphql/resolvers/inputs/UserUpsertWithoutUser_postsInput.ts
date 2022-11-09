import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_postsInput } from "../inputs/UserCreateWithoutUser_postsInput";
import { UserUpdateWithoutUser_postsInput } from "../inputs/UserUpdateWithoutUser_postsInput";

@TypeGraphQL.InputType("UserUpsertWithoutUser_postsInput", {
  isAbstract: true
})
export class UserUpsertWithoutUser_postsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_postsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUser_postsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_postsInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_postsInput;
}
