import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedOneWithoutBookratingInput } from "../inputs/CommentCreateNestedOneWithoutBookratingInput";
import { UserCreateNestedOneWithoutBookratingsInput } from "../inputs/UserCreateNestedOneWithoutBookratingsInput";

@TypeGraphQL.InputType("BookRatingCreateInput", {
  isAbstract: true
})
export class BookRatingCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookratingsInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutBookratingsInput | undefined;

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
