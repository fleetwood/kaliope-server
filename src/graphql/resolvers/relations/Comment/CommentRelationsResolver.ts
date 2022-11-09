import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Comment } from "../../../models/Comment";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        commentid: comment.commentid,
      },
    }).author({});
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
}
