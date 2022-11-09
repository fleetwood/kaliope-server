import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutBookratingInput } from "../inputs/CommentCreateWithoutBookratingInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutBookratingInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutBookratingInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutBookratingInput, {
    nullable: false
  })
  create!: CommentCreateWithoutBookratingInput;
}
