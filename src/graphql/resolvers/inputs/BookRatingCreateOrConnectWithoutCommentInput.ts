import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateWithoutCommentInput } from "../inputs/BookRatingCreateWithoutCommentInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingCreateOrConnectWithoutCommentInput", {
  isAbstract: true
})
export class BookRatingCreateOrConnectWithoutCommentInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingCreateWithoutCommentInput, {
    nullable: false
  })
  create!: BookRatingCreateWithoutCommentInput;
}
