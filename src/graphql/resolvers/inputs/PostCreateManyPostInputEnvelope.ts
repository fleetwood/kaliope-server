import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyPostInput } from "../inputs/PostCreateManyPostInput";

@TypeGraphQL.InputType("PostCreateManyPostInputEnvelope", {
  isAbstract: true
})
export class PostCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyPostInput], {
    nullable: false
  })
  data!: PostCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
