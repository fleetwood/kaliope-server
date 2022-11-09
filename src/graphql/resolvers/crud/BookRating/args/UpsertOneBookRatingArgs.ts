import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingCreateInput } from "../../../inputs/BookRatingCreateInput";
import { BookRatingUpdateInput } from "../../../inputs/BookRatingUpdateInput";
import { BookRatingWhereUniqueInput } from "../../../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBookRatingArgs {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingCreateInput, {
    nullable: false
  })
  create!: BookRatingCreateInput;

  @TypeGraphQL.Field(_type => BookRatingUpdateInput, {
    nullable: false
  })
  update!: BookRatingUpdateInput;
}
