import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutBook_commentsInput } from "../inputs/BookCreateWithoutBook_commentsInput";
import { BookUpdateWithoutBook_commentsInput } from "../inputs/BookUpdateWithoutBook_commentsInput";

@TypeGraphQL.InputType("BookUpsertWithoutBook_commentsInput", {
  isAbstract: true
})
export class BookUpsertWithoutBook_commentsInput {
  @TypeGraphQL.Field(_type => BookUpdateWithoutBook_commentsInput, {
    nullable: false
  })
  update!: BookUpdateWithoutBook_commentsInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutBook_commentsInput, {
    nullable: false
  })
  create!: BookCreateWithoutBook_commentsInput;
}
