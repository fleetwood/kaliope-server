import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutCommentsInput } from "../inputs/BookCreateOrConnectWithoutCommentsInput";
import { BookCreateWithoutCommentsInput } from "../inputs/BookCreateWithoutCommentsInput";
import { BookUpdateWithoutCommentsInput } from "../inputs/BookUpdateWithoutCommentsInput";
import { BookUpsertWithoutCommentsInput } from "../inputs/BookUpsertWithoutCommentsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutCommentsNestedInput", {
  isAbstract: true
})
export class BookUpdateOneRequiredWithoutCommentsNestedInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: BookCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: BookUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: BookUpdateWithoutCommentsInput | undefined;
}
