import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookRating } from "../../../models/BookRating";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { UserBookratingsArgs } from "./args/UserBookratingsArgs";
import { UserBooksArgs } from "./args/UserBooksArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        userid: user.userid,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        userid: user.userid,
      },
    }).books(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        userid: user.userid,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookRating], {
    nullable: false
  })
  async bookratings(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBookratingsArgs): Promise<BookRating[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        userid: user.userid,
      },
    }).bookratings(args);
  }
}