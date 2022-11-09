import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyCommentonInput } from "../inputs/CommentCreateManyCommentonInput";

@TypeGraphQL.InputType("CommentCreateManyCommentonInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyCommentonInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyCommentonInput], {
    nullable: false
  })
  data!: CommentCreateManyCommentonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
