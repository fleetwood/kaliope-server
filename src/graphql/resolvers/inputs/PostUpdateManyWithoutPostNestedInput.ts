import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyPostInputEnvelope } from "../inputs/PostCreateManyPostInputEnvelope";
import { PostCreateOrConnectWithoutPostInput } from "../inputs/PostCreateOrConnectWithoutPostInput";
import { PostCreateWithoutPostInput } from "../inputs/PostCreateWithoutPostInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutPostInput } from "../inputs/PostUpdateManyWithWhereWithoutPostInput";
import { PostUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PostUpdateWithWhereUniqueWithoutPostInput";
import { PostUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PostUpsertWithWhereUniqueWithoutPostInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutPostNestedInput", {
  isAbstract: true
})
export class PostUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
