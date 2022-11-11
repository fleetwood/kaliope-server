import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateOneRequiredWithoutBook_ratingsNestedInput } from "../inputs/BookUpdateOneRequiredWithoutBook_ratingsNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutRatingsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutRatingsNestedInput";

@TypeGraphQL.InputType("BookRatingUpdateInput", {
  isAbstract: true
})
export class BookRatingUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bookratingid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRatingsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutRatingsNestedInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutBook_ratingsNestedInput, {
    nullable: true
  })
  book?: BookUpdateOneRequiredWithoutBook_ratingsNestedInput | undefined;
}
