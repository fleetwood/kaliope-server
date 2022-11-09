import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateManyAuthorInputEnvelope } from "../inputs/BookCreateManyAuthorInputEnvelope";
import { BookCreateOrConnectWithoutAuthorInput } from "../inputs/BookCreateOrConnectWithoutAuthorInput";
import { BookCreateWithoutAuthorInput } from "../inputs/BookCreateWithoutAuthorInput";
import { BookScalarWhereInput } from "../inputs/BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutAuthorInput } from "../inputs/BookUpdateManyWithWhereWithoutAuthorInput";
import { BookUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/BookUpdateWithWhereUniqueWithoutAuthorInput";
import { BookUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/BookUpsertWithWhereUniqueWithoutAuthorInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateManyWithoutAuthorNestedInput", {
  isAbstract: true
})
export class BookUpdateManyWithoutAuthorNestedInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: BookCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  set?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  delete?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: BookUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: BookUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookScalarWhereInput[] | undefined;
}
