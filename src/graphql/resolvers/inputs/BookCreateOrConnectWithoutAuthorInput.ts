import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutAuthorInput } from "../inputs/BookCreateWithoutAuthorInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: BookCreateWithoutAuthorInput;
}
