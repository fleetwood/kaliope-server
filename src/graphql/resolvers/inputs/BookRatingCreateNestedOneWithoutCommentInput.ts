import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateOrConnectWithoutCommentInput } from "../inputs/BookRatingCreateOrConnectWithoutCommentInput";
import { BookRatingCreateWithoutCommentInput } from "../inputs/BookRatingCreateWithoutCommentInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingCreateNestedOneWithoutCommentInput", {
  isAbstract: true
})
export class BookRatingCreateNestedOneWithoutCommentInput {
  @TypeGraphQL.Field(_type => BookRatingCreateWithoutCommentInput, {
    nullable: true
  })
  create?: BookRatingCreateWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateOrConnectWithoutCommentInput, {
    nullable: true
  })
  connectOrCreate?: BookRatingCreateOrConnectWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: true
  })
  connect?: BookRatingWhereUniqueInput | undefined;
}
