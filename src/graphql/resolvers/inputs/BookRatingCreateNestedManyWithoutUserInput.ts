import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateManyUserInputEnvelope } from "../inputs/BookRatingCreateManyUserInputEnvelope";
import { BookRatingCreateOrConnectWithoutUserInput } from "../inputs/BookRatingCreateOrConnectWithoutUserInput";
import { BookRatingCreateWithoutUserInput } from "../inputs/BookRatingCreateWithoutUserInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class BookRatingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookRatingCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookRatingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookRatingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookRatingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookRatingWhereUniqueInput], {
    nullable: true
  })
  connect?: BookRatingWhereUniqueInput[] | undefined;
}
