import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";

import { FirebaseError } from "firebase/app";

import { hash } from "argon2";
import { log } from "console";
import { todo } from "../../../helpers";
import { FirebaseErrors, firebaseUserCreate, firebaseError, firebaseGoogleLogin, firebaseUserLogin } from "../../../firebase/FirebaseAuthContext";
import { User } from "../../models/User";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformFields } from "../../helpers";
import { ObjectType } from "type-graphql";

@ObjectType()
class FirebaseUserResponse {
  user?: any
  error?: FirebaseError
}

@TypeGraphQL.InputType("FirebaseAuthInput", {
  isAbstract: true
})
export class FirebaseAuthInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password: string;
}

@TypeGraphQL.ArgsType()
export class FirebaseAuthArgs {
  @TypeGraphQL.Field(_type => FirebaseAuthInput, {
    nullable: false
  })
  data!: FirebaseAuthInput;
}

const hashpass = async (args:any) => {return {...args, password: await hash(args.password)}}

///////////////////////////////
@TypeGraphQL.Resolver(_of => User)
export class FirebaseUserResolver {

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async firebaseRegisterUser(
    @TypeGraphQL.Ctx() ctx: any, 
    @TypeGraphQL.Info() info: GraphQLResolveInfo, 
    @TypeGraphQL.Args() args: FirebaseAuthArgs)
    : Promise<User> {

    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    
    let error = FirebaseErrors.registerSubmit;
    log('firebaseRegisterUser',args.data)
    let {email,password} = {...args.data};
    // password = await hash(password)
    log('\t credentials: ',{email,password})
    try {
      const firebaseUser = await firebaseUserCreate(email!,password)

      if (firebaseUser) {
        log('Registered user with firebase!')
        return getPrismaFromContext(ctx).user.create({
          ...firebaseUser,
          ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
      }
      log('Firebase reg fail...')
      throw(error)
    } catch (e) {
      console.log('REGISTER FAIL',e)
      throw(firebaseError(e, error));
    }
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: false,
  })
  async firebaseGoogleAuth(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo
  ): Promise<User> {
    const { _count } = transformFields(graphqlFields(info as any));

    let error = FirebaseErrors.registerSubmit;
    log('firebaseGoogleAuth')
    try {
      const firebaseUser = await firebaseGoogleLogin()
      todo('Convert user to Prisma User')
      if (firebaseUser) {
        log('authorized user!')
        return getPrismaFromContext(ctx).user.upsert({
          ...firebaseUser,
          ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
      }
      log('Failed googleAuth....')
      throw(error)
    } catch (e) {
      log('GOOGLE AUTH FAIL',e)
      throw(firebaseError(e, error));
    }
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: false,
  })
  async firebaseUserAuth(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FirebaseAuthArgs
    ): Promise<User> {
      const { _count } = transformFields(graphqlFields(info as any));
  
      let error = FirebaseErrors.registerSubmit;
      log('firebaseUserAuth',args)

      try {
        let {email, password} = (args.data)
        // password = await hash(password)
        const user = await firebaseUserLogin({email:email!,password})
        if (user) {
          log('\tauthorized user!')
          todo('Convert user to Prisma User')
          return getPrismaFromContext(ctx).user.findUnique({
            where: { email },
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
          });
        }
        log('\tuser auth fail!')
        throw(error)
      } catch (e) {
        log('USER AUTH FAIL',e)
        throw(firebaseError(e, error));
      }
    }
}
