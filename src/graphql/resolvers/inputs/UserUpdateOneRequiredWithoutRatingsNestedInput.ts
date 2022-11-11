import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRatingsInput } from "../inputs/UserCreateOrConnectWithoutRatingsInput";
import { UserCreateWithoutRatingsInput } from "../inputs/UserCreateWithoutRatingsInput";
import { UserUpdateWithoutRatingsInput } from "../inputs/UserUpdateWithoutRatingsInput";
import { UserUpsertWithoutRatingsInput } from "../inputs/UserUpsertWithoutRatingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutRatingsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutRatingsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRatingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRatingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutRatingsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutRatingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRatingsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutRatingsInput | undefined;
}
