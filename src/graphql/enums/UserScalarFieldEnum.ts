import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  userid = "userid",
  created_at = "created_at",
  updated_at = "updated_at",
  username = "username",
  email = "email",
  password = "password",
  uid = "uid",
  email_verified = "email_verified",
  is_anonymous = "is_anonymous",
  display_name = "display_name",
  photo_url = "photo_url"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
