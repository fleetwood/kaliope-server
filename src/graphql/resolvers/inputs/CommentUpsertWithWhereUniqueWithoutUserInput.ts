import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentUpdateWithoutUserInput } from "../inputs/CommentUpdateWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutUserInput, {
    nullable: false
  })
  create!: CommentCreateWithoutUserInput;
}
