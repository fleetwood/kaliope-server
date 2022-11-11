import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateOneRequiredWithoutBook_commentsNestedInput } from "../inputs/BookUpdateOneRequiredWithoutBook_commentsNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput";

@TypeGraphQL.InputType("CommentUpdateInput", {
  isAbstract: true
})
export class CommentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  commentid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutCommentsNestedInput | undefined;

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
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutBook_commentsNestedInput, {
    nullable: true
  })
  book?: BookUpdateOneRequiredWithoutBook_commentsNestedInput | undefined;
}
