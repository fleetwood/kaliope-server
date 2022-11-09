import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingWhereUniqueInput } from "../../../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookRatingArgs {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;
}
