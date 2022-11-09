import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateWithoutUserInput } from "../inputs/BookRatingCreateWithoutUserInput";
import { BookRatingUpdateWithoutUserInput } from "../inputs/BookRatingUpdateWithoutUserInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookRatingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BookRatingUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BookRatingCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookRatingCreateWithoutUserInput;
}
