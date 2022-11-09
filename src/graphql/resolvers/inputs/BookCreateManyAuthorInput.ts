import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BookCreateManyAuthorInput", {
  isAbstract: true
})
export class BookCreateManyAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookid?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cover?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;
}
