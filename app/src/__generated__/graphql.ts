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

export type Coalition = {
  __typename?: 'Coalition';
  color?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  score: Scalars['Int'];
  slug: Scalars['String'];
  userId: Scalars['Int'];
};

export type CoalitionScore = {
  __typename?: 'CoalitionScore';
  coalition: Coalition;
  value: Scalars['Int'];
};

export type CoalitionScoreRecords = {
  __typename?: 'CoalitionScoreRecords';
  coalition: Coalition;
  records: Array<Maybe<ValueRecord>>;
};

export type EvalLog = {
  __typename?: 'EvalLog';
  /** 피평가자가 부여한 점수와 리뷰 입니다. */
  correctedsReview: EvalReview;
  /** 평가자가 부여한 점수와 리뷰 입니다. */
  correctorReview: EvalReview;
  header: EvalLogHeader;
};

export type EvalLogHeader = {
  __typename?: 'EvalLogHeader';
  beginAt: Scalars['DateTime'];
  corrector: UserPreview;
  flag: Flag;
  projectPreview: ProjectPreview;
  teamPreview: TeamPreview;
};

export type EvalLogsPaginated = {
  __typename?: 'EvalLogsPaginated';
  nodes: Array<Maybe<EvalLog>>;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type EvalReview = {
  __typename?: 'EvalReview';
  mark: Scalars['Int'];
  review: Scalars['String'];
};

export type ExamResult = {
  __typename?: 'ExamResult';
  passCount: Scalars['Int'];
  rank: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type ExamResultDateRanged = {
  __typename?: 'ExamResultDateRanged';
  data: Array<ExamResult>;
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

export type Flag = {
  __typename?: 'Flag';
  id: Scalars['ID'];
  isPositive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type Home = {
  __typename?: 'Home';
  currMonthBlackholedCount: NumberDateRanged;
  currRegisteredCountRank: Array<ProjectRanking>;
  currWeekEvalCount: NumberDateRanged;
  lastExamResult: ExamResultDateRanged;
  lastMonthBlackholedCount: NumberDateRanged;
  lastWeekEvalCount: NumberDateRanged;
  levelRank: Array<UserRanking>;
  monthlyAccessTimeRank: Array<UserRanking>;
  monthlyEvalCountRank: UserRankingDateRanged;
  monthlyExpIncrementRank: Array<UserRanking>;
  totalEvalCountRank: Array<UserRanking>;
};


export type HomeLevelRankArgs = {
  limit?: Scalars['Int'];
};

export type LevelGraph = {
  __typename?: 'LevelGraph';
  averageLevel: Scalars['Float'];
  date: Scalars['DateTime'];
  userLevel: Scalars['Float'];
};

export type LevelGraphDateRanged = {
  __typename?: 'LevelGraphDateRanged';
  data: Array<LevelGraph>;
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

export type LogtimeInfo = {
  __typename?: 'LogtimeInfo';
  currMonthLogtime: Scalars['Int'];
  lastMonthLogtime: Scalars['Int'];
  preferredCluster: Scalars['String'];
  preferredTime: PreferredTime;
};

export type LogtimeInfoDateRanged = {
  __typename?: 'LogtimeInfoDateRanged';
  data: LogtimeInfo;
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

export type NumberDateRanged = {
  __typename?: 'NumberDateRanged';
  data: Scalars['Int'];
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

export type PersonalEval = {
  __typename?: 'PersonalEval';
  /** 평가자가 작성한 리뷰의 평균 길이 입니다. */
  averageCommentLength: Scalars['Int'];
  averageDuration: Scalars['Int'];
  /** 피평가자가 작성한 리뷰의 평균 길이 입니다. */
  averageFeedbackLength: Scalars['Int'];
  /** 평가자 기준으로 준 평균 점수 입니다. */
  averageFinalMark: Scalars['Float'];
  currMonthCount: NumberDateRanged;
  lastMonthCount: NumberDateRanged;
  totalCount: Scalars['Int'];
  userProfile: UserProfile;
};

export type PersonalGeneral = {
  __typename?: 'PersonalGeneral';
  levelGraphs: LevelGraphDateRanged;
  levelRank: Scalars['Int'];
  logtimeInfo: LogtimeInfoDateRanged;
  teamInfo: TeamInfo;
  userProfile: UserProfile;
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
  currRegisteredCount: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  passPercentage: Scalars['Int'];
  skills: Array<Maybe<Scalars['String']>>;
  /** 총 제출 횟수 입니다. */
  totalCloseCount: Scalars['Int'];
  totalEvalCount: Scalars['Int'];
};

export type ProjectPreview = {
  __typename?: 'ProjectPreview';
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['URL'];
};

export type ProjectRanking = {
  __typename?: 'ProjectRanking';
  projectPreview: ProjectPreview;
  value: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  findProjectPreview: Array<Maybe<ProjectPreview>>;
  findUserPreview: Array<Maybe<UserSearchPreview>>;
  getEvalLogs: EvalLogsPaginated;
  getHomePage: Home;
  getPersonGeneralPage: PersonalGeneral;
  getPersonalEvalPage: PersonalEval;
  getTotalPage: Total;
};


export type QueryFindProjectPreviewArgs = {
  name?: Scalars['String'];
};


export type QueryFindUserPreviewArgs = {
  login?: Scalars['String'];
};


export type QueryGetEvalLogsArgs = {
  corrected?: InputMaybe<Scalars['String']>;
  corrector?: InputMaybe<Scalars['String']>;
  outstandingOnly?: Scalars['Boolean'];
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
  projectName?: InputMaybe<Scalars['String']>;
};


export type QueryGetPersonGeneralPageArgs = {
  uid: Scalars['Int'];
};


export type QueryGetPersonalEvalPageArgs = {
  uid: Scalars['Int'];
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
  id: Scalars['Int'];
  /** true면 통과, false면 fail, null이면 미평가 입니다. */
  isValidated?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  occurrence: Scalars['Int'];
};

export type Total = {
  __typename?: 'Total';
  activeUserCountRecords: Array<ValueRecord>;
  averageCircleDurations: Array<ValuePerCircle>;
  averageCommentLength: Scalars['Int'];
  averageFeedbackLength: Scalars['Int'];
  blackholedCountPerCircles: Array<ValuePerCircle>;
  correctionPointRanks: Array<UserRanking>;
  monthlyScoreRanks: UserRankingDateRanged;
  projectInfo: ProjectInfo;
  scoreRecords: Array<CoalitionScoreRecords>;
  totalEvalCount: Scalars['Int'];
  totalScores: Array<CoalitionScore>;
  userCountPerLevels: Array<UserCountPerLevels>;
  walletRanks: Array<UserRanking>;
};


export type TotalCorrectionPointRanksArgs = {
  limit?: Scalars['Int'];
};


export type TotalProjectInfoArgs = {
  projectName?: Scalars['String'];
};


export type TotalWalletRanksArgs = {
  limit?: Scalars['Int'];
};

export type UserCountPerLevels = {
  __typename?: 'UserCountPerLevels';
  level: Scalars['Int'];
  userCount: Scalars['Int'];
};

export type UserPreview = {
  __typename?: 'UserPreview';
  id: Scalars['Int'];
  imgUrl?: Maybe<Scalars['String']>;
  login: Scalars['String'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  beginAt: Scalars['DateTime'];
  blackholedAt?: Maybe<Scalars['DateTime']>;
  coalition?: Maybe<Coalition>;
  correctionPoint: Scalars['Int'];
  grade: Scalars['String'];
  id: Scalars['Int'];
  imgUrl?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  login: Scalars['String'];
  name: Scalars['String'];
  scoreInfo: UserScoreRank;
  titles: Array<Maybe<UserTitle>>;
  wallet: Scalars['Int'];
};

export type UserRanking = {
  __typename?: 'UserRanking';
  userPreview: UserPreview;
  value: Scalars['Float'];
};

export type UserRankingDateRanged = {
  __typename?: 'UserRankingDateRanged';
  data: Array<UserRanking>;
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

export type UserScoreRank = {
  __typename?: 'UserScoreRank';
  rankInCoalition: Scalars['Int'];
  rankInTotal: Scalars['Int'];
  value: Scalars['Int'];
};

export type UserSearchPreview = {
  __typename?: 'UserSearchPreview';
  id: Scalars['Int'];
  login: Scalars['String'];
};

export type UserTitle = {
  __typename?: 'UserTitle';
  id: Scalars['Int'];
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

export type FindProjectPreviewQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FindProjectPreviewQuery = { __typename?: 'Query', findProjectPreview: Array<{ __typename?: 'ProjectPreview', id: number, name: string, url: string } | null> };

export type FindUserPreviewQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type FindUserPreviewQuery = { __typename?: 'Query', findUserPreview: Array<{ __typename?: 'UserSearchPreview', id: number, login: string } | null> };

export type GetEvalLogsQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  projectName: Scalars['String'];
  outstandingOnly: Scalars['Boolean'];
  corrector?: InputMaybe<Scalars['String']>;
  corrected?: InputMaybe<Scalars['String']>;
}>;


export type GetEvalLogsQuery = { __typename?: 'Query', getEvalLogs: { __typename?: 'EvalLogsPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'EvalLog', header: { __typename?: 'EvalLogHeader', beginAt: string, corrector: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }, teamPreview: { __typename?: 'TeamPreview', id: string, name: string, url: string }, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string }, flag: { __typename?: 'Flag', id: string, name: string, isPositive: boolean } }, correctorReview: { __typename?: 'EvalReview', mark: number, review: string }, correctedsReview: { __typename?: 'EvalReview', mark: number, review: string } } | null> } };

export type GetActiveUserCountRecordQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveUserCountRecordQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', activeUserCountRecords: Array<{ __typename?: 'ValueRecord', at: string, value: number }> } };

export type GetAverageCircleDurationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageCircleDurationQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', averageCircleDurations: Array<{ __typename?: 'ValuePerCircle', circle: number, value: number }> } };

export type GetAverageCommentLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageCommentLengthQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', averageCommentLength: number } };

export type GetAverageFeedbackLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageFeedbackLengthQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', averageFeedbackLength: number } };

export type GetBlackholedCountPerCirclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlackholedCountPerCirclesQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', blackholedCountPerCircles: Array<{ __typename?: 'ValuePerCircle', circle: number, value: number }> } };

export type GetCoalitionScoreRecordQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoalitionScoreRecordQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', scoreRecords: Array<{ __typename?: 'CoalitionScoreRecords', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number }, records: Array<{ __typename?: 'ValueRecord', at: string, value: number } | null> }> } };

export type GetCoalitionTotalScoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoalitionTotalScoresQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', totalScores: Array<{ __typename?: 'CoalitionScore', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, userId: number } }> } };

export type GetCorrectionPointRankQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetCorrectionPointRankQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', correctionPointRanks: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetCurrMonthBlackholedCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrMonthBlackholedCountQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', currMonthBlackholedCount: { __typename?: 'NumberDateRanged', data: number, from: string, to: string }, lastMonthBlackholedCount: { __typename?: 'NumberDateRanged', data: number, from: string, to: string } } };

export type GetCurrRegisteredCountRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrRegisteredCountRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', currRegisteredCountRank: Array<{ __typename?: 'ProjectRanking', value: number, projectPreview: { __typename?: 'ProjectPreview', name: string } }> } };

export type GetCurrWeekEvalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrWeekEvalCountQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', currWeekEvalCount: { __typename?: 'NumberDateRanged', data: number, from: string, to: string }, lastWeekEvalCount: { __typename?: 'NumberDateRanged', data: number, from: string, to: string } } };

export type GetLastExamResultQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastExamResultQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', lastExamResult: { __typename?: 'ExamResultDateRanged', from: string, to: string, data: Array<{ __typename?: 'ExamResult', rank: number, passCount: number, totalCount: number }> } } };

export type GetTotalEvalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalEvalCountQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', totalEvalCount: number } };

export type GetUserCountPerLevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCountPerLevelsQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', userCountPerLevels: Array<{ __typename?: 'UserCountPerLevels', userCount: number, level: number }> } };

export type GetWalletRankQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetWalletRankQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', walletRanks: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetMonthlyCoalitionScoreRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonthlyCoalitionScoreRankQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', monthlyScoreRanks: { __typename?: 'UserRankingDateRanged', from: string, to: string, data: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } } };

export type GetTotalEvalCountRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalEvalCountRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', totalEvalCountRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetMonthlyExpIncrementRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonthlyExpIncrementRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', monthlyExpIncrementRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetLevelRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLevelRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', levelRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetMonthlyAccessTimeRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMonthlyAccessTimeRankQuery = { __typename?: 'Query', getHomePage: { __typename?: 'Home', monthlyAccessTimeRank: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetPersonalAverageCommentLengthQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetPersonalAverageCommentLengthQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', averageCommentLength: number } };

export type GetAverageDurationQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetAverageDurationQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', averageDuration: number } };

export type GetPersonalAverageFeedbackLengthQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetPersonalAverageFeedbackLengthQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', averageFeedbackLength: number } };

export type GetAverageFinalMarkQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetAverageFinalMarkQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', averageFinalMark: number } };

export type GetCurrentCorrectionPointQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetCurrentCorrectionPointQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', correctionPoint: number } } };

export type GetMonthlyEvalCountQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetMonthlyEvalCountQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', currMonthCount: { __typename?: 'NumberDateRanged', data: number, from: string, to: string }, lastMonthCount: { __typename?: 'NumberDateRanged', data: number, from: string, to: string } } };

export type GetPersonalTotalEvalCountQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetPersonalTotalEvalCountQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', totalCount: number } };

export type GetBeginAtQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetBeginAtQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', beginAt: string } } };

export type GetBlackholedAtQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetBlackholedAtQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', blackholedAt?: string | null } } };

export type GetCurrentCoalitionScoreQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetCurrentCoalitionScoreQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', coalition?: { __typename?: 'Coalition', score: number } | null } } };

export type GetCurrentWalletQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetCurrentWalletQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', wallet: number } } };

export type GetLastPassQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetLastPassQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastPass?: string | null } } };

export type GetLastRegisteredQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetLastRegisteredQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastRegistered?: string | null } } };

export type GetLevelGraphQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetLevelGraphQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', levelGraphs: { __typename?: 'LevelGraphDateRanged', from: string, to: string, data: Array<{ __typename?: 'LevelGraph', date: string, userLevel: number, averageLevel: number }> } } };

export type GetLogtimeInfoQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetLogtimeInfoQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', logtimeInfo: { __typename?: 'LogtimeInfoDateRanged', from: string, to: string, data: { __typename?: 'LogtimeInfo', currMonthLogtime: number, lastMonthLogtime: number, preferredCluster: string, preferredTime: { __typename?: 'PreferredTime', morning: number, daytime: number, evening: number, night: number } } } } };

export type GetPrefferedClusterQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetPrefferedClusterQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', logtimeInfo: { __typename?: 'LogtimeInfoDateRanged', from: string, to: string, data: { __typename?: 'LogtimeInfo', preferredCluster: string } } } };

export type GetPrefferedTimeQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetPrefferedTimeQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', logtimeInfo: { __typename?: 'LogtimeInfoDateRanged', from: string, to: string, data: { __typename?: 'LogtimeInfo', preferredTime: { __typename?: 'PreferredTime', morning: number, daytime: number, evening: number, night: number } } } } };

export type GetTeamInfoQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetTeamInfoQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', teams: Array<{ __typename?: 'TempTeam', id: number, name: string, occurrence: number, closedAt?: string | null, firstCreatedAt: string, finalMark?: number | null, isValidated?: boolean | null } | null> } } };

export type GetUserProfileQueryVariables = Exact<{
  uid: Scalars['Int'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getPersonGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', id: number, login: string, grade: string, name: string, imgUrl?: string | null, level: number, coalition?: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number } | null, titles: Array<{ __typename?: 'UserTitle', id: number, name: string, isSelected: boolean } | null> } } };

export type GetProjectInfoQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetProjectInfoQuery = { __typename?: 'Query', getTotalPage: { __typename?: 'Total', projectInfo: { __typename?: 'ProjectInfo', id: string, name: string, skills: Array<string | null>, averageDurationTime: number, averagePassFinalmark: number, totalCloseCount: number, currRegisteredCount: number, passPercentage: number, totalEvalCount: number } } };


export const FindProjectPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindProjectPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findProjectPreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<FindProjectPreviewQuery, FindProjectPreviewQueryVariables>;
export const FindUserPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUserPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUserPreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}}]}}]} as unknown as DocumentNode<FindUserPreviewQuery, FindUserPreviewQueryVariables>;
export const GetEvalLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvalLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"outstandingOnly"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"corrector"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"corrected"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEvalLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}},{"kind":"Argument","name":{"kind":"Name","value":"outstandingOnly"},"value":{"kind":"Variable","name":{"kind":"Name","value":"outstandingOnly"}}},{"kind":"Argument","name":{"kind":"Name","value":"corrector"},"value":{"kind":"Variable","name":{"kind":"Name","value":"corrector"}}},{"kind":"Argument","name":{"kind":"Name","value":"corrected"},"value":{"kind":"Variable","name":{"kind":"Name","value":"corrected"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"corrector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPositive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"correctorReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}},{"kind":"Field","name":{"kind":"Name","value":"correctedsReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}}]} as unknown as DocumentNode<GetEvalLogsQuery, GetEvalLogsQueryVariables>;
export const GetActiveUserCountRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActiveUserCountRecord"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeUserCountRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetActiveUserCountRecordQuery, GetActiveUserCountRecordQueryVariables>;
export const GetAverageCircleDurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageCircleDuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCircleDurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAverageCircleDurationQuery, GetAverageCircleDurationQueryVariables>;
export const GetAverageCommentLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageCommentLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageCommentLengthQuery, GetAverageCommentLengthQueryVariables>;
export const GetAverageFeedbackLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageFeedbackLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageFeedbackLengthQuery, GetAverageFeedbackLengthQueryVariables>;
export const GetBlackholedCountPerCirclesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlackholedCountPerCircles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedCountPerCircles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackholedCountPerCirclesQuery, GetBlackholedCountPerCirclesQueryVariables>;
export const GetCoalitionScoreRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoalitionScoreRecord"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scoreRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCoalitionScoreRecordQuery, GetCoalitionScoreRecordQueryVariables>;
export const GetCoalitionTotalScoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoalitionTotalScores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalScores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCoalitionTotalScoresQuery, GetCoalitionTotalScoresQueryVariables>;
export const GetCorrectionPointRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCorrectionPointRank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPointRanks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCorrectionPointRankQuery, GetCorrectionPointRankQueryVariables>;
export const GetCurrMonthBlackholedCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrMonthBlackholedCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currMonthBlackholedCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastMonthBlackholedCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrMonthBlackholedCountQuery, GetCurrMonthBlackholedCountQueryVariables>;
export const GetCurrRegisteredCountRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrRegisteredCountRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCountRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrRegisteredCountRankQuery, GetCurrRegisteredCountRankQueryVariables>;
export const GetCurrWeekEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrWeekEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currWeekEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastWeekEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrWeekEvalCountQuery, GetCurrWeekEvalCountQueryVariables>;
export const GetLastExamResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"passCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastExamResultQuery, GetLastExamResultQueryVariables>;
export const GetTotalEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTotalEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCount"}}]}}]}}]} as unknown as DocumentNode<GetTotalEvalCountQuery, GetTotalEvalCountQueryVariables>;
export const GetUserCountPerLevelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserCountPerLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCountPerLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCount"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserCountPerLevelsQuery, GetUserCountPerLevelsQueryVariables>;
export const GetWalletRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWalletRank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletRanks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetWalletRankQuery, GetWalletRankQueryVariables>;
export const GetMonthlyCoalitionScoreRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMonthlyCoalitionScoreRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyScoreRanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]} as unknown as DocumentNode<GetMonthlyCoalitionScoreRankQuery, GetMonthlyCoalitionScoreRankQueryVariables>;
export const GetTotalEvalCountRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalEvalCountRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCountRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetTotalEvalCountRankQuery, GetTotalEvalCountRankQueryVariables>;
export const GetMonthlyExpIncrementRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMonthlyExpIncrementRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyExpIncrementRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetMonthlyExpIncrementRankQuery, GetMonthlyExpIncrementRankQueryVariables>;
export const GetLevelRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLevelRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetLevelRankQuery, GetLevelRankQueryVariables>;
export const GetMonthlyAccessTimeRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMonthlyAccessTimeRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthlyAccessTimeRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetMonthlyAccessTimeRankQuery, GetMonthlyAccessTimeRankQueryVariables>;
export const GetPersonalAverageCommentLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPersonalAverageCommentLength"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}}]}}]} as unknown as DocumentNode<GetPersonalAverageCommentLengthQuery, GetPersonalAverageCommentLengthQueryVariables>;
export const GetAverageDurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageDuration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDuration"}}]}}]}}]} as unknown as DocumentNode<GetAverageDurationQuery, GetAverageDurationQueryVariables>;
export const GetPersonalAverageFeedbackLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPersonalAverageFeedbackLength"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]}}]} as unknown as DocumentNode<GetPersonalAverageFeedbackLengthQuery, GetPersonalAverageFeedbackLengthQueryVariables>;
export const GetAverageFinalMarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageFinalMark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFinalMark"}}]}}]}}]} as unknown as DocumentNode<GetAverageFinalMarkQuery, GetAverageFinalMarkQueryVariables>;
export const GetCurrentCorrectionPointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentCorrectionPoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPoint"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentCorrectionPointQuery, GetCurrentCorrectionPointQueryVariables>;
export const GetMonthlyEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMonthlyEvalCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currMonthCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastMonthCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]} as unknown as DocumentNode<GetMonthlyEvalCountQuery, GetMonthlyEvalCountQueryVariables>;
export const GetPersonalTotalEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPersonalTotalEvalCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetPersonalTotalEvalCountQuery, GetPersonalTotalEvalCountQueryVariables>;
export const GetBeginAtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBeginAt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetBeginAtQuery, GetBeginAtQueryVariables>;
export const GetBlackholedAtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlackholedAt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackholedAtQuery, GetBlackholedAtQueryVariables>;
export const GetCurrentCoalitionScoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentCoalitionScore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentCoalitionScoreQuery, GetCurrentCoalitionScoreQueryVariables>;
export const GetCurrentWalletDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentWallet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallet"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentWalletQuery, GetCurrentWalletQueryVariables>;
export const GetLastPassDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLastPass"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastPass"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastPassQuery, GetLastPassQueryVariables>;
export const GetLastRegisteredDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLastRegistered"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastRegisteredQuery, GetLastRegisteredQueryVariables>;
export const GetLevelGraphDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLevelGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelGraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"userLevel"}},{"kind":"Field","name":{"kind":"Name","value":"averageLevel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]} as unknown as DocumentNode<GetLevelGraphQuery, GetLevelGraphQueryVariables>;
export const GetLogtimeInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLogtimeInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logtimeInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currMonthLogtime"}},{"kind":"Field","name":{"kind":"Name","value":"lastMonthLogtime"}},{"kind":"Field","name":{"kind":"Name","value":"preferredTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"morning"}},{"kind":"Field","name":{"kind":"Name","value":"daytime"}},{"kind":"Field","name":{"kind":"Name","value":"evening"}},{"kind":"Field","name":{"kind":"Name","value":"night"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preferredCluster"}}]}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]} as unknown as DocumentNode<GetLogtimeInfoQuery, GetLogtimeInfoQueryVariables>;
export const GetPrefferedClusterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPrefferedCluster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logtimeInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredCluster"}}]}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]} as unknown as DocumentNode<GetPrefferedClusterQuery, GetPrefferedClusterQueryVariables>;
export const GetPrefferedTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPrefferedTime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logtimeInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"morning"}},{"kind":"Field","name":{"kind":"Name","value":"daytime"}},{"kind":"Field","name":{"kind":"Name","value":"evening"}},{"kind":"Field","name":{"kind":"Name","value":"night"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}}]}}]} as unknown as DocumentNode<GetPrefferedTimeQuery, GetPrefferedTimeQueryVariables>;
export const GetTeamInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeamInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"closedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamInfoQuery, GetTeamInfoQueryVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"titles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isSelected"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const GetProjectInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"averageDurationTime"}},{"kind":"Field","name":{"kind":"Name","value":"averagePassFinalmark"}},{"kind":"Field","name":{"kind":"Name","value":"totalCloseCount"}},{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCount"}},{"kind":"Field","name":{"kind":"Name","value":"passPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"totalEvalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectInfoQuery, GetProjectInfoQueryVariables>;