import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutBookratingInput } from "../inputs/CommentCreateOrConnectWithoutBookratingInput";
import { CommentCreateWithoutBookratingInput } from "../inputs/CommentCreateWithoutBookratingInput";
import { CommentUpdateWithoutBookratingInput } from "../inputs/CommentUpdateWithoutBookratingInput";
import { CommentUpsertWithoutBookratingInput } from "../inputs/CommentUpsertWithoutBookratingInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateOneRequiredWithoutBookratingNestedInput", {
  isAbstract: true
})
export class CommentUpdateOneRequiredWithoutBookratingNestedInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutBookratingInput, {
    nullable: true
  })
  create?: CommentCreateWithoutBookratingInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutBookratingInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutBookratingInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpsertWithoutBookratingInput, {
    nullable: true
  })
  upsert?: CommentUpsertWithoutBookratingInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutBookratingInput, {
    nullable: true
  })
  update?: CommentUpdateWithoutBookratingInput | undefined;
}
