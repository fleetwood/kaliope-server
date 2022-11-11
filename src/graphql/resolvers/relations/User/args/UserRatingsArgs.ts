import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookRatingOrderByWithRelationInput } from "../../../inputs/BookRatingOrderByWithRelationInput";
import { BookRatingWhereInput } from "../../../inputs/BookRatingWhereInput";
import { BookRatingWhereUniqueInput } from "../../../inputs/BookRatingWhereUniqueInput";
import { BookRatingScalarFieldEnum } from "../../../../enums/BookRatingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserRatingsArgs {
  @TypeGraphQL.Field(_type => BookRatingWhereInput, {
    nullable: true
  })
  where?: BookRatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookRatingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookRatingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookRatingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BookRatingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"bookratingid" | "authorid" | "bookid" | "created_at" | "updated_at"> | undefined;
}
