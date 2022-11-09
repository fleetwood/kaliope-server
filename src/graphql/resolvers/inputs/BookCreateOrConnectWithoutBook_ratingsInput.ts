import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutBook_ratingsInput } from "../inputs/BookCreateWithoutBook_ratingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutBook_ratingsInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutBook_ratingsInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutBook_ratingsInput, {
    nullable: false
  })
  create!: BookCreateWithoutBook_ratingsInput;
}
