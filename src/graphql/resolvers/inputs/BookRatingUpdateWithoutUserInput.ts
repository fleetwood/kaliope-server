import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateOneRequiredWithoutBookratingNestedInput } from "../inputs/CommentUpdateOneRequiredWithoutBookratingNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookRatingUpdateWithoutUserInput", {
  isAbstract: true
})
export class BookRatingUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateOneRequiredWithoutBookratingNestedInput, {
    nullable: true
  })
  comment?: CommentUpdateOneRequiredWithoutBookratingNestedInput | undefined;
}
