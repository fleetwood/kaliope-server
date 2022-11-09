import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutBook_ratingsInput } from "../inputs/BookCreateOrConnectWithoutBook_ratingsInput";
import { BookCreateWithoutBook_ratingsInput } from "../inputs/BookCreateWithoutBook_ratingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutBook_ratingsInput", {
  isAbstract: true
})
export class BookCreateNestedOneWithoutBook_ratingsInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutBook_ratingsInput, {
    nullable: true
  })
  create?: BookCreateWithoutBook_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutBook_ratingsInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutBook_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;
}
