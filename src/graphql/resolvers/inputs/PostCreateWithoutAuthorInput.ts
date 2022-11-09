import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutPostInput } from "../inputs/PostCreateNestedManyWithoutPostInput";
import { PostCreateNestedOneWithoutPostsInput } from "../inputs/PostCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType("PostCreateWithoutAuthorInput", {
  isAbstract: true
})
export class PostCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtitle?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutPostsInput, {
    nullable: true
  })
  post?: PostCreateNestedOneWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutPostInput | undefined;
}
