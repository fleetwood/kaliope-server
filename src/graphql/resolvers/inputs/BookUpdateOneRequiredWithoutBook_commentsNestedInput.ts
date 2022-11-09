import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutBook_commentsInput } from "../inputs/BookCreateOrConnectWithoutBook_commentsInput";
import { BookCreateWithoutBook_commentsInput } from "../inputs/BookCreateWithoutBook_commentsInput";
import { BookUpdateWithoutBook_commentsInput } from "../inputs/BookUpdateWithoutBook_commentsInput";
import { BookUpsertWithoutBook_commentsInput } from "../inputs/BookUpsertWithoutBook_commentsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutBook_commentsNestedInput", {
  isAbstract: true
})
export class BookUpdateOneRequiredWithoutBook_commentsNestedInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutBook_commentsInput, {
    nullable: true
  })
  create?: BookCreateWithoutBook_commentsInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutBook_commentsInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutBook_commentsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpsertWithoutBook_commentsInput, {
    nullable: true
  })
  upsert?: BookUpsertWithoutBook_commentsInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateWithoutBook_commentsInput, {
    nullable: true
  })
  update?: BookUpdateWithoutBook_commentsInput | undefined;
}
