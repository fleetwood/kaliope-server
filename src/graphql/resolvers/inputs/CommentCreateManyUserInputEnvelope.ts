import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyUserInput } from "../inputs/CommentCreateManyUserInput";

@TypeGraphQL.InputType("CommentCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyUserInput], {
    nullable: false
  })
  data!: CommentCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
