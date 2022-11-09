import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutBook_ratingsInput } from "../inputs/BookCreateNestedOneWithoutBook_ratingsInput";
import { UserCreateNestedOneWithoutUser_ratingsInput } from "../inputs/UserCreateNestedOneWithoutUser_ratingsInput";

@TypeGraphQL.InputType("BookRatingCreateInput", {
  isAbstract: true
})
export class BookRatingCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookratingid?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutUser_ratingsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutUser_ratingsInput;

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
