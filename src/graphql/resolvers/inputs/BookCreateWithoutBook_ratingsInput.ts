import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutBookInput } from "../inputs/CommentCreateNestedManyWithoutBookInput";
import { UserCreateNestedOneWithoutBooksInput } from "../inputs/UserCreateNestedOneWithoutBooksInput";

@TypeGraphQL.InputType("BookCreateWithoutBook_ratingsInput", {
  isAbstract: true
})
export class BookCreateWithoutBook_ratingsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookid?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cover?: string | undefined;

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
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBooksInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutBooksInput;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutBookInput, {
    nullable: true
  })
  book_comments?: CommentCreateNestedManyWithoutBookInput | undefined;
}
