import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutCommentonInput } from "../inputs/CommentUpdateWithoutCommentonInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutCommentonInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutCommentonInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutCommentonInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutCommentonInput;
}
