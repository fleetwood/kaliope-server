import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutAuthorInput } from "../inputs/BookCreateWithoutAuthorInput";
import { BookUpdateWithoutAuthorInput } from "../inputs/BookUpdateWithoutAuthorInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class BookUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: BookUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: BookCreateWithoutAuthorInput;
}
