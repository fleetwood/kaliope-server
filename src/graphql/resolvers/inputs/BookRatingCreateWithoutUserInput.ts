import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedOneWithoutBookratingInput } from "../inputs/CommentCreateNestedOneWithoutBookratingInput";

@TypeGraphQL.InputType("BookRatingCreateWithoutUserInput", {
  isAbstract: true
})
export class BookRatingCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutBookratingInput, {
    nullable: true
  })
  comment?: CommentCreateNestedOneWithoutBookratingInput | undefined;
}
