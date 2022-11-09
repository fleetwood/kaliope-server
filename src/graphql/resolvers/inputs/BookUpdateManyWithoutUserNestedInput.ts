import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateManyUserInputEnvelope } from "../inputs/BookCreateManyUserInputEnvelope";
import { BookCreateOrConnectWithoutUserInput } from "../inputs/BookCreateOrConnectWithoutUserInput";
import { BookCreateWithoutUserInput } from "../inputs/BookCreateWithoutUserInput";
import { BookScalarWhereInput } from "../inputs/BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutUserInput } from "../inputs/BookUpdateManyWithWhereWithoutUserInput";
import { BookUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BookUpdateWithWhereUniqueWithoutUserInput";
import { BookUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BookUpsertWithWhereUniqueWithoutUserInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class BookUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BookUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BookUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BookUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookScalarWhereInput[] | undefined;
}
