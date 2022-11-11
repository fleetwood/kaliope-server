import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingUpdateManyWithoutBookNestedInput } from "../inputs/BookRatingUpdateManyWithoutBookNestedInput";
import { CommentUpdateManyWithoutBookNestedInput } from "../inputs/CommentUpdateManyWithoutBookNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBooksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBooksNestedInput";

@TypeGraphQL.InputType("BookUpdateInput", {
  isAbstract: true
})
export class BookUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bookid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBooksNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutBooksNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  cover?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutBookNestedInput, {
    nullable: true
  })
  book_comments?: CommentUpdateManyWithoutBookNestedInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingUpdateManyWithoutBookNestedInput, {
    nullable: true
  })
  book_ratings?: BookRatingUpdateManyWithoutBookNestedInput | undefined;
}
