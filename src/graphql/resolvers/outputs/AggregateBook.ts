import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";

@TypeGraphQL.ObjectType("AggregateBook", {
  isAbstract: true
})
export class AggregateBook {
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
