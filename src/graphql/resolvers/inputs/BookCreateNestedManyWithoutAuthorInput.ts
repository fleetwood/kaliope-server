import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateManyAuthorInputEnvelope } from "../inputs/BookCreateManyAuthorInputEnvelope";
import { BookCreateOrConnectWithoutAuthorInput } from "../inputs/BookCreateOrConnectWithoutAuthorInput";
import { BookCreateWithoutAuthorInput } from "../inputs/BookCreateWithoutAuthorInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class BookCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: BookCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;
}
