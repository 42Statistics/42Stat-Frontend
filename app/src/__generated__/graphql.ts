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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type DateRangeInput = {
  end?: InputMaybe<Scalars['DateTime']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type GetScaleTeamsFilter = {
  beginAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  finalMark?: InputMaybe<Scalars['Int']>;
  isFilled?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type GetScaleTeamsRange = {
  beginAtRange?: InputMaybe<DateRangeInput>;
  createdAtRange?: InputMaybe<DateRangeInput>;
  finalMarkRange?: InputMaybe<NumericInput>;
};

export type GetScaleTeamsSort = {
  key: GetScaleTeamsSortKey;
  order: SortOrder;
};

export enum GetScaleTeamsSortKey {
  BeginAt = 'BEGIN_AT',
  CorrectedsLeaderId = 'CORRECTEDS_LEADER_ID',
  CorrectorId = 'CORRECTOR_ID',
  CreatedAt = 'CREATED_AT',
  FinalMark = 'FINAL_MARK',
  TeamId = 'TEAM_ID'
}

export type GetTeamsFilter = {
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMarked?: InputMaybe<Scalars['Boolean']>;
  isValidated?: InputMaybe<Scalars['Boolean']>;
};

export type GetTeamsRange = {
  beginAtRange?: InputMaybe<DateRangeInput>;
  finalMarkRange?: InputMaybe<NumericInput>;
};

export type GetTeamsSort = {
  key: GetTeamsSortKey;
  order: SortOrder;
};

export enum GetTeamsSortKey {
  FinalMark = 'FINAL_MARK'
}

export type GraphArgsPeriodic = {
  /** graph의 결과를 해당 날짜의 값을 배열의 시작점으로 반환합니다. */
  after?: InputMaybe<Scalars['DateTime']>;
  /** graph의 결과를 해당 값 만큼 반환합니다. */
  first?: InputMaybe<Scalars['Int']>;
  interval?: GraphInterval;
};

export enum GraphInterval {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type GraphResultPeriodic = {
  __typename?: 'GraphResultPeriodic';
  after: Scalars['DateTime'];
  first: Scalars['Int'];
  value: Array<Maybe<Scalars['Int']>>;
};

export type NumericInput = {
  end?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getScaleTeamById?: Maybe<ScaleTeam>;
  getScaleTeams: Array<Maybe<ScaleTeam>>;
  getScaleTeamsGraph: ScaleTeamsGraph;
  getTeamById?: Maybe<Team>;
  getTeams: TeamPaginated;
  user: User;
};


export type QueryGetScaleTeamByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetScaleTeamsArgs = {
  after?: Scalars['String'];
  filter?: InputMaybe<GetScaleTeamsFilter>;
  first?: Scalars['Int'];
  range?: InputMaybe<GetScaleTeamsRange>;
  sort?: InputMaybe<GetScaleTeamsSort>;
};


export type QueryGetScaleTeamsGraphArgs = {
  filter?: InputMaybe<GetScaleTeamsFilter>;
  period?: GraphArgsPeriodic;
  range?: InputMaybe<GetScaleTeamsRange>;
};


export type QueryGetTeamByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetTeamsArgs = {
  after?: Scalars['String'];
  filter?: InputMaybe<GetTeamsFilter>;
  first?: Scalars['Int'];
  range?: InputMaybe<GetTeamsRange>;
  sort?: InputMaybe<GetTeamsSort>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type ScaleTeam = {
  __typename?: 'ScaleTeam';
  /** 평가 슬롯의 시작 시간 입니다. 실제 시작 시간은 다를 수 있습니다. */
  beginAt: Scalars['DateTime'];
  /** 평가자의 comment 입니다. */
  comment?: Maybe<Scalars['String']>;
  /** 평가 시간 전에는 null이 반환됩니다. */
  correcteds?: Maybe<Array<ScaleTeamUserPartial>>;
  /** 평가 시간 전에는 null이 반환됩니다. */
  corrector?: Maybe<ScaleTeamUserPartial>;
  createdAt: Scalars['DateTime'];
  /** 피평가자들의 feedback 입니다. */
  feedback?: Maybe<Scalars['String']>;
  filledAt?: Maybe<Scalars['DateTime']>;
  finalMark?: Maybe<Scalars['Int']>;
  flag: Scalars['String'];
  id: Scalars['ID'];
  scaleId: Scalars['ID'];
  scaleTeamTeamPartial: ScaleTeamTeamPartial;
  scales: Scalars['String'];
  teamPopulated: TeamPopulated;
  updatedAt: Scalars['DateTime'];
};

export type ScaleTeamTeamPartial = {
  __typename?: 'ScaleTeamTeamPartial';
  closedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  finalMark?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isClosed: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  isValidated?: Maybe<Scalars['Boolean']>;
  lockedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  projectId: Scalars['ID'];
  projectSessionId: Scalars['ID'];
  status: Scalars['String'];
  teamUsers: Array<TeamUserSpecific>;
  terminatingAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type ScaleTeamUserPartial = {
  __typename?: 'ScaleTeamUserPartial';
  id: Scalars['Int'];
  login: Scalars['String'];
};

export type ScaleTeamsGraph = {
  __typename?: 'ScaleTeamsGraph';
  /** 평가자의 comment, 피평가자의 feedback을 모두 포함합니다. */
  averageFeedbackLength: Scalars['Int'];
  /** 기간 별 평가의 개수를 배열로 반환합니다. */
  periodicCount: GraphResultPeriodic;
  /** 인자에 맞는 평가의 총 개수를 반환합니다. */
  totalCount: Scalars['Int'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Team = {
  __typename?: 'Team';
  closedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  finalMark?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isClosed: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  isValidated?: Maybe<Scalars['Boolean']>;
  lockedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  projectId: Scalars['ID'];
  projectSessionId: Scalars['ID'];
  status: Scalars['String'];
  teamScaleTeamsPartial: Array<Maybe<TeamScaleTeamPartial>>;
  teamUserPopulated: Array<TeamUserPopulated>;
  teamUsers: Array<TeamUserSpecific>;
  terminatingAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  cursor: Scalars['String'];
  node: Team;
};

export type TeamPageInfo = {
  __typename?: 'TeamPageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
};

export type TeamPaginated = {
  __typename?: 'TeamPaginated';
  edges?: Maybe<Array<TeamEdge>>;
  pageInfo: TeamPageInfo;
  totalCount: Scalars['Int'];
};

export type TeamPopulated = {
  __typename?: 'TeamPopulated';
  closedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  finalMark?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isClosed: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  isValidated?: Maybe<Scalars['Boolean']>;
  lockedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  projectId: Scalars['ID'];
  projectSessionId: Scalars['ID'];
  status: Scalars['String'];
  teamScaleTeamsPartial: Array<Maybe<TeamScaleTeamPartial>>;
  teamUsers: Array<TeamUserSpecific>;
  terminatingAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type TeamScaleTeamPartial = {
  __typename?: 'TeamScaleTeamPartial';
  /** 평가 슬롯의 시작 시간 입니다. 실제 시작 시간은 다를 수 있습니다. */
  beginAt: Scalars['DateTime'];
  /** 평가자의 comment 입니다. */
  comment?: Maybe<Scalars['String']>;
  /** 평가 시간 전에는 null이 반환됩니다. */
  correcteds?: Maybe<Array<ScaleTeamUserPartial>>;
  /** 평가 시간 전에는 null이 반환됩니다. */
  corrector?: Maybe<ScaleTeamUserPartial>;
  createdAt: Scalars['DateTime'];
  /** 피평가자들의 feedback 입니다. */
  feedback?: Maybe<Scalars['String']>;
  filledAt?: Maybe<Scalars['DateTime']>;
  finalMark?: Maybe<Scalars['Int']>;
  flag: Scalars['String'];
  id: Scalars['ID'];
  scaleId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type TeamUserPopulated = {
  __typename?: 'TeamUserPopulated';
  beginAt: Scalars['String'];
  blackholedAt?: Maybe<Scalars['String']>;
  correctionPoint: Scalars['Int'];
  grade: Scalars['String'];
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  isLeader: Scalars['Boolean'];
  level: Scalars['Float'];
  login: Scalars['String'];
  occurrence: Scalars['Int'];
  projectUserId: Scalars['ID'];
  projects: Array<Maybe<UserProject>>;
  titles: Array<Maybe<UserTitle>>;
  wallet: Scalars['Int'];
};

export type TeamUserSpecific = {
  __typename?: 'TeamUserSpecific';
  id: Scalars['ID'];
  isLeader: Scalars['Boolean'];
  login: Scalars['String'];
  occurrence: Scalars['Int'];
  projectUserId: Scalars['ID'];
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
  teams: Array<Maybe<Team>>;
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