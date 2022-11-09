import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Comment } from "../../../models/Comment";
import { User } from "../../../models/User";
import { BookCommentsArgs } from "./args/BookCommentsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        bookid: book.bookid,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        bookid: book.bookid,
      },
    }).comments(args);
  }
}
