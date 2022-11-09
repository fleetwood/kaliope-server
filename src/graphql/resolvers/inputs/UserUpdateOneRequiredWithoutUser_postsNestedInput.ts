import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_postsInput } from "../inputs/UserCreateOrConnectWithoutUser_postsInput";
import { UserCreateWithoutUser_postsInput } from "../inputs/UserCreateWithoutUser_postsInput";
import { UserUpdateWithoutUser_postsInput } from "../inputs/UserUpdateWithoutUser_postsInput";
import { UserUpsertWithoutUser_postsInput } from "../inputs/UserUpsertWithoutUser_postsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutUser_postsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutUser_postsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUser_postsInput, {
    nullable: true
  })
  create?: UserCreateWithoutUser_postsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUser_postsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_postsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutUser_postsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutUser_postsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_postsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutUser_postsInput | undefined;
}
