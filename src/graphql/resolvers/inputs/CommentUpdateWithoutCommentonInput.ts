import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingUpdateOneWithoutCommentNestedInput } from "../inputs/BookRatingUpdateOneWithoutCommentNestedInput";
import { BookUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/BookUpdateOneRequiredWithoutCommentsNestedInput";
import { CommentUpdateManyWithoutCommentonNestedInput } from "../inputs/CommentUpdateManyWithoutCommentonNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput";

@TypeGraphQL.InputType("CommentUpdateWithoutCommentonInput", {
  isAbstract: true
})
export class CommentUpdateWithoutCommentonInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCommentsNestedInput | undefined;

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

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutCommentonNestedInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutCommentonNestedInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true
  })
  book?: BookUpdateOneRequiredWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingUpdateOneWithoutCommentNestedInput, {
    nullable: true
  })
  bookrating?: BookRatingUpdateOneWithoutCommentNestedInput | undefined;
}
