import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutBook_ratingsInput } from "../inputs/BookCreateOrConnectWithoutBook_ratingsInput";
import { BookCreateWithoutBook_ratingsInput } from "../inputs/BookCreateWithoutBook_ratingsInput";
import { BookUpdateWithoutBook_ratingsInput } from "../inputs/BookUpdateWithoutBook_ratingsInput";
import { BookUpsertWithoutBook_ratingsInput } from "../inputs/BookUpsertWithoutBook_ratingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutBook_ratingsNestedInput", {
  isAbstract: true
})
export class BookUpdateOneRequiredWithoutBook_ratingsNestedInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutBook_ratingsInput, {
    nullable: true
  })
  create?: BookCreateWithoutBook_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutBook_ratingsInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutBook_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpsertWithoutBook_ratingsInput, {
    nullable: true
  })
  upsert?: BookUpsertWithoutBook_ratingsInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateWithoutBook_ratingsInput, {
    nullable: true
  })
  update?: BookUpdateWithoutBook_ratingsInput | undefined;
}
