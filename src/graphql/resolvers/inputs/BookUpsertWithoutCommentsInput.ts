import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutCommentsInput } from "../inputs/BookCreateWithoutCommentsInput";
import { BookUpdateWithoutCommentsInput } from "../inputs/BookUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("BookUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class BookUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => BookUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: BookUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: BookCreateWithoutCommentsInput;
}
