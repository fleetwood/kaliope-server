import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingUpdateWithoutUserInput } from "../inputs/BookRatingUpdateWithoutUserInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookRatingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BookRatingUpdateWithoutUserInput;
}
