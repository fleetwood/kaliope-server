import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutCommentsInput } from "../inputs/CommentCreateOrConnectWithoutCommentsInput";
import { CommentCreateWithoutCommentsInput } from "../inputs/CommentCreateWithoutCommentsInput";
import { CommentUpdateWithoutCommentsInput } from "../inputs/CommentUpdateWithoutCommentsInput";
import { CommentUpsertWithoutCommentsInput } from "../inputs/CommentUpsertWithoutCommentsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateOneWithoutCommentsNestedInput", {
  isAbstract: true
})
export class CommentUpdateOneWithoutCommentsNestedInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: CommentCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: CommentUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: CommentUpdateWithoutCommentsInput | undefined;
}
