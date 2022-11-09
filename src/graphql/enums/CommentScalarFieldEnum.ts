import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  commentid = "commentid",
  created_at = "created_at",
  updated_at = "updated_at",
  content = "content",
  commentingid = "commentingid"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
