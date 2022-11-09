import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyCommentonInputEnvelope } from "../inputs/CommentCreateManyCommentonInputEnvelope";
import { CommentCreateOrConnectWithoutCommentonInput } from "../inputs/CommentCreateOrConnectWithoutCommentonInput";
import { CommentCreateWithoutCommentonInput } from "../inputs/CommentCreateWithoutCommentonInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutCommentonInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutCommentonInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutCommentonInput], {
    nullable: true
  })
  create?: CommentCreateWithoutCommentonInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutCommentonInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutCommentonInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyCommentonInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyCommentonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
