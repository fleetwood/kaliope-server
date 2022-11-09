import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingWhereInput } from "../inputs/BookRatingWhereInput";

@TypeGraphQL.InputType("BookRatingRelationFilter", {
  isAbstract: true
})
export class BookRatingRelationFilter {
  @TypeGraphQL.Field(_type => BookRatingWhereInput, {
    nullable: true
  })
  is?: BookRatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingWhereInput, {
    nullable: true
  })
  isNot?: BookRatingWhereInput | undefined;
}
