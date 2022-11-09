import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUser_ratingsInput } from "../inputs/UserCreateWithoutUser_ratingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutUser_ratingsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutUser_ratingsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_ratingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutUser_ratingsInput;
}
