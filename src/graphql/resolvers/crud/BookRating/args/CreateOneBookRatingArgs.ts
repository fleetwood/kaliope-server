import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingCreateInput } from "../../../inputs/BookRatingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBookRatingArgs {
  @TypeGraphQL.Field(_type => BookRatingCreateInput, {
    nullable: false
  })
  data!: BookRatingCreateInput;
}
