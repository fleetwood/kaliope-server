import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateManyBookInput } from "../inputs/BookRatingCreateManyBookInput";

@TypeGraphQL.InputType("BookRatingCreateManyBookInputEnvelope", {
  isAbstract: true
})
export class BookRatingCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(_type => [BookRatingCreateManyBookInput], {
    nullable: false
  })
  data!: BookRatingCreateManyBookInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
