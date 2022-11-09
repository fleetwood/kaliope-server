import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingWhereInput } from "../inputs/BookRatingWhereInput";

@TypeGraphQL.InputType("BookRatingListRelationFilter", {
  isAbstract: true
})
export class BookRatingListRelationFilter {
  @TypeGraphQL.Field(_type => BookRatingWhereInput, {
    nullable: true
  })
  every?: BookRatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingWhereInput, {
    nullable: true
  })
  some?: BookRatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingWhereInput, {
    nullable: true
  })
  none?: BookRatingWhereInput | undefined;
}
