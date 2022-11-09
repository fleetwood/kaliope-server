import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_ratingsInput } from "../inputs/UserCreateOrConnectWithoutUser_ratingsInput";
import { UserCreateWithoutUser_ratingsInput } from "../inputs/UserCreateWithoutUser_ratingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutUser_ratingsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutUser_ratingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUser_ratingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutUser_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUser_ratingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
