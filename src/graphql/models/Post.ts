import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { PostCount } from "../resolvers/outputs/PostCount";

@TypeGraphQL.ObjectType("Post", {
  isAbstract: true
})
export class Post {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postid!: string;

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
    nullable: true
  })
  subtitle?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_image?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  author?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  replytoid?: string | null;

  post?: Post | null;

  posts?: Post[];

  @TypeGraphQL.Field(_type => PostCount, {
    nullable: true
  })
  _count?: PostCount | null;
}
