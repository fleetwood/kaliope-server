import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateManyUserInput } from "../inputs/BookCreateManyUserInput";

@TypeGraphQL.InputType("BookCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class BookCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BookCreateManyUserInput], {
    nullable: false
  })
  data!: BookCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
