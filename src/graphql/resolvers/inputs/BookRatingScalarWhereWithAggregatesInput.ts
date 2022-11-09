import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookRatingScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BookRatingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookRatingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookRatingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookRatingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookRatingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  bookratingid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  authorid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  bookid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
