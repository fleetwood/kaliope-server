import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  commentid = "commentid",
  authorid = "authorid",
  created_at = "created_at",
  updated_at = "updated_at",
  content = "content",
  bookid = "bookid"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
