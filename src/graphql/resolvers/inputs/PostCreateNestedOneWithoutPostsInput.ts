import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPostsInput } from "../inputs/PostCreateOrConnectWithoutPostsInput";
import { PostCreateWithoutPostsInput } from "../inputs/PostCreateWithoutPostsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutPostsInput", {
  isAbstract: true
})
export class PostCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPostsInput, {
    nullable: true
  })
  create?: PostCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
