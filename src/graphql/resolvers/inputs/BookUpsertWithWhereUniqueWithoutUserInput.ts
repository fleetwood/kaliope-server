import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutUserInput } from "../inputs/BookCreateWithoutUserInput";
import { BookUpdateWithoutUserInput } from "../inputs/BookUpdateWithoutUserInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BookUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookCreateWithoutUserInput;
}
