import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { User } from "../models/User";
import { BookCount } from "../resolvers/outputs/BookCount";

@TypeGraphQL.ObjectType("Book", {
  isAbstract: true
})
export class Book {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookid!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cover?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  comments?: Comment[];

  @TypeGraphQL.Field(_type => BookCount, {
    nullable: true
  })
  _count?: BookCount | null;
}
