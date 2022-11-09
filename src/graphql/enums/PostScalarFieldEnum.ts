import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  postid = "postid",
  created_at = "created_at",
  updated_at = "updated_at",
  title = "title",
  subtitle = "subtitle",
  header_image = "header_image",
  content = "content",
  replytoid = "replytoid"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
