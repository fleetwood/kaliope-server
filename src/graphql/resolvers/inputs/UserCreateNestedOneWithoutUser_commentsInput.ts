import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_commentsInput } from "../inputs/UserCreateOrConnectWithoutUser_commentsInput";
import { UserCreateWithoutUser_commentsInput } from "../inputs/UserCreateWithoutUser_commentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutUser_commentsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutUser_commentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUser_commentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutUser_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUser_commentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
