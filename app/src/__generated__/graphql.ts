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
  /** 코알리숑 마스터의 user id 입니다. */
  userId: Scalars['Int'];
};

export type CursorPageInfo = {
  __typename?: 'CursorPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  totalCount: Scalars['Int'];
};

export enum DateTemplate {
  CurrMonth = 'CURR_MONTH',
  CurrWeek = 'CURR_WEEK',
  LastMonth = 'LAST_MONTH',
  LastWeek = 'LAST_WEEK',
  LastYear = 'LAST_YEAR'
}

export type EvalLog = {
  __typename?: 'EvalLog';
  /** 피평가자가 부여한 점수와 리뷰 입니다. */
  correctedsReview: EvalReview;
  /** 평가자가 부여한 점수와 리뷰 입니다. */
  correctorReview: EvalReview;
  header: EvalLogHeader;
  id: Scalars['Int'];
};

export type EvalLogEdge = {
  __typename?: 'EvalLogEdge';
  cursor: Scalars['String'];
  node: EvalLog;
};

export type EvalLogHeader = {
  __typename?: 'EvalLogHeader';
  beginAt: Scalars['DateTime'];
  corrector: UserPreview;
  flag: Flag;
  projectPreview: ProjectPreview;
  teamPreview: TeamPreview;
};

export enum EvalLogSortOrder {
  BeginAtAsc = 'BEGIN_AT_ASC',
  BeginAtDesc = 'BEGIN_AT_DESC'
}

export type EvalLogsPaginated = {
  __typename?: 'EvalLogsPaginated';
  edges: Array<Maybe<EvalLogEdge>>;
  pageInfo?: Maybe<CursorPageInfo>;
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
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type Flag = {
  __typename?: 'Flag';
  id: Scalars['Int'];
  isPositive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type FloatDateRanged = {
  __typename?: 'FloatDateRanged';
  data: Scalars['Float'];
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type HomeCoalition = {
  __typename?: 'HomeCoalition';
  scoreRecordsPerCoalition: Array<ScoreRecordPerCoalition>;
  tigCountPerCoalition: Array<IntPerCoalition>;
  totalScoresPerCoalition: Array<IntPerCoalition>;
};

export type HomeEval = {
  __typename?: 'HomeEval';
  averageCommentLength: Scalars['Int'];
  averageEvalCountByDateTemplate: FloatDateRanged;
  averageFeedbackLength: Scalars['Int'];
  evalCountByDateTemplate: IntDateRanged;
  totalEvalCount: Scalars['Int'];
};


export type HomeEvalAverageEvalCountByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};


export type HomeEvalEvalCountByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};

export type HomeTeam = {
  __typename?: 'HomeTeam';
  currRegisteredCountRanking: Array<ProjectRanking>;
  /** HOME 직전 회차 시험 Rank별 통과율 */
  lastExamResult: ExamResultDateRanged;
};

export type HomeUser = {
  __typename?: 'HomeUser';
  activeUserCountRecords: Array<IntRecord>;
  averageDurationPerCircle: Array<IntPerCircle>;
  blackholedCountByDateTemplate: IntDateRanged;
  blackholedCountPerCircle: Array<IntPerCircle>;
  blackholedRate: Rate;
  correctionPointRanking: Array<UserRanking>;
  memberRate: Rate;
  userCountPerLevel: Array<UserCountPerLevel>;
  walletRanking: Array<UserRanking>;
};


export type HomeUserBlackholedCountByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};


export type HomeUserCorrectionPointRankingArgs = {
  limit?: Scalars['Int'];
};


export type HomeUserWalletRankingArgs = {
  limit?: Scalars['Int'];
};

export type IntDateRanged = {
  __typename?: 'IntDateRanged';
  data: Scalars['Int'];
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type IntPerCircle = {
  __typename?: 'IntPerCircle';
  circle: Scalars['Int'];
  value: Scalars['Int'];
};

export type IntPerCoalition = {
  __typename?: 'IntPerCoalition';
  coalition: Coalition;
  value: Scalars['Int'];
};

export type IntRecord = {
  __typename?: 'IntRecord';
  at: Scalars['DateTime'];
  value: Scalars['Int'];
};

export type LeaderboardElement = {
  __typename?: 'LeaderboardElement';
  /** 내 랭킹 정보 */
  me?: Maybe<UserRanking>;
  /** 전체 랭킹 정보 */
  totalRanking: UserRankingIndexPaginated;
};

export type LeaderboardElementDateRanged = {
  __typename?: 'LeaderboardElementDateRanged';
  data: LeaderboardElement;
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type LeaderboardEval = {
  __typename?: 'LeaderboardEval';
  byDateTemplate: LeaderboardElementDateRanged;
  total: LeaderboardElement;
};


export type LeaderboardEvalByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};


export type LeaderboardEvalTotalArgs = {
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LeaderboardExp = {
  __typename?: 'LeaderboardExp';
  byDateTemplate: LeaderboardElementDateRanged;
};


export type LeaderboardExpByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LeaderboardLevel = {
  __typename?: 'LeaderboardLevel';
  total: LeaderboardElement;
};


export type LeaderboardLevelTotalArgs = {
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LeaderboardScore = {
  __typename?: 'LeaderboardScore';
  byDateTemplate: LeaderboardElementDateRanged;
  total: LeaderboardElement;
};


export type LeaderboardScoreByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};


export type LeaderboardScoreTotalArgs = {
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LevelRecord = {
  __typename?: 'LevelRecord';
  after: Scalars['Int'];
  averageLevel: Scalars['Float'];
  userLevel: Scalars['Float'];
};

export type Pair = {
  __typename?: 'Pair';
  key: Scalars['String'];
  value: Scalars['Int'];
};

export type PersonalEval = {
  __typename?: 'PersonalEval';
  averageCommentLength: Scalars['Int'];
  averageDuration: Scalars['Int'];
  averageFeedbackLength: Scalars['Int'];
  averageFinalMark: Scalars['Float'];
  correctionPoint: Scalars['Int'];
  countByDateTemplate: IntDateRanged;
  evalLogSearchUrl: Scalars['String'];
  lastComment?: Maybe<Scalars['String']>;
  latestFeedback: Scalars['String'];
  totalCount: Scalars['Int'];
  totalDuration: Scalars['Int'];
  userProfile: UserProfile;
};


export type PersonalEvalCountByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};

export type PersonalGeneral = {
  __typename?: 'PersonalGeneral';
  beginAt: Scalars['DateTime'];
  blackholedAt?: Maybe<Scalars['DateTime']>;
  levelRecords: Array<LevelRecord>;
  logtimeByDateTemplate: IntDateRanged;
  preferredClusterByDateTemplate: PreferredClusterDateRanged;
  preferredTimeByDateTemplate: PreferredTimeDateRanged;
  scoreInfo: UserScoreInfo;
  teamInfo: TeamInfo;
  userProfile: UserProfile;
  wallet: Scalars['Int'];
};


export type PersonalGeneralLogtimeByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};


export type PersonalGeneralPreferredClusterByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};


export type PersonalGeneralPreferredTimeByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};

export type PreferredCluster = {
  __typename?: 'PreferredCluster';
  name?: Maybe<Scalars['String']>;
};

export type PreferredClusterDateRanged = {
  __typename?: 'PreferredClusterDateRanged';
  data: PreferredCluster;
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
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
  total: Scalars['Int'];
};

export type PreferredTimeDateRanged = {
  __typename?: 'PreferredTimeDateRanged';
  data: PreferredTime;
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type ProjectEvalInfo = {
  __typename?: 'ProjectEvalInfo';
  failCount: Scalars['Int'];
  passCount: Scalars['Int'];
  totalEvalCount: Scalars['Int'];
};

export type ProjectInfo = {
  __typename?: 'ProjectInfo';
  averagePassFinalMark: Scalars['Int'];
  /** 총 제출 횟수 입니다. */
  closedTeamCount: Scalars['Int'];
  currRegisteredTeamCount: Scalars['Int'];
  description: Scalars['String'];
  difficulty: Scalars['Int'];
  duration: Scalars['Int'];
  evalInfo: ProjectEvalInfo;
  id: Scalars['Int'];
  keywords: Array<Maybe<Scalars['String']>>;
  maxUserCount: Scalars['Int'];
  minUserCount: Scalars['Int'];
  name: Scalars['String'];
  skills: Array<Maybe<Scalars['String']>>;
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
  findUserPreview: Array<Maybe<UserPreview>>;
  getEvalLogs: EvalLogsPaginated;
  getHomeCoalition: HomeCoalition;
  getHomeEval: HomeEval;
  getHomeTeam: HomeTeam;
  getHomeUser: HomeUser;
  getLeaderboardEvalCount: LeaderboardEval;
  getLeaderboardExpIncrement: LeaderboardExp;
  getLeaderboardLevel: LeaderboardLevel;
  getLeaderboardScore: LeaderboardScore;
  getPersonalEvalPage: PersonalEval;
  getPersonalGeneralPage: PersonalGeneral;
  getProjectInfo: ProjectInfo;
};


export type QueryFindProjectPreviewArgs = {
  name?: Scalars['String'];
};


export type QueryFindUserPreviewArgs = {
  limit?: Scalars['Int'];
  login?: Scalars['String'];
};


export type QueryGetEvalLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  corrected?: InputMaybe<Scalars['String']>;
  corrector?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  outstandingOnly?: Scalars['Boolean'];
  projectName?: InputMaybe<Scalars['String']>;
  sortOrder?: EvalLogSortOrder;
};


export type QueryGetPersonalEvalPageArgs = {
  login?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPersonalGeneralPageArgs = {
  login?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProjectInfoArgs = {
  projectName?: Scalars['String'];
};

export type Rate = {
  __typename?: 'Rate';
  fields: Array<Pair>;
  total: Scalars['Int'];
};

export type ScoreRecordPerCoalition = {
  __typename?: 'ScoreRecordPerCoalition';
  coalition: Coalition;
  records: Array<Maybe<IntRecord>>;
};

export type TeamInfo = {
  __typename?: 'TeamInfo';
  lastPassed?: Maybe<Scalars['String']>;
  lastRegistered?: Maybe<Scalars['String']>;
  teams: Array<Maybe<UserTeam>>;
};

export type TeamPreview = {
  __typename?: 'TeamPreview';
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export enum TeamStatus {
  Finished = 'FINISHED',
  InProgress = 'IN_PROGRESS',
  Registered = 'REGISTERED',
  WaitingForCorrection = 'WAITING_FOR_CORRECTION'
}

export type UserCountPerLevel = {
  __typename?: 'UserCountPerLevel';
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
  coalition: Coalition;
  displayname: Scalars['String'];
  grade: Scalars['String'];
  id: Scalars['Int'];
  imgUrl?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  login: Scalars['String'];
  titles: Array<Maybe<UserTitle>>;
};

export type UserRanking = {
  __typename?: 'UserRanking';
  rank: Scalars['Int'];
  userPreview: UserPreview;
  value: Scalars['Float'];
};

export type UserRankingIndexPaginated = {
  __typename?: 'UserRankingIndexPaginated';
  nodes: Array<Maybe<UserRanking>>;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type UserScoreInfo = {
  __typename?: 'UserScoreInfo';
  rankInCoalition: Scalars['Int'];
  rankInTotal: Scalars['Int'];
  value: Scalars['Int'];
};

export type UserTeam = {
  __typename?: 'UserTeam';
  finalMark?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  isValidated?: Maybe<Scalars['Boolean']>;
  lastEventTime: Scalars['DateTime'];
  name: Scalars['String'];
  occurrence: Scalars['Int'];
  projectPreview: ProjectPreview;
  status: TeamStatus;
};

export type UserTitle = {
  __typename?: 'UserTitle';
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  selected: Scalars['Boolean'];
  titleId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type FindUserPreviewQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type FindUserPreviewQuery = { __typename?: 'Query', findUserPreview: Array<{ __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } | null> };

export type FindProjectPreviewQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FindProjectPreviewQuery = { __typename?: 'Query', findProjectPreview: Array<{ __typename?: 'ProjectPreview', id: number, name: string, url: string } | null> };

export type GetActiveUserCountRecordQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveUserCountRecordQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', activeUserCountRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }> } };

export type GetAverageCircleDurationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageCircleDurationQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', averageDurationPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }> } };

export type GetAverageCommentLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageCommentLengthQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', averageCommentLength: number } };

export type GetAverageFeedbackLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageFeedbackLengthQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', averageFeedbackLength: number } };

export type GetBlackholedCountPerCirclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlackholedCountPerCirclesQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', blackholedCountPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }> } };

export type GetCoalitionScoreRecordQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoalitionScoreRecordQuery = { __typename?: 'Query', getHomeCoalition: { __typename?: 'HomeCoalition', scoreRecordsPerCoalition: Array<{ __typename?: 'ScoreRecordPerCoalition', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number }, records: Array<{ __typename?: 'IntRecord', at: string, value: number } | null> }> } };

export type GetCoalitionTotalScoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoalitionTotalScoresQuery = { __typename?: 'Query', getHomeCoalition: { __typename?: 'HomeCoalition', totalScoresPerCoalition: Array<{ __typename?: 'IntPerCoalition', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, userId: number } }> } };

export type GetCorrectionPointRankQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetCorrectionPointRankQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', correctionPointRanking: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetCurrMonthBlackholedCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrMonthBlackholedCountQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', currMonthBlackholedCount: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastMonthBlackholedCount: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetCurrRegisteredCountRankQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrRegisteredCountRankQuery = { __typename?: 'Query', getHomeTeam: { __typename?: 'HomeTeam', currRegisteredCountRanking: Array<{ __typename?: 'ProjectRanking', value: number, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string } }> } };

export type GetCurrWeekEvalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrWeekEvalCountQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', currWeekEvalCount: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastWeekEvalCount: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetLastExamResultQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastExamResultQuery = { __typename?: 'Query', getHomeTeam: { __typename?: 'HomeTeam', lastExamResult: { __typename?: 'ExamResultDateRanged', start: string, end: string, data: Array<{ __typename?: 'ExamResult', rank: number, passCount: number, totalCount: number }> } } };

export type GetTotalEvalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalEvalCountQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', totalEvalCount: number } };

export type GetUserCountPerLevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCountPerLevelsQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', userCountPerLevel: Array<{ __typename?: 'UserCountPerLevel', userCount: number, level: number }> } };

export type GetWalletRankQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetWalletRankQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', walletRanking: Array<{ __typename?: 'UserRanking', value: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetPersonalAverageCommentLengthQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetPersonalAverageCommentLengthQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', averageCommentLength: number } };

export type GetAverageDurationQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetAverageDurationQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', averageDuration: number } };

export type GetPersonalAverageFeedbackLengthQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetPersonalAverageFeedbackLengthQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', averageFeedbackLength: number } };

export type GetAverageFinalMarkQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetAverageFinalMarkQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', averageFinalMark: number } };

export type GetCurrentCorrectionPointQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetCurrentCorrectionPointQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', correctionPoint: number } };

export type GetMonthlyEvalCountQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetMonthlyEvalCountQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', currMonthCount: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastMonthCount: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetPersonalTotalEvalCountQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetPersonalTotalEvalCountQuery = { __typename?: 'Query', getPersonalEvalPage: { __typename?: 'PersonalEval', totalCount: number } };

export type GetBeginAtQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetBeginAtQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', beginAt: string } };

export type GetBlackHoledAtQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetBlackHoledAtQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', blackholedAt?: string | null } };

export type GetCurrentCoalitionScoreQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetCurrentCoalitionScoreQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', coalition: { __typename?: 'Coalition', score: number, imageUrl?: string | null, color?: string | null } }, scoreInfo: { __typename?: 'UserScoreInfo', rankInCoalition: number } } };

export type GetCurrentWalletQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetCurrentWalletQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', wallet: number } };

export type GetLastPassQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetLastPassQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastPassed?: string | null } } };

export type GetLastRegisteredQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetLastRegisteredQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastRegistered?: string | null } } };

export type GetLevelGraphQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetLevelGraphQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', levelRecords: Array<{ __typename?: 'LevelRecord', after: number, userLevel: number, averageLevel: number }> } };

export type GetLogtimeInfoQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetLogtimeInfoQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', currMonthLogtime: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastMonthLogtime: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetPrefferedTimeQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetPrefferedTimeQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', preferredTimeByDateTemplate: { __typename?: 'PreferredTimeDateRanged', start: string, end: string, data: { __typename?: 'PreferredTime', total: number, morning: number, daytime: number, evening: number, night: number } } } };

export type GetCoalitionQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetCoalitionQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', coalition: { __typename?: 'Coalition', name: string } } } };

export type GetTeamInfoQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetTeamInfoQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastRegistered?: string | null, lastPassed?: string | null, teams: Array<{ __typename?: 'UserTeam', id: number, name: string, occurrence: number, status: TeamStatus, lastEventTime: string, isValidated?: boolean | null, finalMark?: number | null, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } } | null> } } };

export type GetUserProfileQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getPersonalGeneralPage: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', id: number, login: string, imgUrl?: string | null, grade: string, displayname: string, level: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number }, titles: Array<{ __typename?: 'UserTitle', titleId: number, name: string, selected: boolean, createdAt: string, updatedAt: string } | null> } } };

export type GetProjectInfoQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetProjectInfoQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', id: number, name: string, skills: Array<string | null>, keywords: Array<string | null>, description: string, minUserCount: number, maxUserCount: number, duration: number, difficulty: number, currRegisteredTeamCount: number, closedTeamCount: number, averagePassFinalMark: number, evalInfo: { __typename?: 'ProjectEvalInfo', totalEvalCount: number, passCount: number, failCount: number } } };


export const FindUserPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUserPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUserPreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]}}]} as unknown as DocumentNode<FindUserPreviewQuery, FindUserPreviewQueryVariables>;
export const FindProjectPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindProjectPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findProjectPreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<FindProjectPreviewQuery, FindProjectPreviewQueryVariables>;
export const GetActiveUserCountRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActiveUserCountRecord"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeUserCountRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetActiveUserCountRecordQuery, GetActiveUserCountRecordQueryVariables>;
export const GetAverageCircleDurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageCircleDuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDurationPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAverageCircleDurationQuery, GetAverageCircleDurationQueryVariables>;
export const GetAverageCommentLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageCommentLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageCommentLengthQuery, GetAverageCommentLengthQueryVariables>;
export const GetAverageFeedbackLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageFeedbackLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageFeedbackLengthQuery, GetAverageFeedbackLengthQueryVariables>;
export const GetBlackholedCountPerCirclesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlackholedCountPerCircles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedCountPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackholedCountPerCirclesQuery, GetBlackholedCountPerCirclesQueryVariables>;
export const GetCoalitionScoreRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoalitionScoreRecord"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scoreRecordsPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCoalitionScoreRecordQuery, GetCoalitionScoreRecordQueryVariables>;
export const GetCoalitionTotalScoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoalitionTotalScores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalScoresPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCoalitionTotalScoresQuery, GetCoalitionTotalScoresQueryVariables>;
export const GetCorrectionPointRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCorrectionPointRank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPointRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCorrectionPointRankQuery, GetCorrectionPointRankQueryVariables>;
export const GetCurrMonthBlackholedCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrMonthBlackholedCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currMonthBlackholedCount"},"name":{"kind":"Name","value":"blackholedCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"EnumValue","value":"CURR_WEEK"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastMonthBlackholedCount"},"name":{"kind":"Name","value":"blackholedCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"EnumValue","value":"LAST_WEEK"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrMonthBlackholedCountQuery, GetCurrMonthBlackholedCountQueryVariables>;
export const GetCurrRegisteredCountRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrRegisteredCountRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCountRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrRegisteredCountRankQuery, GetCurrRegisteredCountRankQueryVariables>;
export const GetCurrWeekEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrWeekEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currWeekEvalCount"},"name":{"kind":"Name","value":"evalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"EnumValue","value":"CURR_WEEK"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastWeekEvalCount"},"name":{"kind":"Name","value":"evalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"EnumValue","value":"LAST_WEEK"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrWeekEvalCountQuery, GetCurrWeekEvalCountQueryVariables>;
export const GetLastExamResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"passCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastExamResultQuery, GetLastExamResultQueryVariables>;
export const GetTotalEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTotalEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCount"}}]}}]}}]} as unknown as DocumentNode<GetTotalEvalCountQuery, GetTotalEvalCountQueryVariables>;
export const GetUserCountPerLevelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserCountPerLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCountPerLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCount"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserCountPerLevelsQuery, GetUserCountPerLevelsQueryVariables>;
export const GetWalletRankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWalletRank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetWalletRankQuery, GetWalletRankQueryVariables>;
export const GetPersonalAverageCommentLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPersonalAverageCommentLength"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}}]}}]} as unknown as DocumentNode<GetPersonalAverageCommentLengthQuery, GetPersonalAverageCommentLengthQueryVariables>;
export const GetAverageDurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageDuration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDuration"}}]}}]}}]} as unknown as DocumentNode<GetAverageDurationQuery, GetAverageDurationQueryVariables>;
export const GetPersonalAverageFeedbackLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPersonalAverageFeedbackLength"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]}}]} as unknown as DocumentNode<GetPersonalAverageFeedbackLengthQuery, GetPersonalAverageFeedbackLengthQueryVariables>;
export const GetAverageFinalMarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAverageFinalMark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFinalMark"}}]}}]}}]} as unknown as DocumentNode<GetAverageFinalMarkQuery, GetAverageFinalMarkQueryVariables>;
export const GetCurrentCorrectionPointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentCorrectionPoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPoint"}}]}}]}}]} as unknown as DocumentNode<GetCurrentCorrectionPointQuery, GetCurrentCorrectionPointQueryVariables>;
export const GetMonthlyEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMonthlyEvalCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currMonthCount"},"name":{"kind":"Name","value":"countByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"EnumValue","value":"CURR_WEEK"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastMonthCount"},"name":{"kind":"Name","value":"countByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"EnumValue","value":"LAST_WEEK"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetMonthlyEvalCountQuery, GetMonthlyEvalCountQueryVariables>;
export const GetPersonalTotalEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPersonalTotalEvalCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEvalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetPersonalTotalEvalCountQuery, GetPersonalTotalEvalCountQueryVariables>;
export const GetBeginAtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBeginAt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginAt"}}]}}]}}]} as unknown as DocumentNode<GetBeginAtQuery, GetBeginAtQueryVariables>;
export const GetBlackHoledAtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlackHoledAt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}}]}}]}}]} as unknown as DocumentNode<GetBlackHoledAtQuery, GetBlackHoledAtQueryVariables>;
export const GetCurrentCoalitionScoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentCoalitionScore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rankInCoalition"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentCoalitionScoreQuery, GetCurrentCoalitionScoreQueryVariables>;
export const GetCurrentWalletDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentWallet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallet"}}]}}]}}]} as unknown as DocumentNode<GetCurrentWalletQuery, GetCurrentWalletQueryVariables>;
export const GetLastPassDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLastPass"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastPassed"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastPassQuery, GetLastPassQueryVariables>;
export const GetLastRegisteredDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLastRegistered"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastRegisteredQuery, GetLastRegisteredQueryVariables>;
export const GetLevelGraphDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLevelGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"after"}},{"kind":"Field","name":{"kind":"Name","value":"userLevel"}},{"kind":"Field","name":{"kind":"Name","value":"averageLevel"}}]}}]}}]}}]} as unknown as DocumentNode<GetLevelGraphQuery, GetLevelGraphQueryVariables>;
export const GetLogtimeInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLogtimeInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currMonthLogtime"},"name":{"kind":"Name","value":"logtimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"EnumValue","value":"CURR_MONTH"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastMonthLogtime"},"name":{"kind":"Name","value":"logtimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"EnumValue","value":"LAST_MONTH"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLogtimeInfoQuery, GetLogtimeInfoQueryVariables>;
export const GetPrefferedTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPrefferedTime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredTimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"EnumValue","value":"CURR_MONTH"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"morning"}},{"kind":"Field","name":{"kind":"Name","value":"daytime"}},{"kind":"Field","name":{"kind":"Name","value":"evening"}},{"kind":"Field","name":{"kind":"Name","value":"night"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetPrefferedTimeQuery, GetPrefferedTimeQueryVariables>;
export const GetCoalitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoalition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCoalitionQuery, GetCoalitionQueryVariables>;
export const GetTeamInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeamInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"}},{"kind":"Field","name":{"kind":"Name","value":"lastPassed"}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamInfoQuery, GetTeamInfoQueryVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneralPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}},{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"titleId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const GetProjectInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minUserCount"}},{"kind":"Field","name":{"kind":"Name","value":"maxUserCount"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"currRegisteredTeamCount"}},{"kind":"Field","name":{"kind":"Name","value":"closedTeamCount"}},{"kind":"Field","name":{"kind":"Name","value":"averagePassFinalMark"}},{"kind":"Field","name":{"kind":"Name","value":"evalInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCount"}},{"kind":"Field","name":{"kind":"Name","value":"passCount"}},{"kind":"Field","name":{"kind":"Name","value":"failCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectInfoQuery, GetProjectInfoQueryVariables>;