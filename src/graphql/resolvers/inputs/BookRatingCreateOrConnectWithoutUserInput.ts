import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateWithoutUserInput } from "../inputs/BookRatingCreateWithoutUserInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class BookRatingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookRatingCreateWithoutUserInput;
}
