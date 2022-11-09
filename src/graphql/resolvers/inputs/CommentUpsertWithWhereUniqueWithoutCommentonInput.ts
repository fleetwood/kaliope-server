import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutCommentonInput } from "../inputs/CommentCreateWithoutCommentonInput";
import { CommentUpdateWithoutCommentonInput } from "../inputs/CommentUpdateWithoutCommentonInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutCommentonInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutCommentonInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutCommentonInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutCommentonInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentonInput, {
    nullable: false
  })
  create!: CommentCreateWithoutCommentonInput;
}
