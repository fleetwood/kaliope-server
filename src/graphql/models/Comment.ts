import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { BookRating } from "../models/BookRating";
import { User } from "../models/User";
import { CommentCount } from "../resolvers/outputs/CommentCount";

@TypeGraphQL.ObjectType("Comment", {
  isAbstract: true
})
export class Comment {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  commentid!: string;

  user?: User;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  commentingid?: string | null;

  commenton?: Comment | null;

  comments?: Comment[];

  book?: Book;

  bookrating?: BookRating | null;

  @TypeGraphQL.Field(_type => CommentCount, {
    nullable: true
  })
  _count?: CommentCount | null;
}
