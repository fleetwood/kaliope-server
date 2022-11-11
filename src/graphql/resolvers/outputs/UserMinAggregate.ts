import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserMinAggregate", {
  isAbstract: true
})
export class UserMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  emailVerified!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAnonymous!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  photoURL!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastLoginAt!: Date | null;
}
