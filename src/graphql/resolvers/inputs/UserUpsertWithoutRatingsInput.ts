import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRatingsInput } from "../inputs/UserCreateWithoutRatingsInput";
import { UserUpdateWithoutRatingsInput } from "../inputs/UserUpdateWithoutRatingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutRatingsInput", {
  isAbstract: true
})
export class UserUpsertWithoutRatingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutRatingsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRatingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRatingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutRatingsInput;
}
