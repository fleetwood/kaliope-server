import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRelationFilter } from "../inputs/CommentRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("BookRatingWhereInput", {
  isAbstract: true
})
export class BookRatingWhereInput {
  @TypeGraphQL.Field(_type => [BookRatingWhereInput], {
    nullable: true
  })
  AND?: BookRatingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingWhereInput], {
    nullable: true
  })
  OR?: BookRatingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingWhereInput], {
    nullable: true
  })
  NOT?: BookRatingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bookratingid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CommentRelationFilter, {
    nullable: true
  })
  comment?: CommentRelationFilter | undefined;
}
