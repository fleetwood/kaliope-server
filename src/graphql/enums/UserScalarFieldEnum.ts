import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  uid = "uid",
  email = "email",
  emailVerified = "emailVerified",
  isAnonymous = "isAnonymous",
  displayName = "displayName",
  photoURL = "photoURL",
  createdAt = "createdAt",
  lastLoginAt = "lastLoginAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
