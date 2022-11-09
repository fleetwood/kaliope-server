import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutBookInput } from "../inputs/CommentCreateWithoutBookInput";
import { CommentUpdateWithoutBookInput } from "../inputs/CommentUpdateWithoutBookInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutBookInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutBookInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutBookInput, {
    nullable: false
  })
  create!: CommentCreateWithoutBookInput;
}
