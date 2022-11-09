import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBooksInput } from "../inputs/UserCreateWithoutBooksInput";
import { UserUpdateWithoutBooksInput } from "../inputs/UserUpdateWithoutBooksInput";

@TypeGraphQL.InputType("UserUpsertWithoutBooksInput", {
  isAbstract: true
})
export class UserUpsertWithoutBooksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBooksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBooksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBooksInput, {
    nullable: false
  })
  create!: UserCreateWithoutBooksInput;
}
