import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_booksInput } from "../inputs/UserCreateWithoutUser_booksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutUser_booksInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutUser_booksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_booksInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_booksInput;
}
