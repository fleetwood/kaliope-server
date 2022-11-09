import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateManyAuthorInputEnvelope } from "../inputs/BookRatingCreateManyAuthorInputEnvelope";
import { BookRatingCreateOrConnectWithoutAuthorInput } from "../inputs/BookRatingCreateOrConnectWithoutAuthorInput";
import { BookRatingCreateWithoutAuthorInput } from "../inputs/BookRatingCreateWithoutAuthorInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class BookRatingCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [BookRatingCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: BookRatingCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: BookRatingCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: BookRatingCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookRatingWhereUniqueInput], {
    nullable: true
  })
  connect?: BookRatingWhereUniqueInput[] | undefined;
}
