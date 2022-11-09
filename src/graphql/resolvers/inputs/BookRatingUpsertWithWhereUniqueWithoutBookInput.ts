import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateWithoutBookInput } from "../inputs/BookRatingCreateWithoutBookInput";
import { BookRatingUpdateWithoutBookInput } from "../inputs/BookRatingUpdateWithoutBookInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class BookRatingUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingUpdateWithoutBookInput, {
    nullable: false
  })
  update!: BookRatingUpdateWithoutBookInput;

  @TypeGraphQL.Field(_type => BookRatingCreateWithoutBookInput, {
    nullable: false
  })
  create!: BookRatingCreateWithoutBookInput;
}
