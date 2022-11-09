import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookRatingArgs } from "./args/AggregateBookRatingArgs";
import { BookRating } from "../../../models/BookRating";
import { AggregateBookRating } from "../../outputs/AggregateBookRating";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookRating)
export class AggregateBookRatingResolver {
  @TypeGraphQL.Query(_returns => AggregateBookRating, {
    nullable: false
  })
  async aggregateBookRating(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookRatingArgs): Promise<AggregateBookRating> {
    return getPrismaFromContext(ctx).bookRating.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
