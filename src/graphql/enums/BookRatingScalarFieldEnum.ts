import * as TypeGraphQL from "type-graphql";

export enum BookRatingScalarFieldEnum {
  bookratingid = "bookratingid",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(BookRatingScalarFieldEnum, {
  name: "BookRatingScalarFieldEnum",
  description: undefined,
});
