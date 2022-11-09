import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateManyAuthorInput } from "../inputs/BookRatingCreateManyAuthorInput";

@TypeGraphQL.InputType("BookRatingCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class BookRatingCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [BookRatingCreateManyAuthorInput], {
    nullable: false
  })
  data!: BookRatingCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
