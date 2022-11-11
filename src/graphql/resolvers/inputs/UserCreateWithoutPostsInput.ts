import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedManyWithoutAuthorInput } from "../inputs/BookCreateNestedManyWithoutAuthorInput";
import { BookRatingCreateNestedManyWithoutAuthorInput } from "../inputs/BookRatingCreateNestedManyWithoutAuthorInput";
import { CommentCreateNestedManyWithoutAuthorInput } from "../inputs/CommentCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserCreateWithoutPostsInput", {
  isAbstract: true
})
export class UserCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  emailVerified?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAnonymous?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  photoURL?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastLoginAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => BookRatingCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  ratings?: BookRatingCreateNestedManyWithoutAuthorInput | undefined;
}