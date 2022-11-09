import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookRating } from "../../../models/BookRating";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { UserUser_booksArgs } from "./args/UserUser_booksArgs";
import { UserUser_commentsArgs } from "./args/UserUser_commentsArgs";
import { UserUser_postsArgs } from "./args/UserUser_postsArgs";
import { UserUser_ratingsArgs } from "./args/UserUser_ratingsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async user_posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUser_postsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        userid: user.userid,
      },
    }).user_posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async user_comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUser_commentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        userid: user.userid,
      },
    }).user_comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async user_books(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUser_booksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        userid: user.userid,
      },
    }).user_books(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookRating], {
    nullable: false
  })
  async user_ratings(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUser_ratingsArgs): Promise<BookRating[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        userid: user.userid,
      },
    }).user_ratings(args);
  }
}
