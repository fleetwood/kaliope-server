import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateManyAuthorInputEnvelope } from "../inputs/BookRatingCreateManyAuthorInputEnvelope";
import { BookRatingCreateOrConnectWithoutAuthorInput } from "../inputs/BookRatingCreateOrConnectWithoutAuthorInput";
import { BookRatingCreateWithoutAuthorInput } from "../inputs/BookRatingCreateWithoutAuthorInput";
import { BookRatingScalarWhereInput } from "../inputs/BookRatingScalarWhereInput";
import { BookRatingUpdateManyWithWhereWithoutAuthorInput } from "../inputs/BookRatingUpdateManyWithWhereWithoutAuthorInput";
import { BookRatingUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/BookRatingUpdateWithWhereUniqueWithoutAuthorInput";
import { BookRatingUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/BookRatingUpsertWithWhereUniqueWithoutAuthorInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpdateManyWithoutAuthorNestedInput", {
  isAbstract: true
})
export class BookRatingUpdateManyWithoutAuthorNestedInput {
  @TypeGraphQL.Field(_type => [BookRatingCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: BookRatingCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: BookRatingCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: BookRatingUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: BookRatingCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookRatingUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: BookRatingUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: BookRatingUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookRatingScalarWhereInput[] | undefined;
}
