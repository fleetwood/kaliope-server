import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingUpdateInput } from "../../../inputs/BookRatingUpdateInput";
import { BookRatingWhereUniqueInput } from "../../../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBookRatingArgs {
  @TypeGraphQL.Field(_type => BookRatingUpdateInput, {
    nullable: false
  })
  data!: BookRatingUpdateInput;

  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;
}
