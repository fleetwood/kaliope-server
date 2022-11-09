import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_commentsInput } from "../inputs/UserCreateOrConnectWithoutUser_commentsInput";
import { UserCreateWithoutUser_commentsInput } from "../inputs/UserCreateWithoutUser_commentsInput";
import { UserUpdateWithoutUser_commentsInput } from "../inputs/UserUpdateWithoutUser_commentsInput";
import { UserUpsertWithoutUser_commentsInput } from "../inputs/UserUpsertWithoutUser_commentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutUser_commentsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutUser_commentsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUser_commentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutUser_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUser_commentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutUser_commentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutUser_commentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_commentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutUser_commentsInput | undefined;
}
