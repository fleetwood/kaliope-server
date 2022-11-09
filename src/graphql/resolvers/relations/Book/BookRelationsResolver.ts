import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookRating } from "../../../models/BookRating";
import { Comment } from "../../../models/Comment";
import { User } from "../../../models/User";
import { BookBook_commentsArgs } from "./args/BookBook_commentsArgs";
import { BookBook_ratingsArgs } from "./args/BookBook_ratingsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        bookid: book.bookid,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async book_comments(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookBook_commentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        bookid: book.bookid,
      },
    }).book_comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookRating], {
    nullable: false
  })
  async book_ratings(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookBook_ratingsArgs): Promise<BookRating[]> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        bookid: book.bookid,
      },
    }).book_ratings(args);
  }
}
