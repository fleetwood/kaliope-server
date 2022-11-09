import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRatingCreateNestedManyWithoutUserInput } from "../inputs/BookRatingCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserCreateWithoutBooksInput", {
  isAbstract: true
})
export class UserCreateWithoutBooksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userid?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

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
  email_verified?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_anonymous?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  photo_url?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  bookratings?: BookRatingCreateNestedManyWithoutUserInput | undefined;
}