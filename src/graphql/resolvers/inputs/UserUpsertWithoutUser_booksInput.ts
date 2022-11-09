import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_booksInput } from "../inputs/UserCreateWithoutUser_booksInput";
import { UserUpdateWithoutUser_booksInput } from "../inputs/UserUpdateWithoutUser_booksInput";

@TypeGraphQL.InputType("UserUpsertWithoutUser_booksInput", {
  isAbstract: true
})
export class UserUpsertWithoutUser_booksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_booksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUser_booksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_booksInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_booksInput;
}
