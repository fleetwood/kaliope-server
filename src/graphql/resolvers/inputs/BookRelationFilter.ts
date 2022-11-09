import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookWhereInput } from "../inputs/BookWhereInput";

@TypeGraphQL.InputType("BookRelationFilter", {
  isAbstract: true
})
export class BookRelationFilter {
  @TypeGraphQL.Field(_type => BookWhereInput, {
    nullable: true
  })
  is?: BookWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereInput, {
    nullable: true
  })
  isNot?: BookWhereInput | undefined;
}
