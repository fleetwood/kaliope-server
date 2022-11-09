import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookScalarWhereInput } from "../inputs/BookScalarWhereInput";
import { BookUpdateManyMutationInput } from "../inputs/BookUpdateManyMutationInput";

@TypeGraphQL.InputType("BookUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class BookUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => BookScalarWhereInput, {
    nullable: false
  })
  where!: BookScalarWhereInput;

  @TypeGraphQL.Field(_type => BookUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookUpdateManyMutationInput;
}
