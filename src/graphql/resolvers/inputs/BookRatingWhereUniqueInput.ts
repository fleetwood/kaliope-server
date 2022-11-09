import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BookRatingWhereUniqueInput", {
  isAbstract: true
})
export class BookRatingWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookratingid?: string | undefined;
}
