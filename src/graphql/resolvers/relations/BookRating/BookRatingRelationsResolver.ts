import * as TypeGraphQL from "type-graphql";
import { BookRating } from "../../../models/BookRating";
import { Comment } from "../../../models/Comment";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookRating)
export class BookRatingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() bookRating: BookRating, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).bookRating.findUnique({
      where: {
        bookratingid: bookRating.bookratingid,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Comment, {
    nullable: false
  })
  async comment(@TypeGraphQL.Root() bookRating: BookRating, @TypeGraphQL.Ctx() ctx: any): Promise<Comment> {
    return getPrismaFromContext(ctx).bookRating.findUnique({
      where: {
        bookratingid: bookRating.bookratingid,
      },
    }).comment({});
  }
}
