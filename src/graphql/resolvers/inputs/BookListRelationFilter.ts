import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookWhereInput } from "../inputs/BookWhereInput";

@TypeGraphQL.InputType("BookListRelationFilter", {
  isAbstract: true
})
export class BookListRelationFilter {
  @TypeGraphQL.Field(_type => BookWhereInput, {
    nullable: true
  })
  every?: BookWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereInput, {
    nullable: true
  })
  some?: BookWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereInput, {
    nullable: true
  })
  none?: BookWhereInput | undefined;
}
