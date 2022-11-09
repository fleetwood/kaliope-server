import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateNestedManyWithoutBookInput } from "../inputs/BookRatingCreateNestedManyWithoutBookInput";
import { UserCreateNestedOneWithoutUser_booksInput } from "../inputs/UserCreateNestedOneWithoutUser_booksInput";

@TypeGraphQL.InputType("BookCreateWithoutBook_commentsInput", {
  isAbstract: true
})
export class BookCreateWithoutBook_commentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookid?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutUser_booksInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutUser_booksInput;

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

  @TypeGraphQL.Field(_type => BookRatingCreateNestedManyWithoutBookInput, {
    nullable: true
  })
  book_ratings?: BookRatingCreateNestedManyWithoutBookInput | undefined;
}
