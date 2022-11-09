import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutBook_commentsInput } from "../inputs/BookCreateNestedOneWithoutBook_commentsInput";

@TypeGraphQL.InputType("CommentCreateWithoutAuthorInput", {
  isAbstract: true
})
export class CommentCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  commentid?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutBook_commentsInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutBook_commentsInput;
}
