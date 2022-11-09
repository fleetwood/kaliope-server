import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_commentsInput } from "../inputs/UserCreateWithoutUser_commentsInput";
import { UserUpdateWithoutUser_commentsInput } from "../inputs/UserUpdateWithoutUser_commentsInput";

@TypeGraphQL.InputType("UserUpsertWithoutUser_commentsInput", {
  isAbstract: true
})
export class UserUpsertWithoutUser_commentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_commentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUser_commentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_commentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_commentsInput;
}
