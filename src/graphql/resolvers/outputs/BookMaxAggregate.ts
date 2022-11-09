import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("BookMaxAggregate", {
  isAbstract: true
})
export class BookMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  authorid!: string | null;

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
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;
}
