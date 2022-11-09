import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutCommentsInput } from "../inputs/CommentCreateOrConnectWithoutCommentsInput";
import { CommentCreateWithoutCommentsInput } from "../inputs/CommentCreateWithoutCommentsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class CommentCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: CommentCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;
}
