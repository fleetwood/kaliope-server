import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BookWhereUniqueInput", {
  isAbstract: true
})
export class BookWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookid?: string | undefined;
}
