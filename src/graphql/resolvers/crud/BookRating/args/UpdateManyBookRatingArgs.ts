import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingUpdateManyMutationInput } from "../../../inputs/BookRatingUpdateManyMutationInput";
import { BookRatingWhereInput } from "../../../inputs/BookRatingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookRatingArgs {
  @TypeGraphQL.Field(_type => BookRatingUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookRatingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookRatingWhereInput, {
    nullable: true
  })
  where?: BookRatingWhereInput | undefined;
}
