import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutBook_commentsInput } from "../inputs/BookCreateOrConnectWithoutBook_commentsInput";
import { BookCreateWithoutBook_commentsInput } from "../inputs/BookCreateWithoutBook_commentsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutBook_commentsInput", {
  isAbstract: true
})
export class BookCreateNestedOneWithoutBook_commentsInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutBook_commentsInput, {
    nullable: true
  })
  create?: BookCreateWithoutBook_commentsInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutBook_commentsInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutBook_commentsInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;
}
