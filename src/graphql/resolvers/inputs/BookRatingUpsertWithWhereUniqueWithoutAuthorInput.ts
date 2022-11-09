import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateWithoutAuthorInput } from "../inputs/BookRatingCreateWithoutAuthorInput";
import { BookRatingUpdateWithoutAuthorInput } from "../inputs/BookRatingUpdateWithoutAuthorInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class BookRatingUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: BookRatingUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => BookRatingCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: BookRatingCreateWithoutAuthorInput;
}
