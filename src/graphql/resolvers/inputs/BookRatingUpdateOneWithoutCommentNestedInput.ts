import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateOrConnectWithoutCommentInput } from "../inputs/BookRatingCreateOrConnectWithoutCommentInput";
import { BookRatingCreateWithoutCommentInput } from "../inputs/BookRatingCreateWithoutCommentInput";
import { BookRatingUpdateWithoutCommentInput } from "../inputs/BookRatingUpdateWithoutCommentInput";
import { BookRatingUpsertWithoutCommentInput } from "../inputs/BookRatingUpsertWithoutCommentInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingUpdateOneWithoutCommentNestedInput", {
  isAbstract: true
})
export class BookRatingUpdateOneWithoutCommentNestedInput {
  @TypeGraphQL.Field(_type => BookRatingCreateWithoutCommentInput, {
    nullable: true
  })
  create?: BookRatingCreateWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateOrConnectWithoutCommentInput, {
    nullable: true
  })
  connectOrCreate?: BookRatingCreateOrConnectWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingUpsertWithoutCommentInput, {
    nullable: true
  })
  upsert?: BookRatingUpsertWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BookRatingWhereUniqueInput, {
    nullable: true
  })
  connect?: BookRatingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingUpdateWithoutCommentInput, {
    nullable: true
  })
  update?: BookRatingUpdateWithoutCommentInput | undefined;
}
