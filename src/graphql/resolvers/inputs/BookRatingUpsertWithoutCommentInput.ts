import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateWithoutCommentInput } from "../inputs/BookRatingCreateWithoutCommentInput";
import { BookRatingUpdateWithoutCommentInput } from "../inputs/BookRatingUpdateWithoutCommentInput";

@TypeGraphQL.InputType("BookRatingUpsertWithoutCommentInput", {
  isAbstract: true
})
export class BookRatingUpsertWithoutCommentInput {
  @TypeGraphQL.Field(_type => BookRatingUpdateWithoutCommentInput, {
    nullable: false
  })
  update!: BookRatingUpdateWithoutCommentInput;

  @TypeGraphQL.Field(_type => BookRatingCreateWithoutCommentInput, {
    nullable: false
  })
  create!: BookRatingCreateWithoutCommentInput;
}
