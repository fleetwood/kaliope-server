import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCountOrderByAggregateInput } from "../inputs/BookRatingCountOrderByAggregateInput";
import { BookRatingMaxOrderByAggregateInput } from "../inputs/BookRatingMaxOrderByAggregateInput";
import { BookRatingMinOrderByAggregateInput } from "../inputs/BookRatingMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookRatingOrderByWithAggregationInput", {
  isAbstract: true
})
export class BookRatingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookratingid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookRatingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookRatingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookRatingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookRatingMinOrderByAggregateInput | undefined;
}
