import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCountOrderByAggregateInput } from "../inputs/PostCountOrderByAggregateInput";
import { PostMaxOrderByAggregateInput } from "../inputs/PostMaxOrderByAggregateInput";
import { PostMinOrderByAggregateInput } from "../inputs/PostMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostOrderByWithAggregationInput", {
  isAbstract: true
})
export class PostOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postid?: "asc" | "desc" | undefined;

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
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subtitle?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  header_image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  replytoid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostMinOrderByAggregateInput | undefined;
}
