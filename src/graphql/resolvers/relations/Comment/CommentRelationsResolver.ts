import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookRating } from "../../../models/BookRating";
import { Comment } from "../../../models/Comment";
import { User } from "../../../models/User";
import { CommentCommentsArgs } from "./args/CommentCommentsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        commentid: comment.commentid,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Comment, {
    nullable: true
  })
  async commenton(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Comment | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        commentid: comment.commentid,
      },
    }).commenton({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CommentCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        commentid: comment.commentid,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => Book, {
    nullable: false
  })
  async book(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Book> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        commentid: comment.commentid,
      },
    }).book({});
  }

  @TypeGraphQL.FieldResolver(_type => BookRating, {
    nullable: true
  })
  async bookrating(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<BookRating | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        commentid: comment.commentid,
      },
    }).bookrating({});
  }
}
