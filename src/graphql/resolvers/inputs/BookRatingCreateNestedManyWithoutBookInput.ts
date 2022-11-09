import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateManyBookInputEnvelope } from "../inputs/BookRatingCreateManyBookInputEnvelope";
import { BookRatingCreateOrConnectWithoutBookInput } from "../inputs/BookRatingCreateOrConnectWithoutBookInput";
import { BookRatingCreateWithoutBookInput } from "../inputs/BookRatingCreateWithoutBookInput";
import { BookRatingWhereUniqueInput } from "../inputs/BookRatingWhereUniqueInput";

@TypeGraphQL.InputType("BookRatingCreateNestedManyWithoutBookInput", {
  isAbstract: true
})
export class BookRatingCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [BookRatingCreateWithoutBookInput], {
    nullable: true
  })
  create?: BookRatingCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookRatingCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: BookRatingCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: BookRatingCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookRatingWhereUniqueInput], {
    nullable: true
  })
  connect?: BookRatingWhereUniqueInput[] | undefined;
}
