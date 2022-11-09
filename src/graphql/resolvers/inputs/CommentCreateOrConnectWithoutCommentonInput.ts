import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutCommentonInput } from "../inputs/CommentCreateWithoutCommentonInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutCommentonInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutCommentonInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentonInput, {
    nullable: false
  })
  create!: CommentCreateWithoutCommentonInput;
}
