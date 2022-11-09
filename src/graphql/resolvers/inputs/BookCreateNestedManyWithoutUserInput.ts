import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateManyUserInputEnvelope } from "../inputs/BookCreateManyUserInputEnvelope";
import { BookCreateOrConnectWithoutUserInput } from "../inputs/BookCreateOrConnectWithoutUserInput";
import { BookCreateWithoutUserInput } from "../inputs/BookCreateWithoutUserInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class BookCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;
}
