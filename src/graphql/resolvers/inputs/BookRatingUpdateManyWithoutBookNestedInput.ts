import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateManyBookInputEnvelope } from "../inputs/BookRatingCreateManyBookInputEnvelope";
import { BookRatingCreateOrConnectWithoutBookInput } from "../inputs/BookRatingCreateOrConnectWithoutBookInput";
import { BookRatingCreateWithoutBookInput } from "../inputs/BookRatingCreateWithoutBookInput";
import { BookRatingScalarWhereInput } from "../inputs/BookRatingScalarWhereInput";
import { BookRatingUpdateManyWithWhereWithoutBookInput } from "../inputs/BookRatingUpdateManyWithWhereWithoutBookInput";
import { BookRatingUpdateWithWhereUniqueWithoutBookInput } from "../inputs/BookRatingUpdateWithWhereUniqueWithoutBookInput";
import { BookRatingUpsertWithWhereUniqueWithoutBookInput } from "../inputs/BookRatingUpsertWithWhereUniqueWithoutBookInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpdateManyWithoutBookNestedInput", {
  isAbstract: true
})
export class BookRatingUpdateManyWithoutBookNestedInput {
  @TypeGraphQL.Field(_type => [BookRatingCreateWithoutBookInput], {
    nullable: true
  })
  create?: BookRatingCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: BookRatingCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  upsert?: BookRatingUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: BookRatingCreateManyBookInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookRatingUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  update?: BookRatingUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingUpdateManyWithWhereWithoutBookInput], {
    nullable: true
  })
  updateMany?: BookRatingUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookRatingScalarWhereInput[] | undefined;
}
