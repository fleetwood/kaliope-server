import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_booksInput } from "../inputs/UserCreateOrConnectWithoutUser_booksInput";
import { UserCreateWithoutUser_booksInput } from "../inputs/UserCreateWithoutUser_booksInput";
import { UserUpdateWithoutUser_booksInput } from "../inputs/UserUpdateWithoutUser_booksInput";
import { UserUpsertWithoutUser_booksInput } from "../inputs/UserUpsertWithoutUser_booksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutUser_booksNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutUser_booksNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUser_booksInput, {
    nullable: true
  })
  create?: UserCreateWithoutUser_booksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUser_booksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_booksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutUser_booksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutUser_booksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_booksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutUser_booksInput | undefined;
}
