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
  Book: ["user", "comments"],
  BookRating: ["user", "comment"],
  Comment: ["user", "commenton", "comments", "book", "bookrating"],
  Post: ["author", "post", "posts"],
  User: ["posts", "books", "comments", "bookratings"]
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
  Book: ["bookid", "cover", "created_at", "updated_at", "title", "description"],
  BookRating: ["bookratingid", "created_at", "updated_at"],
  Comment: ["commentid", "created_at", "updated_at", "content", "commentingid"],
  Post: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  User: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url"]
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
  BookGroupBy: ["bookid", "cover", "created_at", "updated_at", "title", "description", "_count", "_min", "_max"],
  AggregateBookRating: ["_count", "_min", "_max"],
  BookRatingGroupBy: ["bookratingid", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateComment: ["_count", "_min", "_max"],
  CommentGroupBy: ["commentid", "created_at", "updated_at", "content", "commentingid", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  BookCount: ["comments"],
  BookCountAggregate: ["bookid", "cover", "created_at", "updated_at", "title", "description", "_all"],
  BookMinAggregate: ["bookid", "cover", "created_at", "updated_at", "title", "description"],
  BookMaxAggregate: ["bookid", "cover", "created_at", "updated_at", "title", "description"],
  BookRatingCountAggregate: ["bookratingid", "created_at", "updated_at", "_all"],
  BookRatingMinAggregate: ["bookratingid", "created_at", "updated_at"],
  BookRatingMaxAggregate: ["bookratingid", "created_at", "updated_at"],
  CommentCount: ["comments"],
  CommentCountAggregate: ["commentid", "created_at", "updated_at", "content", "commentingid", "_all"],
  CommentMinAggregate: ["commentid", "created_at", "updated_at", "content", "commentingid"],
  CommentMaxAggregate: ["commentid", "created_at", "updated_at", "content", "commentingid"],
  PostCount: ["posts"],
  PostCountAggregate: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid", "_all"],
  PostMinAggregate: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  PostMaxAggregate: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  UserCount: ["posts", "books", "comments", "bookratings"],
  UserCountAggregate: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "_all"],
  UserMinAggregate: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url"],
  UserMaxAggregate: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url"]
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
  BookWhereInput: ["AND", "OR", "NOT", "bookid", "user", "cover", "created_at", "updated_at", "title", "description", "comments"],
  BookOrderByWithRelationInput: ["bookid", "user", "cover", "created_at", "updated_at", "title", "description", "comments"],
  BookWhereUniqueInput: ["bookid"],
  BookOrderByWithAggregationInput: ["bookid", "cover", "created_at", "updated_at", "title", "description", "_count", "_max", "_min"],
  BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "bookid", "cover", "created_at", "updated_at", "title", "description"],
  BookRatingWhereInput: ["AND", "OR", "NOT", "bookratingid", "user", "created_at", "updated_at", "comment"],
  BookRatingOrderByWithRelationInput: ["bookratingid", "user", "created_at", "updated_at", "comment"],
  BookRatingWhereUniqueInput: ["bookratingid"],
  BookRatingOrderByWithAggregationInput: ["bookratingid", "created_at", "updated_at", "_count", "_max", "_min"],
  BookRatingScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "bookratingid", "created_at", "updated_at"],
  CommentWhereInput: ["AND", "OR", "NOT", "commentid", "user", "created_at", "updated_at", "content", "commentingid", "commenton", "comments", "book", "bookrating"],
  CommentOrderByWithRelationInput: ["commentid", "user", "created_at", "updated_at", "content", "commentingid", "commenton", "comments", "book", "bookrating"],
  CommentWhereUniqueInput: ["commentid"],
  CommentOrderByWithAggregationInput: ["commentid", "created_at", "updated_at", "content", "commentingid", "_count", "_max", "_min"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "commentid", "created_at", "updated_at", "content", "commentingid"],
  PostWhereInput: ["AND", "OR", "NOT", "postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "replytoid", "post", "posts"],
  PostOrderByWithRelationInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "replytoid", "post", "posts"],
  PostWhereUniqueInput: ["postid"],
  PostOrderByWithAggregationInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid", "_count", "_max", "_min"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  UserWhereInput: ["AND", "OR", "NOT", "userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "books", "comments", "bookratings"],
  UserOrderByWithRelationInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "books", "comments", "bookratings"],
  UserWhereUniqueInput: ["userid", "username", "email", "uid"],
  UserOrderByWithAggregationInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url"],
  BookCreateInput: ["user", "cover", "created_at", "updated_at", "title", "description", "comments"],
  BookUpdateInput: ["user", "cover", "created_at", "updated_at", "title", "description", "comments"],
  BookCreateManyInput: ["bookid", "cover", "created_at", "updated_at", "title", "description"],
  BookUpdateManyMutationInput: ["cover", "created_at", "updated_at", "title", "description"],
  BookRatingCreateInput: ["user", "created_at", "updated_at", "comment"],
  BookRatingUpdateInput: ["user", "created_at", "updated_at", "comment"],
  BookRatingCreateManyInput: ["bookratingid", "created_at", "updated_at"],
  BookRatingUpdateManyMutationInput: ["created_at", "updated_at"],
  CommentCreateInput: ["user", "created_at", "updated_at", "content", "commenton", "comments", "book", "bookrating"],
  CommentUpdateInput: ["user", "created_at", "updated_at", "content", "commenton", "comments", "book", "bookrating"],
  CommentCreateManyInput: ["commentid", "created_at", "updated_at", "content", "commentingid"],
  CommentUpdateManyMutationInput: ["created_at", "updated_at", "content"],
  PostCreateInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "post", "posts"],
  PostUpdateInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "post", "posts"],
  PostCreateManyInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  PostUpdateManyMutationInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content"],
  UserCreateInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "books", "comments", "bookratings"],
  UserUpdateInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "books", "comments", "bookratings"],
  UserCreateManyInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url"],
  UserUpdateManyMutationInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UserRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CommentListRelationFilter: ["every", "some", "none"],
  CommentOrderByRelationAggregateInput: ["_count"],
  BookCountOrderByAggregateInput: ["bookid", "cover", "created_at", "updated_at", "title", "description"],
  BookMaxOrderByAggregateInput: ["bookid", "cover", "created_at", "updated_at", "title", "description"],
  BookMinOrderByAggregateInput: ["bookid", "cover", "created_at", "updated_at", "title", "description"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  CommentRelationFilter: ["is", "isNot"],
  BookRatingCountOrderByAggregateInput: ["bookratingid", "created_at", "updated_at"],
  BookRatingMaxOrderByAggregateInput: ["bookratingid", "created_at", "updated_at"],
  BookRatingMinOrderByAggregateInput: ["bookratingid", "created_at", "updated_at"],
  BookRelationFilter: ["is", "isNot"],
  BookRatingRelationFilter: ["is", "isNot"],
  CommentCountOrderByAggregateInput: ["commentid", "created_at", "updated_at", "content", "commentingid"],
  CommentMaxOrderByAggregateInput: ["commentid", "created_at", "updated_at", "content", "commentingid"],
  CommentMinOrderByAggregateInput: ["commentid", "created_at", "updated_at", "content", "commentingid"],
  PostRelationFilter: ["is", "isNot"],
  PostListRelationFilter: ["every", "some", "none"],
  PostOrderByRelationAggregateInput: ["_count"],
  PostCountOrderByAggregateInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  PostMaxOrderByAggregateInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  PostMinOrderByAggregateInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  BoolNullableFilter: ["equals", "not"],
  BookListRelationFilter: ["every", "some", "none"],
  BookRatingListRelationFilter: ["every", "some", "none"],
  BookOrderByRelationAggregateInput: ["_count"],
  BookRatingOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url"],
  UserMaxOrderByAggregateInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url"],
  UserMinOrderByAggregateInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserCreateNestedOneWithoutBooksInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutBookInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutBooksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  CommentUpdateManyWithoutBookNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutBookratingsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedOneWithoutBookratingInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutBookratingsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CommentUpdateOneRequiredWithoutBookratingNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutCommentonInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  BookRatingCreateNestedOneWithoutCommentInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CommentUpdateOneWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CommentUpdateManyWithoutCommentonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BookUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BookRatingUpdateOneWithoutCommentNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  PostUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookRatingCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BookUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BookRatingUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
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
  UserCreateWithoutBooksInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "comments", "bookratings"],
  UserCreateOrConnectWithoutBooksInput: ["where", "create"],
  CommentCreateWithoutBookInput: ["user", "created_at", "updated_at", "content", "commenton", "comments", "bookrating"],
  CommentCreateOrConnectWithoutBookInput: ["where", "create"],
  CommentCreateManyBookInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutBooksInput: ["update", "create"],
  UserUpdateWithoutBooksInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "comments", "bookratings"],
  CommentUpsertWithWhereUniqueWithoutBookInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutBookInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutBookInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "commentid", "created_at", "updated_at", "content", "commentingid"],
  UserCreateWithoutBookratingsInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "books", "comments"],
  UserCreateOrConnectWithoutBookratingsInput: ["where", "create"],
  CommentCreateWithoutBookratingInput: ["user", "created_at", "updated_at", "content", "commenton", "comments", "book"],
  CommentCreateOrConnectWithoutBookratingInput: ["where", "create"],
  UserUpsertWithoutBookratingsInput: ["update", "create"],
  UserUpdateWithoutBookratingsInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "books", "comments"],
  CommentUpsertWithoutBookratingInput: ["update", "create"],
  CommentUpdateWithoutBookratingInput: ["user", "created_at", "updated_at", "content", "commenton", "comments", "book"],
  UserCreateWithoutCommentsInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "books", "bookratings"],
  UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
  CommentCreateWithoutCommentsInput: ["user", "created_at", "updated_at", "content", "commenton", "book", "bookrating"],
  CommentCreateOrConnectWithoutCommentsInput: ["where", "create"],
  CommentCreateWithoutCommentonInput: ["user", "created_at", "updated_at", "content", "comments", "book", "bookrating"],
  CommentCreateOrConnectWithoutCommentonInput: ["where", "create"],
  CommentCreateManyCommentonInputEnvelope: ["data", "skipDuplicates"],
  BookCreateWithoutCommentsInput: ["user", "cover", "created_at", "updated_at", "title", "description"],
  BookCreateOrConnectWithoutCommentsInput: ["where", "create"],
  BookRatingCreateWithoutCommentInput: ["user", "created_at", "updated_at"],
  BookRatingCreateOrConnectWithoutCommentInput: ["where", "create"],
  UserUpsertWithoutCommentsInput: ["update", "create"],
  UserUpdateWithoutCommentsInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "posts", "books", "bookratings"],
  CommentUpsertWithoutCommentsInput: ["update", "create"],
  CommentUpdateWithoutCommentsInput: ["user", "created_at", "updated_at", "content", "commenton", "book", "bookrating"],
  CommentUpsertWithWhereUniqueWithoutCommentonInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutCommentonInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutCommentonInput: ["where", "data"],
  BookUpsertWithoutCommentsInput: ["update", "create"],
  BookUpdateWithoutCommentsInput: ["user", "cover", "created_at", "updated_at", "title", "description"],
  BookRatingUpsertWithoutCommentInput: ["update", "create"],
  BookRatingUpdateWithoutCommentInput: ["user", "created_at", "updated_at"],
  UserCreateWithoutPostsInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "books", "comments", "bookratings"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  PostCreateWithoutPostsInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "post"],
  PostCreateOrConnectWithoutPostsInput: ["where", "create"],
  PostCreateWithoutPostInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "posts"],
  PostCreateOrConnectWithoutPostInput: ["where", "create"],
  PostCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["userid", "created_at", "updated_at", "username", "email", "password", "uid", "email_verified", "is_anonymous", "display_name", "photo_url", "books", "comments", "bookratings"],
  PostUpsertWithoutPostsInput: ["update", "create"],
  PostUpdateWithoutPostsInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "post"],
  PostUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  PostCreateWithoutAuthorInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content", "post", "posts"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  BookCreateWithoutUserInput: ["cover", "created_at", "updated_at", "title", "description", "comments"],
  BookCreateOrConnectWithoutUserInput: ["where", "create"],
  BookCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutUserInput: ["created_at", "updated_at", "content", "commenton", "comments", "book", "bookrating"],
  CommentCreateOrConnectWithoutUserInput: ["where", "create"],
  CommentCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  BookRatingCreateWithoutUserInput: ["created_at", "updated_at", "comment"],
  BookRatingCreateOrConnectWithoutUserInput: ["where", "create"],
  BookRatingCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  BookUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  BookScalarWhereInput: ["AND", "OR", "NOT", "bookid", "cover", "created_at", "updated_at", "title", "description"],
  CommentUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  BookRatingUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  BookRatingUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  BookRatingUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  BookRatingScalarWhereInput: ["AND", "OR", "NOT", "bookratingid", "created_at", "updated_at"],
  CommentCreateManyBookInput: ["created_at", "updated_at", "content", "commentingid"],
  CommentUpdateWithoutBookInput: ["user", "created_at", "updated_at", "content", "commenton", "comments", "bookrating"],
  CommentCreateManyCommentonInput: ["commentid", "created_at", "updated_at", "content"],
  CommentUpdateWithoutCommentonInput: ["user", "created_at", "updated_at", "content", "comments", "book", "bookrating"],
  PostCreateManyPostInput: ["postid", "created_at", "updated_at", "title", "subtitle", "header_image", "content"],
  PostUpdateWithoutPostInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content", "author", "posts"],
  PostCreateManyAuthorInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content", "replytoid"],
  BookCreateManyUserInput: ["cover", "created_at", "updated_at", "title", "description"],
  CommentCreateManyUserInput: ["created_at", "updated_at", "content", "commentingid"],
  BookRatingCreateManyUserInput: ["created_at", "updated_at"],
  PostUpdateWithoutAuthorInput: ["created_at", "updated_at", "title", "subtitle", "header_image", "content", "post", "posts"],
  BookUpdateWithoutUserInput: ["cover", "created_at", "updated_at", "title", "description", "comments"],
  CommentUpdateWithoutUserInput: ["created_at", "updated_at", "content", "commenton", "comments", "book", "bookrating"],
  BookRatingUpdateWithoutUserInput: ["created_at", "updated_at", "comment"]
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

