import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Int, InputType, ObjectType, Field } from "type-graphql";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
};

@InputType()
export class UserQueryInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field({ nullable: true })
  photoURL?: string;
}

@InputType()
export class UserLoginInput {
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  password: string;
}


@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
export class PostResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  
  @Field(() => Post, { nullable: true })
  posts?: Post[];
}
