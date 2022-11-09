import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { BookRating } from "../models/BookRating";
import { Comment } from "../models/Comment";
import { Post } from "../models/Post";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userid!: string;

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
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uid!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  email_verified?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_anonymous?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  photo_url?: string | null;

  posts?: Post[];

  books?: Book[];

  comments?: Comment[];

  bookratings?: BookRating[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
