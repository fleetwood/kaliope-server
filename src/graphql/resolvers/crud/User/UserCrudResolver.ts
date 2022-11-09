import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateOneUserArgs } from "./args/UpdateOneUserArgs";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";
import { hash } from "argon2";
import { log } from "console";
import { FirebaseError } from "firebase/app";
import { FirebaseErrors, firebaseUserCreate, firebaseError, firebaseGoogleLogin, firebaseUserLogin } from "./../../../../firebase/FirebaseAuthContext";
import { todo } from "./../../../../helpers";
import { ArgsType, ObjectType } from "type-graphql";

@TypeGraphQL.Resolver(_of => User)
export class UserCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUser, {
    nullable: false
  })
  async aggregateUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserArgs): Promise<AggregateUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async createOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserArgs): Promise<User> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true
  })
  async deleteOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserArgs): Promise<User | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserArgs): Promise<User | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    log('findFirstUser',args)
    return getPrismaFromContext(ctx).user.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserArgs): Promise<User[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserArgs): Promise<User | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    log('user (findUnique)',args)
    return getPrismaFromContext(ctx).user.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserGroupBy], {
    nullable: false
  })
  async groupByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserArgs): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true
  })
  async updateOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserArgs): Promise<User | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async upsertOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserArgs): Promise<User> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

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
