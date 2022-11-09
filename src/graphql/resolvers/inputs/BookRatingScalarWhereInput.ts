import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BookRatingScalarWhereInput", {
  isAbstract: true
})
export class BookRatingScalarWhereInput {
  @TypeGraphQL.Field(_type => [BookRatingScalarWhereInput], {
    nullable: true
  })
  AND?: BookRatingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingScalarWhereInput], {
    nullable: true
  })
  OR?: BookRatingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingScalarWhereInput], {
    nullable: true
  })
  NOT?: BookRatingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bookratingid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bookid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
