import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingWhereUniqueInput } from "../../../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneBookRatingArgs {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;
}
