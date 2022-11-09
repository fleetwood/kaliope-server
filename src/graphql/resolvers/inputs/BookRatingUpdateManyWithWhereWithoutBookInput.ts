import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingScalarWhereInput } from "../inputs/BookRatingScalarWhereInput";
import { BookRatingUpdateManyMutationInput } from "../inputs/BookRatingUpdateManyMutationInput";

@TypeGraphQL.InputType("BookRatingUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true
})
export class BookRatingUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field(_type => BookRatingScalarWhereInput, {
    nullable: false
  })
  where!: BookRatingScalarWhereInput;

  @TypeGraphQL.Field(_type => BookRatingUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookRatingUpdateManyMutationInput;
}
