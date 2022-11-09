import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_postsInput } from "../inputs/UserCreateOrConnectWithoutUser_postsInput";
import { UserCreateWithoutUser_postsInput } from "../inputs/UserCreateWithoutUser_postsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutUser_postsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutUser_postsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUser_postsInput, {
    nullable: true
  })
  create?: UserCreateWithoutUser_postsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUser_postsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_postsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
