import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutBook_commentsInput } from "../inputs/BookCreateNestedOneWithoutBook_commentsInput";
import { UserCreateNestedOneWithoutUser_commentsInput } from "../inputs/UserCreateNestedOneWithoutUser_commentsInput";

@TypeGraphQL.InputType("CommentCreateInput", {
  isAbstract: true
})
export class CommentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  commentid?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutUser_commentsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutUser_commentsInput;

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
