import * as TypeGraphQL from "type-graphql";

export enum BookScalarFieldEnum {
  bookid = "bookid",
  authorid = "authorid",
  cover = "cover",
  created_at = "created_at",
  updated_at = "updated_at",
  title = "title",
  description = "description"
}
TypeGraphQL.registerEnumType(BookScalarFieldEnum, {
  name: "BookScalarFieldEnum",
  description: undefined,
});
