import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPostsInput } from "../inputs/PostCreateOrConnectWithoutPostsInput";
import { PostCreateWithoutPostsInput } from "../inputs/PostCreateWithoutPostsInput";
import { PostUpdateWithoutPostsInput } from "../inputs/PostUpdateWithoutPostsInput";
import { PostUpsertWithoutPostsInput } from "../inputs/PostUpsertWithoutPostsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneWithoutPostsNestedInput", {
  isAbstract: true
})
export class PostUpdateOneWithoutPostsNestedInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPostsInput, {
    nullable: true
  })
  create?: PostCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: PostUpdateWithoutPostsInput | undefined;
}
