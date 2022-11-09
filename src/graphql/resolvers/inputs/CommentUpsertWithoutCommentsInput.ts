import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutCommentsInput } from "../inputs/CommentCreateWithoutCommentsInput";
import { CommentUpdateWithoutCommentsInput } from "../inputs/CommentUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("CommentUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class CommentUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => CommentUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: CommentCreateWithoutCommentsInput;
}
