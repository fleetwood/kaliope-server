import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingUpdateWithoutBookInput } from "../inputs/BookRatingUpdateWithoutBookInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class BookRatingUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingUpdateWithoutBookInput, {
    nullable: false
  })
  data!: BookRatingUpdateWithoutBookInput;
}
