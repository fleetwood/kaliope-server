import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRatingsInput } from "../inputs/UserCreateOrConnectWithoutRatingsInput";
import { UserCreateWithoutRatingsInput } from "../inputs/UserCreateWithoutRatingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutRatingsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutRatingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRatingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRatingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
