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
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
};

export type Coalition = {
  __typename?: 'Coalition';
  id: Scalars['ID'];
  name: Scalars['Int'];
};

export type Corrector = {
  __typename?: 'Corrector';
  comment: Scalars['String'];
  /** 피평가자가 평가자에게 5점 만점 중 몇 점을 주었는가 입니다. */
  correctorRate: Scalars['Int'];
  id: Scalars['ID'];
  imgUrl?: Maybe<Scalars['URL']>;
  login: Scalars['String'];
};

export type DestinyUser = {
  __typename?: 'DestinyUser';
  id: Scalars['ID'];
  imgUrl?: Maybe<Scalars['URL']>;
  login: Scalars['String'];
  score: Scalars['Int'];
};

export type EvalCntPerPoint = {
  __typename?: 'EvalCntPerPoint';
  evalCnt: Scalars['Int'];
  point: Scalars['Int'];
};

export type EvalProfile = {
  __typename?: 'EvalProfile';
  averageDuration: Scalars['Int'];
  /** 평가자, 피평가자 모두 포함해서 계산된 값 입니다. */
  averageFeedbackLength: Scalars['Int'];
  /** 평가자 기준으로 준 평균 점수 입니다. */
  averageFinalMark: Scalars['Float'];
  currMonthCnt: Scalars['Int'];
  lastMonthCnt: Scalars['Int'];
};

export enum EvalUserDifficulty {
  Easy = 'EASY',
  Hard = 'HARD',
  Hell = 'HELL',
  Medium = 'MEDIUM'
}

export enum EvalUserEnum {
  Any = 'ANY',
  Corrected = 'CORRECTED',
  Corrector = 'CORRECTOR'
}

export type EvalUserInfo = {
  __typename?: 'EvalUserInfo';
  destinyUsers: Array<Maybe<DestinyUser>>;
  difficulty: EvalUserDifficulty;
  totalEvalCnt: Scalars['Int'];
};

export type ExamResult = {
  __typename?: 'ExamResult';
  passCnt: Scalars['Int'];
  rank: Scalars['Int'];
  total: Scalars['Int'];
};

export type Flag = {
  __typename?: 'Flag';
  id: Scalars['ID'];
  isPositive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type Home = {
  __typename?: 'Home';
  currMonthBlackholedCnt: Scalars['Int'];
  currRegisteredCntRank: Array<ProjectRanking>;
  currWeekEvalCnt: Scalars['Int'];
  lastExamResult: Array<ExamResult>;
  lastMonthBlackholedCnt: Scalars['Int'];
  lastWeekEvalCnt: Scalars['Int'];
  levelRank: Array<UserRanking>;
  monthlyAccessTimeRank: Array<UserRanking>;
  monthlyExpIncrementRank: Array<UserRanking>;
  totalEvalCntRank: Array<UserRanking>;
};

export type LevelGraph = {
  __typename?: 'LevelGraph';
  averageLevel: Scalars['Float'];
  date: Scalars['DateTime'];
  userLevel: Scalars['Float'];
};

export type LogtimeInfo = {
  __typename?: 'LogtimeInfo';
  currMonthLogtime: Scalars['Int'];
  lastMonthLogtime: Scalars['Int'];
  preferredCluster: Scalars['String'];
  preferredTime: PreferredTime;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
};

export type PersonalEval = {
  __typename?: 'PersonalEval';
  evalProfile: EvalProfile;
  personalProfile: UserProfile;
  scaleTeams: PersonalScaleTeamsPaginated;
};


export type PersonalEvalScaleTeamsArgs = {
  evalUserType?: EvalUserEnum;
  outstandingOnly?: InputMaybe<Scalars['Boolean']>;
  subjectName?: InputMaybe<Scalars['String']>;
  targetUserName?: InputMaybe<Scalars['String']>;
};

export type PersonalGeneral = {
  __typename?: 'PersonalGeneral';
  evalUserInfo: EvalUserInfo;
  levelGraphs: LevelGraph;
  logtimeInfo: LogtimeInfo;
  personalProfile: UserProfile;
  teamInfo: TeamInfo;
};

export type PersonalScaleTeam = {
  __typename?: 'PersonalScaleTeam';
  beginAt: Scalars['DateTime'];
  corrector: Corrector;
  /** 피평가자의 피드백 입니다. */
  feedback: Scalars['String'];
  finalMark: Scalars['Int'];
  flag: Flag;
  projectPreview: ProjectPreview;
  teamPreview: TeamPreview;
};

export type PersonalScaleTeamEdge = {
  __typename?: 'PersonalScaleTeamEdge';
  cursor: Scalars['String'];
  node: PersonalScaleTeam;
};

export type PersonalScaleTeamsPaginated = {
  __typename?: 'PersonalScaleTeamsPaginated';
  edges?: Maybe<Array<PersonalScaleTeamEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PreferredTime = {
  __typename?: 'PreferredTime';
  daytime: Scalars['Int'];
  evening: Scalars['Int'];
  morning: Scalars['Int'];
  night: Scalars['Int'];
};

export type ProjectInfo = {
  __typename?: 'ProjectInfo';
  averageDurationTime: Scalars['Int'];
  averagePassFinalmark: Scalars['Int'];
  currRegisteredCnt: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  passPercentage: Scalars['Int'];
  skills: Array<Maybe<Scalars['String']>>;
  /** 총 제출 횟수 입니다. */
  totalCloseCnt: Scalars['Int'];
  totalEvalCnt: Scalars['Int'];
};

export type ProjectPreview = {
  __typename?: 'ProjectPreview';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProjectRanking = {
  __typename?: 'ProjectRanking';
  projectPreview: ProjectPreview;
  value: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getHomePage: Home;
  getPersonGeneralPage: PersonalGeneral;
  getPersonalEvalPage: PersonalEval;
  getTotalPage: Total;
};

export type Record = {
  __typename?: 'Record';
  at: Scalars['DateTime'];
  value: Scalars['Int'];
};

export type ScoreInfo = {
  __typename?: 'ScoreInfo';
  current: Scalars['Int'];
  rankInCoalition: Scalars['Int'];
  rankInTotal: Scalars['Int'];
};

export type ScoreRecords = {
  __typename?: 'ScoreRecords';
  coalitionName: Scalars['Int'];
  records: Array<Record>;
};

export type TeamInfo = {
  __typename?: 'TeamInfo';
  lastPass?: Maybe<Scalars['String']>;
  lastRegistered?: Maybe<Scalars['String']>;
  teams: Array<Maybe<TempTeam>>;
};

export type TeamPreview = {
  __typename?: 'TeamPreview';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['URL'];
};

export type TempTeam = {
  __typename?: 'TempTeam';
  closedAt?: Maybe<Scalars['DateTime']>;
  finalMark?: Maybe<Scalars['Int']>;
  firstCreatedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** true면 통과, false면 fail, null이면 미평가 입니다. */
  isValidated?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  occurrence: Scalars['Int'];
};

export type Total = {
  __typename?: 'Total';
  activeUserCntRecords: Array<Record>;
  averageCircleDurations: Array<ValuePerCircle>;
  averageFeedbackLength: Scalars['Int'];
  blackholedCntPerCircles: Array<ValuePerCircle>;
  correctionPointRanks: Array<UserRanking>;
  evalCntPerPoints: Array<EvalCntPerPoint>;
  monthlyScoreRanks: Array<UserRanking>;
  projectInfo: ProjectInfo;
  scoreRecords: Array<ScoreRecords>;
  totalEvalCnt: Scalars['Int'];
  totalScores: Array<TotalScore>;
  userCntPerLevels: Array<UserCntPerLevel>;
  userCntPerPoints: Array<UserCntPerPoint>;
  walletRanks: Array<UserRanking>;
};


export type TotalProjectInfoArgs = {
  projectName?: Scalars['String'];
};

export type TotalScore = {
  __typename?: 'TotalScore';
  coalitionName: Scalars['Int'];
  score: Scalars['Int'];
};

export type UserCntPerLevel = {
  __typename?: 'UserCntPerLevel';
  level: Scalars['Int'];
  userCnt: Scalars['Int'];
};

export type UserCntPerPoint = {
  __typename?: 'UserCntPerPoint';
  point: Scalars['Int'];
  userCnt: Scalars['Int'];
};

export enum UserGrade {
  Learner = 'LEARNER',
  Member = 'MEMBER'
}

export type UserPreview = {
  __typename?: 'UserPreview';
  id: Scalars['ID'];
  imgUrl?: Maybe<Scalars['URL']>;
  login: Scalars['String'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  blackholedAt?: Maybe<Scalars['DateTime']>;
  coalition?: Maybe<Coalition>;
  correctionPoint: Scalars['Int'];
  grade?: Maybe<UserGrade>;
  id: Scalars['ID'];
  imgUrl: Scalars['String'];
  level: Scalars['Float'];
  levelRank: Scalars['Int'];
  login: Scalars['String'];
  name: Scalars['String'];
  personalProfile: UserProfile;
  pooledAt: Scalars['DateTime'];
  scoreInfo: ScoreInfo;
  titles: Array<Maybe<UserTitle>>;
  wallet: Scalars['Int'];
};

export type UserRanking = {
  __typename?: 'UserRanking';
  userPreview: UserPreview;
  value: Scalars['Float'];
};

export type UserTitle = {
  __typename?: 'UserTitle';
  id: Scalars['ID'];
  isSelected: Scalars['Boolean'];
  name: Scalars['String'];
};

export type ValuePerCircle = {
  __typename?: 'ValuePerCircle';
  circle: Scalars['Int'];
  value: Scalars['Int'];
};

export type GetCurrMonthBlackholedCntQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrMonthBlackholedCntQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', currMonthBlackholedCnt: number, lastMonthBlackholedCnt: number } };

export type GetCurrRegisteredCntRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrRegisteredCntRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', currRegisteredCntRank: Array<{ __typename?: 'ProjectRanking', value: number, projectPreview: { __typename?: 'ProjectPreview', name: string } }> } };

export type GetCurrWeekEvalCntQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrWeekEvalCntQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', currWeekEvalCnt: number, lastWeekEvalCnt: number } };

export type GetLastExamResultQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastExamResultQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', lastExamResult: Array<{ __typename?: 'ExamResult', rank: number, passCnt: number, total: number }> } };

export type GetLevelRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLevelRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', levelRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: any | null } }> } };

export type GetMonthlyAccessTimeRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonthlyAccessTimeRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', monthlyAccessTimeRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: any | null } }> } };

export type GetMonthlyExpIncrementRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonthlyExpIncrementRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', monthlyExpIncrementRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: any | null } }> } };

export type GetTotalEvalCntRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalEvalCntRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', totalEvalCntRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: any | null } }> } };


export const GetCurrMonthBlackholedCntDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrMonthBlackholedCnt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currMonthBlackholedCnt"}},{"kind":"Field","name":{"kind":"Name","value":"lastMonthBlackholedCnt"}}]}}]}}]} as unknown as DocumentNode<GetCurrMonthBlackholedCntQuery, GetCurrMonthBlackholedCntQueryVariables>;
export const GetCurrRegisteredCntRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrRegisteredCntRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCntRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrRegisteredCntRankQuery, GetCurrRegisteredCntRankQueryVariables>;
export const GetCurrWeekEvalCntDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrWeekEvalCnt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currWeekEvalCnt"}},{"kind":"Field","name":{"kind":"Name","value":"lastWeekEvalCnt"}}]}}]}}]} as unknown as DocumentNode<GetCurrWeekEvalCntQuery, GetCurrWeekEvalCntQueryVariables>;
export const GetLastExamResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"passCnt"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastExamResultQuery, GetLastExamResultQueryVariables>;
export const GetLevelRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLevelRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetLevelRankQuery, GetLevelRankQueryVariables>;
export const GetMonthlyAccessTimeRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMonthlyAccessTimeRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyAccessTimeRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetMonthlyAccessTimeRankQuery, GetMonthlyAccessTimeRankQueryVariables>;
export const GetMonthlyExpIncrementRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMonthlyExpIncrementRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyExpIncrementRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetMonthlyExpIncrementRankQuery, GetMonthlyExpIncrementRankQueryVariables>;
export const GetTotalEvalCntRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalEvalCntRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCntRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetTotalEvalCntRankQuery, GetTotalEvalCntRankQueryVariables>;