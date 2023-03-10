/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  user: User;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

/** single User model */
export type User = {
  __typename?: 'User';
  beginAt: Scalars['String'];
  blackholedAt?: Maybe<Scalars['String']>;
  correctionPoint: Scalars['Int'];
  grade: Scalars['String'];
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  login: Scalars['String'];
  projects: Array<Maybe<UserProject>>;
  titles: Array<Maybe<UserTitle>>;
  wallet: Scalars['Int'];
};

export type UserProject = {
  __typename?: 'UserProject';
  createdAt: Scalars['String'];
  currentTeamId: Scalars['Int'];
  cursusId: Scalars['Int'];
  finalMark?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  marked: Scalars['Boolean'];
  markedAt?: Maybe<Scalars['String']>;
  occurrence: Scalars['Int'];
  projectId: Scalars['Int'];
  projectName: Scalars['String'];
  status: Scalars['String'];
  validated?: Maybe<Scalars['Boolean']>;
};

export type UserTitle = {
  __typename?: 'UserTitle';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  selected: Scalars['Boolean'];
  updatedAt: Scalars['String'];
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: number, login: string } };


export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;