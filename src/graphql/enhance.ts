import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Book: crudResolvers.BookCrudResolver,
  BookRating: crudResolvers.BookRatingCrudResolver,
  Comment: crudResolvers.CommentCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
  Book: {
    aggregateBook: actionResolvers.AggregateBookResolver,
    createManyBook: actionResolvers.CreateManyBookResolver,
    createOneBook: actionResolvers.CreateOneBookResolver,
    deleteManyBook: actionResolvers.DeleteManyBookResolver,
    deleteOneBook: actionResolvers.DeleteOneBookResolver,
    findFirstBook: actionResolvers.FindFirstBookResolver,
    books: actionResolvers.FindManyBookResolver,
    book: actionResolvers.FindUniqueBookResolver,
    groupByBook: actionResolvers.GroupByBookResolver,
    updateManyBook: actionResolvers.UpdateManyBookResolver,
    updateOneBook: actionResolvers.UpdateOneBookResolver,
    upsertOneBook: actionResolvers.UpsertOneBookResolver
  },
  BookRating: {
    aggregateBookRating: actionResolvers.AggregateBookRatingResolver,
    createManyBookRating: actionResolvers.CreateManyBookRatingResolver,
    createOneBookRating: actionResolvers.CreateOneBookRatingResolver,
    deleteManyBookRating: actionResolvers.DeleteManyBookRatingResolver,
    deleteOneBookRating: actionResolvers.DeleteOneBookRatingResolver,
    findFirstBookRating: actionResolvers.FindFirstBookRatingResolver,
    bookRatings: actionResolvers.FindManyBookRatingResolver,
    bookRating: actionResolvers.FindUniqueBookRatingResolver,
    groupByBookRating: actionResolvers.GroupByBookRatingResolver,
    updateManyBookRating: actionResolvers.UpdateManyBookRatingResolver,
    updateOneBookRating: actionResolvers.UpdateOneBookRatingResolver,
    upsertOneBookRating: actionResolvers.UpsertOneBookRatingResolver
  },
  Comment: {
    aggregateComment: actionResolvers.AggregateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    createOneComment: actionResolvers.CreateOneCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    deleteOneComment: actionResolvers.DeleteOneCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    comments: actionResolvers.FindManyCommentResolver,
    comment: actionResolvers.FindUniqueCommentResolver,
    groupByComment: actionResolvers.GroupByCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    updateOneComment: actionResolvers.UpdateOneCommentResolver,
    upsertOneComment: actionResolvers.UpsertOneCommentResolver
  },
  Post: {
    aggregatePost: actionResolvers.AggregatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    createOnePost: actionResolvers.CreateOnePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    deleteOnePost: actionResolvers.DeleteOnePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    post: actionResolvers.FindUniquePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    updateOnePost: actionResolvers.UpdateOnePostResolver,
    upsertOnePost: actionResolvers.UpsertOnePostResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  }
};
const crudResolversInfo = {
  Book: ["aggregateBook", "createManyBook", "createOneBook", "deleteManyBook", "deleteOneBook", "findFirstBook", "books", "book", "groupByBook", "updateManyBook", "updateOneBook", "upsertOneBook"],
  BookRating: ["aggregateBookRating", "createManyBookRating", "createOneBookRating", "deleteManyBookRating", "deleteOneBookRating", "findFirstBookRating", "bookRatings", "bookRating", "groupByBookRating", "updateManyBookRating", "updateOneBookRating", "upsertOneBookRating"],
  Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "comments", "comment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"],
  Post: ["aggregatePost", "createManyPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "posts", "post", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"]
};
const argsInfo = {
  AggregateBookArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyBookArgs: ["data", "skipDuplicates"],
  CreateOneBookArgs: ["data"],
  DeleteManyBookArgs: ["where"],
  DeleteOneBookArgs: ["where"],
  FindFirstBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueBookArgs: ["where"],
  GroupByBookArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyBookArgs: ["data", "where"],
  UpdateOneBookArgs: ["data", "where"],
  UpsertOneBookArgs: ["where", "create", "update"],
  AggregateBookRatingArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyBookRatingArgs: ["data", "skipDuplicates"],
  CreateOneBookRatingArgs: ["data"],
  DeleteManyBookRatingArgs: ["where"],
  DeleteOneBookRatingArgs: ["where"],
  FindFirstBookRatingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBookRatingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueBookRatingArgs: ["where"],
  GroupByBookRatingArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyBookRatingArgs: ["data", "where"],
  UpdateOneBookRatingArgs: ["data", "where"],
  UpsertOneBookRatingArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  CreateOneCommentArgs: ["data"],
  DeleteManyCommentArgs: ["where"],
  DeleteOneCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommentArgs: ["where"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommentArgs: ["data", "where"],
  UpdateOneCommentArgs: ["data", "where"],
  UpsertOneCommentArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  CreateOnePostArgs: ["data"],
  DeleteManyPostArgs: ["where"],
  DeleteOnePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostArgs: ["where"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostArgs: ["data", "where"],
  UpdateOnePostArgs: ["data", "where"],
  UpsertOnePostArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Book: relationResolvers.BookRelationsResolver,
  BookRating: relationResolvers.BookRatingRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
  Book: ["author", "book_comments", "book_ratings"],
  BookRating: ["author", "book"],
  Comment: ["author", "book"],
  Post: ["author"],
  User: ["posts", "comments", "books", "ratings"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Book: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description"],
  BookRating: ["bookratingid", "authorid", "bookid", "created_at", "updated_at"],
  Comment: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid"],
  Post: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId"],
  User: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateBook: ["_count", "_min", "_max"],
  BookGroupBy: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description", "_count", "_min", "_max"],
  AggregateBookRating: ["_count", "_min", "_max"],
  BookRatingGroupBy: ["bookratingid", "authorid", "bookid", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateComment: ["_count", "_min", "_max"],
  CommentGroupBy: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  BookCount: ["book_comments", "book_ratings"],
  BookCountAggregate: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description", "_all"],
  BookMinAggregate: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description"],
  BookMaxAggregate: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description"],
  BookRatingCountAggregate: ["bookratingid", "authorid", "bookid", "created_at", "updated_at", "_all"],
  BookRatingMinAggregate: ["bookratingid", "authorid", "bookid", "created_at", "updated_at"],
  BookRatingMaxAggregate: ["bookratingid", "authorid", "bookid", "created_at", "updated_at"],
  CommentCountAggregate: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid", "_all"],
  CommentMinAggregate: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid"],
  CommentMaxAggregate: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid"],
  PostCountAggregate: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId", "_all"],
  PostMinAggregate: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId"],
  PostMaxAggregate: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId"],
  UserCount: ["posts", "comments", "books", "ratings"],
  UserCountAggregate: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "_all"],
  UserMinAggregate: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt"],
  UserMaxAggregate: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  BookWhereInput: ["AND", "OR", "NOT", "bookid", "author", "authorid", "cover", "created_at", "updated_at", "title", "description", "book_comments", "book_ratings"],
  BookOrderByWithRelationInput: ["bookid", "author", "authorid", "cover", "created_at", "updated_at", "title", "description", "book_comments", "book_ratings"],
  BookWhereUniqueInput: ["bookid"],
  BookOrderByWithAggregationInput: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description", "_count", "_max", "_min"],
  BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "bookid", "authorid", "cover", "created_at", "updated_at", "title", "description"],
  BookRatingWhereInput: ["AND", "OR", "NOT", "bookratingid", "author", "authorid", "book", "bookid", "created_at", "updated_at"],
  BookRatingOrderByWithRelationInput: ["bookratingid", "author", "authorid", "book", "bookid", "created_at", "updated_at"],
  BookRatingWhereUniqueInput: ["bookratingid"],
  BookRatingOrderByWithAggregationInput: ["bookratingid", "authorid", "bookid", "created_at", "updated_at", "_count", "_max", "_min"],
  BookRatingScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "bookratingid", "authorid", "bookid", "created_at", "updated_at"],
  CommentWhereInput: ["AND", "OR", "NOT", "commentid", "author", "authorid", "created_at", "updated_at", "content", "book", "bookid"],
  CommentOrderByWithRelationInput: ["commentid", "author", "authorid", "created_at", "updated_at", "content", "book", "bookid"],
  CommentWhereUniqueInput: ["commentid"],
  CommentOrderByWithAggregationInput: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid", "_count", "_max", "_min"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "commentid", "authorid", "created_at", "updated_at", "content", "bookid"],
  PostWhereInput: ["AND", "OR", "NOT", "postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "authorId"],
  PostOrderByWithRelationInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "authorId"],
  PostWhereUniqueInput: ["postid"],
  PostOrderByWithAggregationInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId", "_count", "_max", "_min"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId"],
  UserWhereInput: ["AND", "OR", "NOT", "uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "comments", "books", "ratings"],
  UserOrderByWithRelationInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "comments", "books", "ratings"],
  UserWhereUniqueInput: ["uid", "email"],
  UserOrderByWithAggregationInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt"],
  BookCreateInput: ["bookid", "author", "cover", "created_at", "updated_at", "title", "description", "book_comments", "book_ratings"],
  BookUpdateInput: ["bookid", "author", "cover", "created_at", "updated_at", "title", "description", "book_comments", "book_ratings"],
  BookCreateManyInput: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description"],
  BookUpdateManyMutationInput: ["bookid", "cover", "created_at", "updated_at", "title", "description"],
  BookRatingCreateInput: ["bookratingid", "author", "book", "created_at", "updated_at"],
  BookRatingUpdateInput: ["bookratingid", "author", "book", "created_at", "updated_at"],
  BookRatingCreateManyInput: ["bookratingid", "authorid", "bookid", "created_at", "updated_at"],
  BookRatingUpdateManyMutationInput: ["bookratingid", "created_at", "updated_at"],
  CommentCreateInput: ["commentid", "author", "created_at", "updated_at", "content", "book"],
  CommentUpdateInput: ["commentid", "author", "created_at", "updated_at", "content", "book"],
  CommentCreateManyInput: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid"],
  CommentUpdateManyMutationInput: ["commentid", "created_at", "updated_at", "content"],
  PostCreateInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "author"],
  PostUpdateInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "author"],
  PostCreateManyInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId"],
  PostUpdateManyMutationInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content"],
  UserCreateInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "comments", "books", "ratings"],
  UserUpdateInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "comments", "books", "ratings"],
  UserCreateManyInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt"],
  UserUpdateManyMutationInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UserRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CommentListRelationFilter: ["every", "some", "none"],
  BookRatingListRelationFilter: ["every", "some", "none"],
  CommentOrderByRelationAggregateInput: ["_count"],
  BookRatingOrderByRelationAggregateInput: ["_count"],
  BookCountOrderByAggregateInput: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description"],
  BookMaxOrderByAggregateInput: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description"],
  BookMinOrderByAggregateInput: ["bookid", "authorid", "cover", "created_at", "updated_at", "title", "description"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BookRelationFilter: ["is", "isNot"],
  BookRatingCountOrderByAggregateInput: ["bookratingid", "authorid", "bookid", "created_at", "updated_at"],
  BookRatingMaxOrderByAggregateInput: ["bookratingid", "authorid", "bookid", "created_at", "updated_at"],
  BookRatingMinOrderByAggregateInput: ["bookratingid", "authorid", "bookid", "created_at", "updated_at"],
  CommentCountOrderByAggregateInput: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid"],
  CommentMaxOrderByAggregateInput: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid"],
  CommentMinOrderByAggregateInput: ["commentid", "authorid", "created_at", "updated_at", "content", "bookid"],
  PostCountOrderByAggregateInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId"],
  PostMaxOrderByAggregateInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId"],
  PostMinOrderByAggregateInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId"],
  BoolNullableFilter: ["equals", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  BookListRelationFilter: ["every", "some", "none"],
  PostOrderByRelationAggregateInput: ["_count"],
  BookOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt"],
  UserMaxOrderByAggregateInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt"],
  UserMinOrderByAggregateInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserCreateNestedOneWithoutBooksInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutBookInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookRatingCreateNestedManyWithoutBookInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutBooksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  CommentUpdateManyWithoutBookNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BookRatingUpdateManyWithoutBookNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutRatingsInput: ["create", "connectOrCreate", "connect"],
  BookCreateNestedOneWithoutBook_ratingsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutRatingsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BookUpdateOneRequiredWithoutBook_ratingsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  BookCreateNestedOneWithoutBook_commentsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BookUpdateOneRequiredWithoutBook_commentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookRatingCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BookUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BookRatingUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolNullableFilter: ["equals", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserCreateWithoutBooksInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "comments", "ratings"],
  UserCreateOrConnectWithoutBooksInput: ["where", "create"],
  CommentCreateWithoutBookInput: ["commentid", "author", "created_at", "updated_at", "content"],
  CommentCreateOrConnectWithoutBookInput: ["where", "create"],
  CommentCreateManyBookInputEnvelope: ["data", "skipDuplicates"],
  BookRatingCreateWithoutBookInput: ["bookratingid", "author", "created_at", "updated_at"],
  BookRatingCreateOrConnectWithoutBookInput: ["where", "create"],
  BookRatingCreateManyBookInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutBooksInput: ["update", "create"],
  UserUpdateWithoutBooksInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "comments", "ratings"],
  CommentUpsertWithWhereUniqueWithoutBookInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutBookInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutBookInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "commentid", "authorid", "created_at", "updated_at", "content", "bookid"],
  BookRatingUpsertWithWhereUniqueWithoutBookInput: ["where", "update", "create"],
  BookRatingUpdateWithWhereUniqueWithoutBookInput: ["where", "data"],
  BookRatingUpdateManyWithWhereWithoutBookInput: ["where", "data"],
  BookRatingScalarWhereInput: ["AND", "OR", "NOT", "bookratingid", "authorid", "bookid", "created_at", "updated_at"],
  UserCreateWithoutRatingsInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "comments", "books"],
  UserCreateOrConnectWithoutRatingsInput: ["where", "create"],
  BookCreateWithoutBook_ratingsInput: ["bookid", "author", "cover", "created_at", "updated_at", "title", "description", "book_comments"],
  BookCreateOrConnectWithoutBook_ratingsInput: ["where", "create"],
  UserUpsertWithoutRatingsInput: ["update", "create"],
  UserUpdateWithoutRatingsInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "comments", "books"],
  BookUpsertWithoutBook_ratingsInput: ["update", "create"],
  BookUpdateWithoutBook_ratingsInput: ["bookid", "author", "cover", "created_at", "updated_at", "title", "description", "book_comments"],
  UserCreateWithoutCommentsInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "books", "ratings"],
  UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
  BookCreateWithoutBook_commentsInput: ["bookid", "author", "cover", "created_at", "updated_at", "title", "description", "book_ratings"],
  BookCreateOrConnectWithoutBook_commentsInput: ["where", "create"],
  UserUpsertWithoutCommentsInput: ["update", "create"],
  UserUpdateWithoutCommentsInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "posts", "books", "ratings"],
  BookUpsertWithoutBook_commentsInput: ["update", "create"],
  BookUpdateWithoutBook_commentsInput: ["bookid", "author", "cover", "created_at", "updated_at", "title", "description", "book_ratings"],
  UserCreateWithoutPostsInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "comments", "books", "ratings"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["uid", "email", "emailVerified", "isAnonymous", "displayName", "photoURL", "createdAt", "lastLoginAt", "comments", "books", "ratings"],
  PostCreateWithoutAuthorInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutAuthorInput: ["commentid", "created_at", "updated_at", "content", "book"],
  CommentCreateOrConnectWithoutAuthorInput: ["where", "create"],
  CommentCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  BookCreateWithoutAuthorInput: ["bookid", "cover", "created_at", "updated_at", "title", "description", "book_comments", "book_ratings"],
  BookCreateOrConnectWithoutAuthorInput: ["where", "create"],
  BookCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  BookRatingCreateWithoutAuthorInput: ["bookratingid", "book", "created_at", "updated_at"],
  BookRatingCreateOrConnectWithoutAuthorInput: ["where", "create"],
  BookRatingCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "authorId"],
  CommentUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  BookUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  BookScalarWhereInput: ["AND", "OR", "NOT", "bookid", "authorid", "cover", "created_at", "updated_at", "title", "description"],
  BookRatingUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  BookRatingUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  BookRatingUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  CommentCreateManyBookInput: ["commentid", "authorid", "created_at", "updated_at", "content"],
  BookRatingCreateManyBookInput: ["bookratingid", "authorid", "created_at", "updated_at"],
  CommentUpdateWithoutBookInput: ["commentid", "author", "created_at", "updated_at", "content"],
  BookRatingUpdateWithoutBookInput: ["bookratingid", "author", "created_at", "updated_at"],
  PostCreateManyAuthorInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content"],
  CommentCreateManyAuthorInput: ["commentid", "created_at", "updated_at", "content", "bookid"],
  BookCreateManyAuthorInput: ["bookid", "cover", "created_at", "updated_at", "title", "description"],
  BookRatingCreateManyAuthorInput: ["bookratingid", "bookid", "created_at", "updated_at"],
  PostUpdateWithoutAuthorInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content"],
  CommentUpdateWithoutAuthorInput: ["commentid", "created_at", "updated_at", "content", "book"],
  BookUpdateWithoutAuthorInput: ["bookid", "cover", "created_at", "updated_at", "title", "description", "book_comments", "book_ratings"],
  BookRatingUpdateWithoutAuthorInput: ["bookratingid", "book", "created_at", "updated_at"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

