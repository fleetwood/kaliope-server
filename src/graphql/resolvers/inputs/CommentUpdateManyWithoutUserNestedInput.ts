import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyUserInputEnvelope } from "../inputs/CommentCreateManyUserInputEnvelope";
import { CommentCreateOrConnectWithoutUserInput } from "../inputs/CommentCreateOrConnectWithoutUserInput";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutUserInput } from "../inputs/CommentUpdateManyWithWhereWithoutUserInput";
import { CommentUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutUserInput";
import { CommentUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommentCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
