import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingCreateManyInput } from "../../../inputs/BookRatingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookRatingArgs {
  @TypeGraphQL.Field(_type => [BookRatingCreateManyInput], {
    nullable: false
  })
  data!: BookRatingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
