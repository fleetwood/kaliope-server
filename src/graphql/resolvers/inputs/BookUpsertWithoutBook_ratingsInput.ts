import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutBook_ratingsInput } from "../inputs/BookCreateWithoutBook_ratingsInput";
import { BookUpdateWithoutBook_ratingsInput } from "../inputs/BookUpdateWithoutBook_ratingsInput";

@TypeGraphQL.InputType("BookUpsertWithoutBook_ratingsInput", {
  isAbstract: true
})
export class BookUpsertWithoutBook_ratingsInput {
  @TypeGraphQL.Field(_type => BookUpdateWithoutBook_ratingsInput, {
    nullable: false
  })
  update!: BookUpdateWithoutBook_ratingsInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutBook_ratingsInput, {
    nullable: false
  })
  create!: BookCreateWithoutBook_ratingsInput;
}
