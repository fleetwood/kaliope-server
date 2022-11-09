import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";

@TypeGraphQL.ObjectType("BookGroupBy", {
  isAbstract: true
})
export class BookGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cover!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BookCountAggregate, {
    nullable: true
  })
  _count!: BookCountAggregate | null;

  @TypeGraphQL.Field(_type => BookMinAggregate, {
    nullable: true
  })
  _min!: BookMinAggregate | null;

  @TypeGraphQL.Field(_type => BookMaxAggregate, {
    nullable: true
  })
  _max!: BookMaxAggregate | null;
}
