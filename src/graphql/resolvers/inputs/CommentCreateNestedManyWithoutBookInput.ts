import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyBookInputEnvelope } from "../inputs/CommentCreateManyBookInputEnvelope";
import { CommentCreateOrConnectWithoutBookInput } from "../inputs/CommentCreateOrConnectWithoutBookInput";
import { CommentCreateWithoutBookInput } from "../inputs/CommentCreateWithoutBookInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutBookInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutBookInput], {
    nullable: true
  })
  create?: CommentCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
