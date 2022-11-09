import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutBook_commentsInput } from "../inputs/BookCreateWithoutBook_commentsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutBook_commentsInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutBook_commentsInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutBook_commentsInput, {
    nullable: false
  })
  create!: BookCreateWithoutBook_commentsInput;
}
