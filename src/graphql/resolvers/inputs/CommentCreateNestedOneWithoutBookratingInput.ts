import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutBookratingInput } from "../inputs/CommentCreateOrConnectWithoutBookratingInput";
import { CommentCreateWithoutBookratingInput } from "../inputs/CommentCreateWithoutBookratingInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedOneWithoutBookratingInput", {
  isAbstract: true
})
export class CommentCreateNestedOneWithoutBookratingInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutBookratingInput, {
    nullable: true
  })
  create?: CommentCreateWithoutBookratingInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutBookratingInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutBookratingInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;
}
