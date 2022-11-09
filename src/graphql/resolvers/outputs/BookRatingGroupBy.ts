import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCountAggregate } from "../outputs/BookRatingCountAggregate";
import { BookRatingMaxAggregate } from "../outputs/BookRatingMaxAggregate";
import { BookRatingMinAggregate } from "../outputs/BookRatingMinAggregate";

@TypeGraphQL.ObjectType("BookRatingGroupBy", {
  isAbstract: true
})
export class BookRatingGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookratingid!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => BookRatingCountAggregate, {
    nullable: true
  })
  _count!: BookRatingCountAggregate | null;

  @TypeGraphQL.Field(_type => BookRatingMinAggregate, {
    nullable: true
  })
  _min!: BookRatingMinAggregate | null;

  @TypeGraphQL.Field(_type => BookRatingMaxAggregate, {
    nullable: true
  })
  _max!: BookRatingMaxAggregate | null;
}
