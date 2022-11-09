import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutBookratingInput } from "../inputs/CommentCreateWithoutBookratingInput";
import { CommentUpdateWithoutBookratingInput } from "../inputs/CommentUpdateWithoutBookratingInput";

@TypeGraphQL.InputType("CommentUpsertWithoutBookratingInput", {
  isAbstract: true
})
export class CommentUpsertWithoutBookratingInput {
  @TypeGraphQL.Field(_type => CommentUpdateWithoutBookratingInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutBookratingInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutBookratingInput, {
    nullable: false
  })
  create!: CommentCreateWithoutBookratingInput;
}
