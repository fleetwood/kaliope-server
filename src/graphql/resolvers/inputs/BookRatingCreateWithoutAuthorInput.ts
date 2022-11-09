import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutBook_ratingsInput } from "../inputs/BookCreateNestedOneWithoutBook_ratingsInput";

@TypeGraphQL.InputType("BookRatingCreateWithoutAuthorInput", {
  isAbstract: true
})
export class BookRatingCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookratingid?: string | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutBook_ratingsInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutBook_ratingsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
