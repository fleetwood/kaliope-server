import { User } from "./../entities/User";
import {
  Mutation,
  Resolver,
  Query,
  Ctx,
  Int,
  Arg,
} from "type-graphql";
import { MyContext, UserLoginInput, UserQueryInput, UserResponse } from "./../types";
import argon2 from "argon2";

const NotFoundError = {
  errors: [
    {
      field: "Query",
      message: "User not found",
    },
  ],
};

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(@Ctx() { em }: MyContext): Promise<User[]> {
    return em.find(User, {});
  }

  @Query(() => UserResponse)
  async userById(
    @Ctx() { em }: MyContext,
    @Arg("id", () => Number) id: number
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { id });
    return !user ? NotFoundError : { user: user };
  }

  @Query(() => UserResponse)
  async userByName(
    @Ctx() { em }: MyContext,
    @Arg("username", () => String) username: string
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username });
    return !user ? NotFoundError : { user };
  }

  @Query(() => UserResponse)
  async userByEmail(
    @Ctx() { em }: MyContext,
    @Arg("email", () => String) email: string
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { email });
    return !user ? NotFoundError : { user };
  }

  @Query(() => UserResponse)
  async login(
    @Ctx() { em }: MyContext,
    @Arg("params") params: UserLoginInput
  ): Promise<UserResponse> {
    let user, valid = false;
    const { username, email, password } = params;
    if (username) {
      user = await em.findOne(User, { username });
    } else if (email) {
      user = await em.findOne(User, { email });
    }
    else {
      return NotFoundError
    }
    if (user) {
      valid = await argon2.verify(user.password, password)
    }
    return user && valid ? {user} : NotFoundError;
  }

  @Mutation(() => User)
  async createUser(
    @Ctx() { em }: MyContext,
    @Arg("username") username: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    const user = em.create(User, {
      username,
      email,
      password: await argon2.hash(password),
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    await em.persistAndFlush(user);
    return { user: user };
  }

  @Mutation(() => UserResponse)
  async updateUser(
    @Ctx() { em }: MyContext,
    @Arg("params") params: UserQueryInput
  ): Promise<UserResponse> {
    const { id, username, email, password } = params;
    const user = await em.findOne(User, { id });
    if (!user) return NotFoundError;
    if (username) {
      user.username = username;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = await argon2.hash(password);
    }
    await em.persistAndFlush(user);
    return { user };
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: MyContext
  ): Promise<Boolean> {
    try {
      await em.nativeDelete(User, { id });
      return true;
    } catch (e) {
      console.log(e);
    }
    return false;
  }
}
