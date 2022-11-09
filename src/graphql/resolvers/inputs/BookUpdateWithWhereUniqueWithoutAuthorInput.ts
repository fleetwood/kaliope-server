import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateWithoutAuthorInput } from "../inputs/BookUpdateWithoutAuthorInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class BookUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: BookUpdateWithoutAuthorInput;
}
