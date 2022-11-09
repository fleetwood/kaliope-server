import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("BookRating", {
  isAbstract: true
})
export class BookRating {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookratingid!: string;

  user?: User;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  comment?: Comment;
}
