import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType()
export class FireCode {
  @TypeGraphQL.Field((_type) => String)
  code: string;
  
  @TypeGraphQL.Field((_type) => String)
  message: string;
};

export const FirebaseErrors = {
  wrongPassword: {
    code: "auth/wrong-password",
    message: "Password incorrect",
  },
  authError: {
    code: "auth/ctx-error",
    message: "User not found",
  },
  notFound: {
    code: "auth/user-not-found",
    message: "User not found",
  },
  duplicateUser: {
    code: "auth/email-already-in-use",
    message: "Unable to complete registration",
  },
  generic: {
    code: "unknown",
    message: "An unknown error has ocurred",
  }
};

export const firebaseError = (error?: any, defaultTo?: FireCode) => {
  try {
    const e = Object.values(FirebaseErrors).filter(
      (e) => JSON.stringify(e).indexOf(error.code) >= 0
    )[0];
    if (e) return e;
  } catch (e) {}

  return defaultTo || FirebaseErrors.generic;
};
