import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyBookInputEnvelope } from "../inputs/CommentCreateManyBookInputEnvelope";
import { CommentCreateOrConnectWithoutBookInput } from "../inputs/CommentCreateOrConnectWithoutBookInput";
import { CommentCreateWithoutBookInput } from "../inputs/CommentCreateWithoutBookInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutBookInput } from "../inputs/CommentUpdateManyWithWhereWithoutBookInput";
import { CommentUpdateWithWhereUniqueWithoutBookInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutBookInput";
import { CommentUpsertWithWhereUniqueWithoutBookInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutBookInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutBookNestedInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutBookNestedInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutBookInput], {
    nullable: true
  })
  create?: CommentCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyBookInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutBookInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
