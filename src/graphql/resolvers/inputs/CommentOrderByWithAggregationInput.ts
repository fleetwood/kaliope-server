import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCountOrderByAggregateInput } from "../inputs/CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "../inputs/CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "../inputs/CommentMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentOrderByWithAggregationInput", {
  isAbstract: true
})
export class CommentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  commentid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  commentingid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CommentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CommentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CommentMinOrderByAggregateInput | undefined;
}
