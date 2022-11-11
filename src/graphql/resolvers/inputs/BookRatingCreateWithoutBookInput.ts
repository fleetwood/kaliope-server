import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutRatingsInput } from "../inputs/UserCreateNestedOneWithoutRatingsInput";

@TypeGraphQL.InputType("BookRatingCreateWithoutBookInput", {
  isAbstract: true
})
export class BookRatingCreateWithoutBookInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookratingid?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRatingsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutRatingsInput;
}
