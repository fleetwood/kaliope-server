import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateManyUserInputEnvelope } from "../inputs/BookRatingCreateManyUserInputEnvelope";
import { BookRatingCreateOrConnectWithoutUserInput } from "../inputs/BookRatingCreateOrConnectWithoutUserInput";
import { BookRatingCreateWithoutUserInput } from "../inputs/BookRatingCreateWithoutUserInput";
import { BookRatingScalarWhereInput } from "../inputs/BookRatingScalarWhereInput";
import { BookRatingUpdateManyWithWhereWithoutUserInput } from "../inputs/BookRatingUpdateManyWithWhereWithoutUserInput";
import { BookRatingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BookRatingUpdateWithWhereUniqueWithoutUserInput";
import { BookRatingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BookRatingUpsertWithWhereUniqueWithoutUserInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class BookRatingUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [BookRatingCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookRatingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookRatingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BookRatingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookRatingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookRatingWhereUniqueInput], {
    nullable: true
  })
  set?: BookRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingWhereUniqueInput], {
    nullable: true
  })
  delete?: BookRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingWhereUniqueInput], {
    nullable: true
  })
  connect?: BookRatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BookRatingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BookRatingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookRatingScalarWhereInput[] | undefined;
}
