// import * as TypeGraphQL from "type-graphql";
// import graphqlFields from "graphql-fields";
// import { GraphQLResolveInfo } from "graphql";

// import { FirebaseError } from "firebase/app";

// import { hash } from "argon2";
// import { log } from "console";
// import { todo } from "./../../../helpers";
// import { FirebaseErrors, firebaseUserCreate, firebaseError, firebaseGoogleLogin, firebaseUserLogin } from "./../../../firebase/FirebaseAuthContext";
// import { User } from "./../../../graphql/models/User";
// import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformFields } from "./../../../graphql/helpers";
// import { CreateOneUserArgs } from "../crud/User/args/CreateOneUserArgs";
// import { ObjectType } from "type-graphql";

// @ObjectType()
// class FirebaseUserResponse {
//   user?: any
//   error?: FirebaseError
// }

// @ObjectType()
// class FirebaseAuthArgs {
//   email: string
//   password: string
// }

// const hashpass = async (args:any) => {return {...args, password: await hash(args.password)}}

// ///////////////////////////////
// @TypeGraphQL.Resolver(_of => User)
// export class FirebaseUserResolver {

//   @TypeGraphQL.Mutation(_returns => User, {
//     nullable: false
//   })
//   async createOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserArgs): Promise<User> {
//     const { _count } = transformFields(
//       graphqlFields(info as any)
//     );
  
//     args.data = await hashpass(args.data)

//     const {email,password}=args.data
//     let error = FirebaseErrors.registerSubmit;
    
//     try {
//       const user = await firebaseUserCreate(email,password)

//       if (user) {
//         return getPrismaFromContext(ctx).user.create({
//           ...args,
//           ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
//         });
//       }
//       throw(error)
//     } catch (e) {
//       console.log('REGISTER FAIL',e)
//       throw(firebaseError(e, error));
//     }
//   }

//   @TypeGraphQL.Mutation((_returns) => User, {
//     nullable: false,
//   })
//   async firebaseGoogleAuth(
//     @TypeGraphQL.Ctx() ctx: any,
//     @TypeGraphQL.Info() info: GraphQLResolveInfo, 
//     @TypeGraphQL.Args() args: FirebaseAuthArgs
//   ): Promise<User> {
//     const { _count } = transformFields(graphqlFields(info as any));

//     let error = FirebaseErrors.registerSubmit;
//     try {
//       const user = await firebaseGoogleLogin()
//       todo('Convert user to Prisma User')
//       if (user) {
//         return getPrismaFromContext(ctx).user.upsert({
//           ...args,
//           ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
//         });
//       }
//       throw(error)
//     } catch (e) {
//       log('GOOGLE AUTH FAIL',e)
//       throw(firebaseError(e, error));
//     }
//   }

//   @TypeGraphQL.Mutation((_returns) => User, {
//     nullable: false,
//   })
//   async firebaseUserAuth(
//     @TypeGraphQL.Ctx() ctx: any,
//     @TypeGraphQL.Info() info: GraphQLResolveInfo,
//     @TypeGraphQL.Args() args: FirebaseAuthArgs
//     ): Promise<User> {
//       const { _count } = transformFields(graphqlFields(info as any));
  
//       let error = FirebaseErrors.registerSubmit;
//       try {
//         log(args)
        
//         const user = await firebaseUserLogin(args)
//         todo('Convert user to Prisma User')
//         if (user) {
//           return getPrismaFromContext(ctx).user.upsert({
//             where: { email: args.email},
//             ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
//           });
//         }
//         throw(error)
//       } catch (e) {
//         log('USER AUTH FAIL',e)
//         throw(firebaseError(e, error));
//       }
//     }
// }
export {}