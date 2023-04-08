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
  DateTime: string;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
};

export enum CoaliltionName {
  Gam = 'GAM',
  Gon = 'GON',
  Gun = 'GUN',
  Lee = 'LEE'
}

export type Coalition = {
  __typename?: 'Coalition';
  id: Scalars['ID'];
  name: CoaliltionName;
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
  totalCnt: Scalars['Int'];
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
  scaleTeams: PersonalScaleTeamsPaginated;
  userProfile: UserProfile;
};


export type PersonalEvalScaleTeamsArgs = {
  after?: Scalars['String'];
  evalUserType?: Scalars['Int'];
  first?: Scalars['Int'];
  outstandingOnly?: InputMaybe<Scalars['Boolean']>;
  subjectName?: InputMaybe<Scalars['String']>;
  targetUserName?: InputMaybe<Scalars['String']>;
};

export type PersonalGeneral = {
  __typename?: 'PersonalGeneral';
  evalUserInfo: EvalUserInfo;
  levelGraphs: Array<LevelGraph>;
  logtimeInfo: LogtimeInfo;
  teamInfo: TeamInfo;
  userProfile: UserProfile;
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
  /** 12 ~ 18 */
  daytime: Scalars['Int'];
  /** 18 ~ 24 */
  evening: Scalars['Int'];
  /** 06 ~ 12 */
  morning: Scalars['Int'];
  /** 24 ~ 06 */
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

export type ScoreInfo = {
  __typename?: 'ScoreInfo';
  current: Scalars['Int'];
  rankInCoalition: Scalars['Int'];
  rankInTotal: Scalars['Int'];
};

export type ScoreRecords = {
  __typename?: 'ScoreRecords';
  coalition: Coalition;
  records: Array<ValueRecord>;
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
  activeUserCntRecords: Array<ValueRecord>;
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
  coalition: Coalition;
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
  grade: UserGrade;
  id: Scalars['ID'];
  imgUrl?: Maybe<Scalars['URL']>;
  level: Scalars['Float'];
  levelRank: Scalars['Int'];
  login: Scalars['String'];
  name: Scalars['String'];
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

export type ValueRecord = {
  __typename?: 'ValueRecord';
  at: Scalars['DateTime'];
  value: Scalars['Int'];
};

export type GetCurrMonthBlackholedCntQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrMonthBlackholedCntQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', currMonthBlackholedCnt: number, lastMonthBlackholedCnt: number } };

export type GetCurrRegisteredCntRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrRegisteredCntRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', currRegisteredCntRank: Array<{ __typename?: 'ProjectRanking', value: number, projectPreview: { __typename?: 'ProjectPreview', name: string } }> } };

export type GetCurrWeekEvalCntQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrWeekEvalCntQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', currWeekEvalCnt: number, lastWeekEvalCnt: number } };

export type GetLastExamResultQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastExamResultQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', lastExamResult: Array<{ __typename?: 'ExamResult', rank: number, passCnt: number, totalCnt: number }> } };

export type GetLevelRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLevelRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', levelRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: string | null } }> } };

export type GetMonthlyAccessTimeRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonthlyAccessTimeRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', monthlyAccessTimeRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: string | null } }> } };

export type GetMonthlyExpIncrementRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonthlyExpIncrementRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', monthlyExpIncrementRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: string | null } }> } };

export type GetTotalEvalCntRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalEvalCntRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', totalEvalCntRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: string | null } }> } };

export type GetDestinyUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDestinyUsersQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', evalUserInfo: { __typename?: 'EvalUserInfo', destinyUsers: Array<{ __typename?: 'DestinyUser', id: string, login: string, imgUrl?: string | null, score: number } | null> } } };

export type GetDifficultyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDifficultyQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', evalUserInfo: { __typename?: 'EvalUserInfo', difficulty: EvalUserDifficulty } } };

export type GetLastPassQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastPassQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastPass?: string | null } } };

export type GetLastRegisteredQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastRegisteredQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastRegistered?: string | null } } };

export type GetLevelGraphQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLevelGraphQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', levelGraphs: Array<{ __typename?: 'LevelGraph', date: string, userLevel: number, averageLevel: number }> } };

export type GetLogtimeInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLogtimeInfoQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', logtimeInfo: { __typename?: 'LogtimeInfo', currMonthLogtime: number, lastMonthLogtime: number } } };

export type GetPrefferedClusterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPrefferedClusterQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', logtimeInfo: { __typename?: 'LogtimeInfo', preferredCluster: string } } };

export type GetPrefferedTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPrefferedTimeQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', logtimeInfo: { __typename?: 'LogtimeInfo', preferredTime: { __typename?: 'PreferredTime', morning: number, daytime: number, evening: number, night: number } } } };

export type GetTeamInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamInfoQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', teams: Array<{ __typename?: 'TempTeam', id: string, name: string, occurrence: number, closedAt?: string | null, firstCreatedAt: string, finalMark?: number | null, isValidated?: boolean | null } | null> } } };

export type GetPersonalTotalEvalCntQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonalTotalEvalCntQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', evalUserInfo: { __typename?: 'EvalUserInfo', totalEvalCnt: number } } };

export type GetUserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProfileQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', id: string, login: string, grade: UserGrade, name: string, imgUrl?: string | null, level: number, pooledAt: string, blackholedAt?: string | null, wallet: number, correctionPoint: number, levelRank: number, coalition?: { __typename?: 'Coalition', id: string, name: CoaliltionName } | null, titles: Array<{ __typename?: 'UserTitle', id: string, name: string, isSelected: boolean } | null>, scoreInfo: { __typename?: 'ScoreInfo', current: number, rankInCoalition: number, rankInTotal: number } } } };

export type GetActiveUserCntRecordQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveUserCntRecordQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', activeUserCntRecords: Array<{ __typename?: 'ValueRecord', at: string, value: number }> } };

export type GetAverageCircleDurationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageCircleDurationQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', averageCircleDurations: Array<{ __typename?: 'ValuePerCircle', circle: number, value: number }> } };

export type GetAverageFeedbackLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageFeedbackLengthQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', averageFeedbackLength: number } };

export type GetWhenGoBlackHoleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWhenGoBlackHoleQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', blackholedCntPerCircles: Array<{ __typename?: 'ValuePerCircle', circle: number, value: number }> } };

export type GetCoalitionScoreRecordQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoalitionScoreRecordQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', scoreRecords: Array<{ __typename?: 'ScoreRecords', coalition: { __typename?: 'Coalition', id: string, name: CoaliltionName }, records: Array<{ __typename?: 'ValueRecord', at: string, value: number }> }> } };

export type GetCorrectionPointRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCorrectionPointRankQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', correctionPointRanks: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: string | null } }> } };

export type GetEvalCntPerPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEvalCntPerPointsQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', evalCntPerPoints: Array<{ __typename?: 'EvalCntPerPoint', evalCnt: number, point: number }> } };

export type GetCoalitionScoreRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoalitionScoreRankQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', monthlyScoreRanks: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: string | null } }> } };

export type GetProjectInfoQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetProjectInfoQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', projectInfo: { __typename?: 'ProjectInfo', id: string, name: string, skills: Array<string | null>, averageDurationTime: number, averagePassFinalmark: number, totalCloseCnt: number, currRegisteredCnt: number, passPercentage: number, totalEvalCnt: number } } };

export type GetTotalEvalCntQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalEvalCntQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', totalEvalCnt: number } };

export type GetUserCntPerLevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCntPerLevelsQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', userCntPerLevels: Array<{ __typename?: 'UserCntPerLevel', userCnt: number, level: number }> } };

export type GetUserCntPerPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCntPerPointsQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', userCntPerPoints: Array<{ __typename?: 'UserCntPerPoint', userCnt: number, point: number }> } };

export type GetWalletRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWalletRankQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', walletRanks: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: string, login: string, imgUrl?: string | null } }> } };


export const GetCurrMonthBlackholedCntDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrMonthBlackholedCnt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currMonthBlackholedCnt"}},{"kind":"Field","name":{"kind":"Name","value":"lastMonthBlackholedCnt"}}]}}]}}]} as unknown as DocumentNode<GetCurrMonthBlackholedCntQuery, GetCurrMonthBlackholedCntQueryVariables>;
export const GetCurrRegisteredCntRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrRegisteredCntRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCntRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrRegisteredCntRankQuery, GetCurrRegisteredCntRankQueryVariables>;
export const GetCurrWeekEvalCntDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrWeekEvalCnt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currWeekEvalCnt"}},{"kind":"Field","name":{"kind":"Name","value":"lastWeekEvalCnt"}}]}}]}}]} as unknown as DocumentNode<GetCurrWeekEvalCntQuery, GetCurrWeekEvalCntQueryVariables>;
export const GetLastExamResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"passCnt"}},{"kind":"Field","name":{"kind":"Name","value":"totalCnt"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastExamResultQuery, GetLastExamResultQueryVariables>;
export const GetLevelRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLevelRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetLevelRankQuery, GetLevelRankQueryVariables>;
export const GetMonthlyAccessTimeRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMonthlyAccessTimeRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyAccessTimeRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetMonthlyAccessTimeRankQuery, GetMonthlyAccessTimeRankQueryVariables>;
export const GetMonthlyExpIncrementRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMonthlyExpIncrementRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyExpIncrementRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetMonthlyExpIncrementRankQuery, GetMonthlyExpIncrementRankQueryVariables>;
export const GetTotalEvalCntRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalEvalCntRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCntRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetTotalEvalCntRankQuery, GetTotalEvalCntRankQueryVariables>;
export const GetDestinyUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDestinyUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evalUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destinyUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDestinyUsersQuery, GetDestinyUsersQueryVariables>;
export const GetDifficultyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDifficulty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evalUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"difficulty"}}]}}]}}]}}]} as unknown as DocumentNode<GetDifficultyQuery, GetDifficultyQueryVariables>;
export const GetLastPassDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLastPass"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastPass"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastPassQuery, GetLastPassQueryVariables>;
export const GetLastRegisteredDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLastRegistered"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastRegisteredQuery, GetLastRegisteredQueryVariables>;
export const GetLevelGraphDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLevelGraph"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelGraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"userLevel"}},{"kind":"Field","name":{"kind":"Name","value":"averageLevel"}}]}}]}}]}}]} as unknown as DocumentNode<GetLevelGraphQuery, GetLevelGraphQueryVariables>;
export const GetLogtimeInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLogtimeInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logtimeInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currMonthLogtime"}},{"kind":"Field","name":{"kind":"Name","value":"lastMonthLogtime"}}]}}]}}]}}]} as unknown as DocumentNode<GetLogtimeInfoQuery, GetLogtimeInfoQueryVariables>;
export const GetPrefferedClusterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPrefferedCluster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logtimeInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredCluster"}}]}}]}}]}}]} as unknown as DocumentNode<GetPrefferedClusterQuery, GetPrefferedClusterQueryVariables>;
export const GetPrefferedTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPrefferedTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logtimeInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"morning"}},{"kind":"Field","name":{"kind":"Name","value":"daytime"}},{"kind":"Field","name":{"kind":"Name","value":"evening"}},{"kind":"Field","name":{"kind":"Name","value":"night"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPrefferedTimeQuery, GetPrefferedTimeQueryVariables>;
export const GetTeamInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"closedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamInfoQuery, GetTeamInfoQueryVariables>;
export const GetPersonalTotalEvalCntDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPersonalTotalEvalCnt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evalUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCnt"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonalTotalEvalCntQuery, GetPersonalTotalEvalCntQueryVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"titles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isSelected"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"pooledAt"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"}},{"kind":"Field","name":{"kind":"Name","value":"correctionPoint"}},{"kind":"Field","name":{"kind":"Name","value":"scoreInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"rankInCoalition"}},{"kind":"Field","name":{"kind":"Name","value":"rankInTotal"}}]}},{"kind":"Field","name":{"kind":"Name","value":"levelRank"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const GetActiveUserCntRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActiveUserCntRecord"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeUserCntRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetActiveUserCntRecordQuery, GetActiveUserCntRecordQueryVariables>;
export const GetAverageCircleDurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageCircleDuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCircleDurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAverageCircleDurationQuery, GetAverageCircleDurationQueryVariables>;
export const GetAverageFeedbackLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageFeedbackLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageFeedbackLengthQuery, GetAverageFeedbackLengthQueryVariables>;
export const GetWhenGoBlackHoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWhenGoBlackHole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedCntPerCircles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetWhenGoBlackHoleQuery, GetWhenGoBlackHoleQueryVariables>;
export const GetCoalitionScoreRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoalitionScoreRecord"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scoreRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCoalitionScoreRecordQuery, GetCoalitionScoreRecordQueryVariables>;
export const GetCorrectionPointRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCorrectionPointRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPointRanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCorrectionPointRankQuery, GetCorrectionPointRankQueryVariables>;
export const GetEvalCntPerPointsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEvalCntPerPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evalCntPerPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evalCnt"}},{"kind":"Field","name":{"kind":"Name","value":"point"}}]}}]}}]}}]} as unknown as DocumentNode<GetEvalCntPerPointsQuery, GetEvalCntPerPointsQueryVariables>;
export const GetCoalitionScoreRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoalitionScoreRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyScoreRanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCoalitionScoreRankQuery, GetCoalitionScoreRankQueryVariables>;
export const GetProjectInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"averageDurationTime"}},{"kind":"Field","name":{"kind":"Name","value":"averagePassFinalmark"}},{"kind":"Field","name":{"kind":"Name","value":"totalCloseCnt"}},{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCnt"}},{"kind":"Field","name":{"kind":"Name","value":"passPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"totalEvalCnt"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectInfoQuery, GetProjectInfoQueryVariables>;
export const GetTotalEvalCntDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTotalEvalCnt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCnt"}}]}}]}}]} as unknown as DocumentNode<GetTotalEvalCntQuery, GetTotalEvalCntQueryVariables>;
export const GetUserCntPerLevelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserCntPerLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCntPerLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCnt"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserCntPerLevelsQuery, GetUserCntPerLevelsQueryVariables>;
export const GetUserCntPerPointsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserCntPerPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCntPerPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCnt"}},{"kind":"Field","name":{"kind":"Name","value":"point"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserCntPerPointsQuery, GetUserCntPerPointsQueryVariables>;
export const GetWalletRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWalletRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletRanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetWalletRankQuery, GetWalletRankQueryVariables>;