import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutPostInput } from "../inputs/PostCreateNestedManyWithoutPostInput";
import { PostCreateNestedOneWithoutPostsInput } from "../inputs/PostCreateNestedOneWithoutPostsInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType("PostCreateInput", {
  isAbstract: true
})
export class PostCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput, {
    nullable: true
  })
  author?: UserCreateNestedOneWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutPostsInput, {
    nullable: true
  })
  post?: PostCreateNestedOneWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutPostInput | undefined;
}
