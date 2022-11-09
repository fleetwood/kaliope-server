import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBookratingsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBookratingsNestedInput";

@TypeGraphQL.InputType("BookRatingUpdateWithoutCommentInput", {
  isAbstract: true
})
export class BookRatingUpdateWithoutCommentInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookratingsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBookratingsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
