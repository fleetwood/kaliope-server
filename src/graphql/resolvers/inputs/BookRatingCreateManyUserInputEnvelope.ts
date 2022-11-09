import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateManyUserInput } from "../inputs/BookRatingCreateManyUserInput";

@TypeGraphQL.InputType("BookRatingCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class BookRatingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BookRatingCreateManyUserInput], {
    nullable: false
  })
  data!: BookRatingCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
