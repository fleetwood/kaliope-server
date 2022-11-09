import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyBookInput } from "../inputs/CommentCreateManyBookInput";

@TypeGraphQL.InputType("CommentCreateManyBookInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyBookInput], {
    nullable: false
  })
  data!: CommentCreateManyBookInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
