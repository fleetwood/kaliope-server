import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { PostPostsArgs } from "./args/PostPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        postid: post.postid,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: true
  })
  async post(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<Post | null> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        postid: post.postid,
      },
    }).post({});
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        postid: post.postid,
      },
    }).posts(args);
  }
}
