import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_ratingsInput } from "../inputs/UserCreateOrConnectWithoutUser_ratingsInput";
import { UserCreateWithoutUser_ratingsInput } from "../inputs/UserCreateWithoutUser_ratingsInput";
import { UserUpdateWithoutUser_ratingsInput } from "../inputs/UserUpdateWithoutUser_ratingsInput";
import { UserUpsertWithoutUser_ratingsInput } from "../inputs/UserUpsertWithoutUser_ratingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutUser_ratingsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutUser_ratingsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUser_ratingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutUser_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUser_ratingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutUser_ratingsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutUser_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_ratingsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutUser_ratingsInput | undefined;
}
