import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingWhereInput } from "../../../inputs/BookRatingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookRatingArgs {
  @TypeGraphQL.Field(_type => BookRatingWhereInput, {
    nullable: true
  })
  where?: BookRatingWhereInput | undefined;
}
