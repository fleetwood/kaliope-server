import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutCommentsInput } from "../inputs/BookCreateWithoutCommentsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: BookCreateWithoutCommentsInput;
}
