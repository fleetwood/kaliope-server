import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyCommentonInputEnvelope } from "../inputs/CommentCreateManyCommentonInputEnvelope";
import { CommentCreateOrConnectWithoutCommentonInput } from "../inputs/CommentCreateOrConnectWithoutCommentonInput";
import { CommentCreateWithoutCommentonInput } from "../inputs/CommentCreateWithoutCommentonInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutCommentonInput } from "../inputs/CommentUpdateManyWithWhereWithoutCommentonInput";
import { CommentUpdateWithWhereUniqueWithoutCommentonInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutCommentonInput";
import { CommentUpsertWithWhereUniqueWithoutCommentonInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutCommentonInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutCommentonNestedInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutCommentonNestedInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutCommentonInput], {
    nullable: true
  })
  create?: CommentCreateWithoutCommentonInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutCommentonInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutCommentonInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutCommentonInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutCommentonInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyCommentonInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyCommentonInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutCommentonInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutCommentonInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutCommentonInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutCommentonInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
