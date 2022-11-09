import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutCommentsInput } from "../inputs/BookCreateNestedOneWithoutCommentsInput";
import { CommentCreateNestedManyWithoutCommentonInput } from "../inputs/CommentCreateNestedManyWithoutCommentonInput";
import { CommentCreateNestedOneWithoutCommentsInput } from "../inputs/CommentCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType("CommentCreateWithoutBookratingInput", {
  isAbstract: true
})
export class CommentCreateWithoutBookratingInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutCommentsInput | undefined;

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
  content!: string;

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  commenton?: CommentCreateNestedOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutCommentonInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutCommentonInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  book?: BookCreateNestedOneWithoutCommentsInput | undefined;
}
