import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateWithoutBookInput } from "../inputs/BookRatingCreateWithoutBookInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingCreateOrConnectWithoutBookInput", {
  isAbstract: true
})
export class BookRatingCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: false
  })
  where!: BookRatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookRatingCreateWithoutBookInput, {
    nullable: false
  })
  create!: BookRatingCreateWithoutBookInput;
}
