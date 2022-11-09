import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyPostInputEnvelope } from "../inputs/PostCreateManyPostInputEnvelope";
import { PostCreateOrConnectWithoutPostInput } from "../inputs/PostCreateOrConnectWithoutPostInput";
import { PostCreateWithoutPostInput } from "../inputs/PostCreateWithoutPostInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutPostInput", {
  isAbstract: true
})
export class PostCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
