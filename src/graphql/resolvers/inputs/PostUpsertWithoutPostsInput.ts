import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPostsInput } from "../inputs/PostCreateWithoutPostsInput";
import { PostUpdateWithoutPostsInput } from "../inputs/PostUpdateWithoutPostsInput";

@TypeGraphQL.InputType("PostUpsertWithoutPostsInput", {
  isAbstract: true
})
export class PostUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPostsInput, {
    nullable: false
  })
  create!: PostCreateWithoutPostsInput;
}
