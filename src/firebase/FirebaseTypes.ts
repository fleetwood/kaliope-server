import { ObjectType } from "type-graphql";
import { FireCode } from "./FirebaseErrors";

@ObjectType()
export class FirebaseUserResponse {
  user?: any;
  error?: FireCode;
}