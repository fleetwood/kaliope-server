import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutRatingsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutRatingsNestedInput";

@TypeGraphQL.InputType("BookRatingUpdateWithoutBookInput", {
  isAbstract: true
})
export class BookRatingUpdateWithoutBookInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bookratingid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRatingsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutRatingsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
