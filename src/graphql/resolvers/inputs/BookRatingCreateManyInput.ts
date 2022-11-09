import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BookRatingCreateManyInput", {
  isAbstract: true
})
export class BookRatingCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookratingid?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookid!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
