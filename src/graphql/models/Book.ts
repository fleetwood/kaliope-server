import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BookRating } from "../models/BookRating";
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorid!: string;

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

  author?: User;

  book_ratings?: BookRating[];

  book_comments?: Comment[];

  @TypeGraphQL.Field(_type => BookCount, {
    nullable: true
  })
  _count?: BookCount | null;
}
