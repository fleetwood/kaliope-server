import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutUserInput } from "../inputs/BookCreateWithoutUserInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookCreateWithoutUserInput;
}
