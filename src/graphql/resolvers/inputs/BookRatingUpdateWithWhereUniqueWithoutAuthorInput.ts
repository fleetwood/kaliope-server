import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingUpdateWithoutAuthorInput } from "../inputs/BookRatingUpdateWithoutAuthorInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class BookRatingUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: BookRatingUpdateWithoutAuthorInput;
}
