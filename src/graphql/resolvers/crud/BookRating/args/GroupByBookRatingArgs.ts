import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingOrderByWithAggregationInput } from "../../../inputs/BookRatingOrderByWithAggregationInput";
import { BookRatingScalarWhereWithAggregatesInput } from "../../../inputs/BookRatingScalarWhereWithAggregatesInput";
import { BookRatingWhereInput } from "../../../inputs/BookRatingWhereInput";
import { BookRatingScalarFieldEnum } from "../../../../enums/BookRatingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookRatingArgs {
  @TypeGraphQL.Field(_type => BookRatingWhereInput, {
    nullable: true
  })
  where?: BookRatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookRatingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookRatingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"bookratingid" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => BookRatingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookRatingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
