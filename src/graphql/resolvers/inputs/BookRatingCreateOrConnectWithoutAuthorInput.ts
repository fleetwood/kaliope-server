import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateWithoutAuthorInput } from "../inputs/BookRatingCreateWithoutAuthorInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class BookRatingCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: BookRatingCreateWithoutAuthorInput;
}
