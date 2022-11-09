import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutCommentsInput } from "../inputs/CommentCreateWithoutCommentsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: CommentCreateWithoutCommentsInput;
}
