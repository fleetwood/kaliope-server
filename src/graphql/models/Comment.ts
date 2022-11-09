import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Comment", {
  isAbstract: true
})
export class Comment {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  commentid!: string;

  author?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorid!: string;

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
  content!: string;

  book?: Book;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookid!: string;
}
