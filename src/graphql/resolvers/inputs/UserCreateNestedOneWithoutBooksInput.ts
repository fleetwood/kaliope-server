import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBooksInput } from "../inputs/UserCreateOrConnectWithoutBooksInput";
import { UserCreateWithoutBooksInput } from "../inputs/UserCreateWithoutBooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBooksInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutBooksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBooksInput, {
    nullable: true
  })
  create?: UserCreateWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBooksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
