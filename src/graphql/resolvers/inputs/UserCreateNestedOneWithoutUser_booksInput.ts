import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_booksInput } from "../inputs/UserCreateOrConnectWithoutUser_booksInput";
import { UserCreateWithoutUser_booksInput } from "../inputs/UserCreateWithoutUser_booksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutUser_booksInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutUser_booksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUser_booksInput, {
    nullable: true
  })
  create?: UserCreateWithoutUser_booksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUser_booksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_booksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
