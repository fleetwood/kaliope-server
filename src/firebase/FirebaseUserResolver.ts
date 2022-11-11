import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { log, todo, now, logError } from "../helpers";
import { User } from "../graphql/models/User";
import { getPrismaFromContext } from "../graphql/helpers";
import { FirebaseAuthArgs } from "./FirebaseAuthInputs";
import { firebaseError, FirebaseErrors, FireCode } from "./FirebaseErrors";
import { createWebSocketStream } from "ws";

@TypeGraphQL.ObjectType()
export class FirebaseAuthResponse {
  @TypeGraphQL.Field((_type) => User, { nullable: true })
  user?: User;
  @TypeGraphQL.Field({ nullable: true })
  error?: FireCode;
}

///////////////////////////////
@TypeGraphQL.Resolver((_of) => User)
export class FirebaseUserResolver { @TypeGraphQL.Mutation((_returns) => FirebaseAuthResponse, { nullable: false })
  async firebaseAuthorizeUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FirebaseAuthArgs
  ): Promise<FirebaseAuthResponse> {
    let error:FireCode = FirebaseErrors.authError;
    const { data } = args;
    todo(
      "handle apiKey, providerData, stsTokenManager"
      );
      const {uid,email,emailVerified,isAnonymous,displayName,photoURL} = data;
      const props = {
        where: {
          email: data.email,
        },
        create: {
          uid,email,emailVerified,isAnonymous,displayName,photoURL
        },
        update: {
          lastLoginAt: now(),
        },
      };
      
    try {
      const user = await getPrismaFromContext(ctx).user.upsert(props)
      if (user) {
        log('AUTHORIZED: ',props)
        ctx.currentUser = user;
        return {user}
      }
      throw(error)
    } catch (e) {
      logError('AUTHORIZE FAIL',e,props)
      return { error };
    }
  }
}
