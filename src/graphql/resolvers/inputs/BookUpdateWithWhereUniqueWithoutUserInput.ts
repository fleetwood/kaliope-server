import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateWithoutUserInput } from "../inputs/BookUpdateWithoutUserInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BookUpdateWithoutUserInput;
}
