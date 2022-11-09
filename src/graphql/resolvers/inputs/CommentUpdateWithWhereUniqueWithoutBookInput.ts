import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutBookInput } from "../inputs/CommentUpdateWithoutBookInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutBookInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutBookInput;
}