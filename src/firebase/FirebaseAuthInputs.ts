import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("FirebaseProviderData", { isAbstract: true })
export class FirebaseProviderData {
  @TypeGraphQL.Field((_type) => String)
  providerId: string;

  @TypeGraphQL.Field((_type) => String)
  uid: string;

  @TypeGraphQL.Field((_type) => String)
  email: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  displayName?: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  phoneNumber?: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  photoURL?: string;
}

@TypeGraphQL.InputType("FirebaseTokenManager", { isAbstract: true })
export class FirebaseTokenManager {
  @TypeGraphQL.Field((_type) => String)
  refreshToken: string;

  @TypeGraphQL.Field((_type) => String)
  accessToken: string;

  @TypeGraphQL.Field((_type) => Number)
  expirationTime: number;
}

@TypeGraphQL.InputType("FirebaseAuthInput", { isAbstract: true })
export class FirebaseAuthInput {
  @TypeGraphQL.Field((_type) => String)
  uid: string;

  @TypeGraphQL.Field((_type) => String)
  email: string;

  @TypeGraphQL.Field((_type) => Boolean)
  emailVerified: boolean;

  @TypeGraphQL.Field((_type) => Boolean)
  isAnonymous: boolean;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  displayName: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  photoURL: string;

  @TypeGraphQL.Field((_type) => String)
  createdAt: string;

  @TypeGraphQL.Field((_type) => String)
  lastLoginAt: string;

  @TypeGraphQL.Field((_type) => String)
  apiKey: string;

  @TypeGraphQL.Field((_type) => String)
  appName: string;

  @TypeGraphQL.Field((_type) => [FirebaseProviderData])
  providerData: [FirebaseProviderData];

  @TypeGraphQL.Field((_type) => FirebaseTokenManager)
  stsTokenManager: FirebaseTokenManager;
}

@TypeGraphQL.ArgsType()
export class FirebaseAuthArgs {
  @TypeGraphQL.Field((_type) => FirebaseAuthInput, {
    nullable: false,
  })
  data!: FirebaseAuthInput;
}
