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

export type Character = {
  __typename?: 'Character';
  effort: CharacterEffort;
  talent: CharacterTalent;
};

export type CharacterEffort = {
  __typename?: 'CharacterEffort';
  evalCountRank: UserRank;
  examTryCount: Scalars['Int'];
  logtimeRank: UserRank;
  projectTryCount: Scalars['Int'];
};

export type CharacterTalent = {
  __typename?: 'CharacterTalent';
  examOneshotRate: Rate;
  levelRank: UserRank;
  outstandingRate: Rate;
  projectOneshotRate: Rate;
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
  LastYear = 'LAST_YEAR',
  Total = 'TOTAL'
}

export type EvalLog = {
  __typename?: 'EvalLog';
  correctedsReview?: Maybe<EvalReview>;
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
  beginAt: Scalars['DateTime'];
  endAt: Scalars['DateTime'];
  location: Scalars['String'];
  maxPeople: Scalars['Int'];
  name: Scalars['String'];
  nbrSubscribers: Scalars['Int'];
  resultPerRank: Array<ResultPerRank>;
};

export type ExamResultDateRanged = {
  __typename?: 'ExamResultDateRanged';
  data: ExamResult;
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
  tigCountPerCoalitionByDateTemplate: IntPerCoalitionDateRanged;
  totalScoresPerCoalition: Array<IntPerCoalition>;
};


export type HomeCoalitionTigCountPerCoalitionByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};

export type HomeEval = {
  __typename?: 'HomeEval';
  averageCommentLength: Scalars['Int'];
  averageEvalCountByDateTemplate: FloatDateRanged;
  averageFeedbackLength: Scalars['Int'];
  evalCountByDateTemplate: IntDateRanged;
};


export type HomeEvalAverageEvalCountByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};


export type HomeEvalEvalCountByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};

export type HomeTeam = {
  __typename?: 'HomeTeam';
  currRegisteredCountRanking: Array<ProjectRank>;
  recentExamResult: ExamResultDateRanged;
};


export type HomeTeamCurrRegisteredCountRankingArgs = {
  limit?: Scalars['Int'];
};


export type HomeTeamRecentExamResultArgs = {
  after?: Scalars['Int'];
};

export type HomeUser = {
  __typename?: 'HomeUser';
  aliveUserCountRecords: Array<IntRecord>;
  averageDurationPerCircle: Array<IntPerCircle>;
  blackholedCountByDateTemplate: IntDateRanged;
  blackholedCountPerCircle: Array<IntPerCircle>;
  blackholedRate: Rate;
  correctionPointRanking: Array<UserRank>;
  memberRate: Rate;
  userCountPerLevel: Array<UserCountPerLevel>;
  walletRanking: Array<UserRank>;
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

export type IntPerCoalitionDateRanged = {
  __typename?: 'IntPerCoalitionDateRanged';
  data: Array<IntPerCoalition>;
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type IntRecord = {
  __typename?: 'IntRecord';
  at: Scalars['DateTime'];
  value: Scalars['Int'];
};

/** 누적 데이터 기준입니다. */
export type Landing = {
  __typename?: 'Landing';
  aliveCount: Scalars['Int'];
  blackholedCount: Scalars['Int'];
  daysAfterBeginAt: Scalars['Int'];
  evalCount: Scalars['Int'];
  memberCount: Scalars['Int'];
  trendingProject: ProjectRank;
};

export type LeaderboardElement = {
  __typename?: 'LeaderboardElement';
  /** 내 랭킹 정보 */
  me?: Maybe<UserRank>;
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
  /** Available DateTemplate=[TOTAL, CURR_MONTH, CURR_WEEK] */
  byDateTemplate: LeaderboardElementDateRanged;
};


export type LeaderboardEvalByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LeaderboardExp = {
  __typename?: 'LeaderboardExp';
  /** Available DateTemplate=[CURR_MONTH, CURR_WEEK] */
  byDateTemplate: LeaderboardElementDateRanged;
};


export type LeaderboardExpByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LeaderboardLevel = {
  __typename?: 'LeaderboardLevel';
  /** Available DateTemplate=[TOTAL] */
  byDateTemplate: LeaderboardElementDateRanged;
};


export type LeaderboardLevelByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LeaderboardScore = {
  __typename?: 'LeaderboardScore';
  /** Available DateTemplate=[TOTAL, CURR_WEEK, CURR_MONTH] */
  byDateTemplate: LeaderboardElementDateRanged;
};


export type LeaderboardScoreByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LevelRecord = {
  __typename?: 'LevelRecord';
  level: Scalars['Float'];
  monthsPassed: Scalars['Int'];
};

export type MyInfo = {
  __typename?: 'MyInfo';
  blackholedAt?: Maybe<Scalars['DateTime']>;
  evalCountRank?: Maybe<Scalars['Int']>;
  experienceRank?: Maybe<Scalars['Int']>;
  isNewMember: Scalars['Boolean'];
  recentValidatedTeam?: Maybe<UserTeam>;
  scoreRank?: Maybe<Scalars['Int']>;
  userPreview: UserPreview;
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
  recentComment?: Maybe<Scalars['String']>;
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
  character?: Maybe<Character>;
  logtimeByDateTemplate: IntDateRanged;
  memberLevelRecords: Array<LevelRecord>;
  preferredClusterByDateTemplate: PreferredClusterDateRanged;
  preferredTimeByDateTemplate: PreferredTimeDateRanged;
  scoreInfo: UserScoreInfo;
  teamInfo: TeamInfo;
  userLevelRecords: Array<Maybe<LevelRecord>>;
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

export type ProjectInfo = {
  __typename?: 'ProjectInfo';
  averagePassFinalMark: Scalars['Int'];
  /** 총 제출 횟수 입니다. */
  closedTeamCount: Scalars['Int'];
  currRegisteredTeamCount: Scalars['Int'];
  description: Scalars['String'];
  difficulty?: Maybe<Scalars['Int']>;
  estimateTime?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  maxUserCount: Scalars['Int'];
  minUserCount: Scalars['Int'];
  name: Scalars['String'];
  objectives: Array<Maybe<Scalars['String']>>;
  skills: Array<Maybe<Scalars['String']>>;
  validatedRate: Rate;
};

export type ProjectPreview = {
  __typename?: 'ProjectPreview';
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['URL'];
};

export type ProjectRank = {
  __typename?: 'ProjectRank';
  projectPreview: ProjectPreview;
  rank: Scalars['Int'];
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
  getLanding: Landing;
  getLeaderboardEvalCount: LeaderboardEval;
  getLeaderboardExpIncrement: LeaderboardExp;
  getLeaderboardLevel: LeaderboardLevel;
  getLeaderboardScore: LeaderboardScore;
  getMyInfo: MyInfo;
  getPersonalEval: PersonalEval;
  getPersonalGeneral: PersonalGeneral;
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
  first?: Scalars['Int'];
  outstandingOnly?: Scalars['Boolean'];
  projectName?: InputMaybe<Scalars['String']>;
  sortOrder?: EvalLogSortOrder;
};


export type QueryGetPersonalEvalArgs = {
  login?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPersonalGeneralArgs = {
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

export type ResultPerRank = {
  __typename?: 'ResultPerRank';
  rank: Scalars['Int'];
  rate: Rate;
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
  value: Scalars['Int'];
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

export type UserRank = {
  __typename?: 'UserRank';
  rank: Scalars['Int'];
  userPreview: UserPreview;
  value: Scalars['Float'];
};

export type UserRankingIndexPaginated = {
  __typename?: 'UserRankingIndexPaginated';
  nodes: Array<Maybe<UserRank>>;
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

export type GetEvalLogsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  corrector?: InputMaybe<Scalars['String']>;
  corrected?: InputMaybe<Scalars['String']>;
  projectName?: InputMaybe<Scalars['String']>;
  outstandingOnly?: InputMaybe<Scalars['Boolean']>;
  sortOrder: EvalLogSortOrder;
}>;


export type GetEvalLogsQuery = { __typename?: 'Query', getEvalLogs: { __typename?: 'EvalLogsPaginated', edges: Array<{ __typename?: 'EvalLogEdge', cursor: string, node: { __typename?: 'EvalLog', id: number, header: { __typename?: 'EvalLogHeader', beginAt: string, corrector: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }, teamPreview: { __typename?: 'TeamPreview', id: number, name: string, url: string }, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string }, flag: { __typename?: 'Flag', id: number, name: string, isPositive: boolean } }, correctorReview: { __typename?: 'EvalReview', mark: number, review: string }, correctedsReview?: { __typename?: 'EvalReview', mark: number, review: string } | null } } | null>, pageInfo?: { __typename?: 'CursorPageInfo', totalCount: number, hasNextPage: boolean, endCursor?: string | null } | null } };

export type GetTigCountPerCoalitionByDateTemplateQueryVariables = Exact<{
  dateTemplate: DateTemplate;
}>;


export type GetTigCountPerCoalitionByDateTemplateQuery = { __typename?: 'Query', getHomeCoalition: { __typename?: 'HomeCoalition', tigCountPerCoalitionByDateTemplate: { __typename?: 'IntPerCoalitionDateRanged', start: string, end: string, data: Array<{ __typename?: 'IntPerCoalition', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number } }> } } };

export type GetScoreRecordsPerCoalitionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetScoreRecordsPerCoalitionQuery = { __typename?: 'Query', getHomeCoalition: { __typename?: 'HomeCoalition', scoreRecordsPerCoalition: Array<{ __typename?: 'ScoreRecordPerCoalition', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number }, records: Array<{ __typename?: 'IntRecord', at: string, value: number } | null> }> } };

export type GetTotalScoresPerCoalitionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalScoresPerCoalitionQuery = { __typename?: 'Query', getHomeCoalition: { __typename?: 'HomeCoalition', totalScoresPerCoalition: Array<{ __typename?: 'IntPerCoalition', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, userId: number } }> } };

export type GetAverageCommentLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageCommentLengthQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', averageCommentLength: number } };

export type GetAverageFeedbackLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageFeedbackLengthQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', averageFeedbackLength: number } };

export type GetEvalCountByDateTemplateQueryVariables = Exact<{
  dateTemplate: DateTemplate;
}>;


export type GetEvalCountByDateTemplateQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', evalCountByDateTemplate: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetAverageEvalCountByDateTemplateQueryVariables = Exact<{
  dateTemplate: DateTemplate;
}>;


export type GetAverageEvalCountByDateTemplateQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', averageEvalCountByDateTemplate: { __typename?: 'FloatDateRanged', data: number, start: string, end: string } } };

export type GetCurrRegisteredCountRankingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrRegisteredCountRankingQuery = { __typename?: 'Query', getHomeTeam: { __typename?: 'HomeTeam', currRegisteredCountRanking: Array<{ __typename?: 'ProjectRank', rank: number, value: number, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } }> } };

export type GetRecentExamResultQueryVariables = Exact<{
  after: Scalars['Int'];
}>;


export type GetRecentExamResultQuery = { __typename?: 'Query', getHomeTeam: { __typename?: 'HomeTeam', recentExamResult: { __typename?: 'ExamResultDateRanged', start: string, end: string, data: { __typename?: 'ExamResult', beginAt: string, endAt: string, location: string, maxPeople: number, name: string, nbrSubscribers: number, resultPerRank: Array<{ __typename?: 'ResultPerRank', rank: number, rate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } }> } } } };

export type GetAliveUserCountRecordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAliveUserCountRecordsQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', aliveUserCountRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }> } };

export type GetAverageDurationPerCircleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageDurationPerCircleQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', averageDurationPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }> } };

export type GetBlackholedCountPerCircleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlackholedCountPerCircleQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', blackholedCountPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }> } };

export type GetBlackHoledRateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlackHoledRateQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', blackholedRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } } };

export type GetCorrectionPointRankingQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetCorrectionPointRankingQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', correctionPointRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetMyInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyInfoQuery = { __typename?: 'Query', getMyInfo: { __typename?: 'MyInfo', isNewMember: boolean, blackholedAt?: string | null, experienceRank?: number | null, scoreRank?: number | null, evalCountRank?: number | null, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }, recentValidatedTeam?: { __typename?: 'UserTeam', status: TeamStatus, lastEventTime: string, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } } | null } };

export type GetMemberRateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMemberRateQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', memberRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } } };

export type GetBlackholedCountByDateTemplateQueryVariables = Exact<{
  currDateTemplate: DateTemplate;
  lastDateTemplate: DateTemplate;
}>;


export type GetBlackholedCountByDateTemplateQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', currData: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastData: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetUserCountPerLevelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCountPerLevelQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', userCountPerLevel: Array<{ __typename?: 'UserCountPerLevel', value: number, level: number }> } };

export type GetWalletRankingQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetWalletRankingQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', walletRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetCurrLastEvalCountByDateTemplateQueryVariables = Exact<{
  currDateTemplate: DateTemplate;
  lastDateTemplate: DateTemplate;
}>;


export type GetCurrLastEvalCountByDateTemplateQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', currData: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastData: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetLandingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLandingQuery = { __typename?: 'Query', getLanding: { __typename?: 'Landing', daysAfterBeginAt: number, aliveCount: number, blackholedCount: number, memberCount: number, evalCount: number, trendingProject: { __typename?: 'ProjectRank', rank: number, value: number, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } } } };

export type GetLeaderboardCoalitionScoreQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardCoalitionScoreQuery = { __typename?: 'Query', getLeaderboardScore: { __typename?: 'LeaderboardScore', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null> } } } } };

export type GetLeaderboardEvalCountQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardEvalCountQuery = { __typename?: 'Query', getLeaderboardEvalCount: { __typename?: 'LeaderboardEval', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null> } } } } };

export type GetLeaderboardExpIncrementQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardExpIncrementQuery = { __typename?: 'Query', getLeaderboardExpIncrement: { __typename?: 'LeaderboardExp', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null> } } } } };

export type GetLeaderboardLevelQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardLevelQuery = { __typename?: 'Query', getLeaderboardLevel: { __typename?: 'LeaderboardLevel', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null> } } } } };

export type GetAverageCommentLengthByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetAverageCommentLengthByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', averageCommentLength: number } };

export type GetAverageDurationByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetAverageDurationByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', averageDuration: number } };

export type GetAverageFeedbackLengthByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetAverageFeedbackLengthByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', averageFeedbackLength: number } };

export type GetAverageFinalMarkByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetAverageFinalMarkByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', averageFinalMark: number } };

export type GetCorrectionPointByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetCorrectionPointByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', correctionPoint: number } };

export type GetEvalCountByDateTemplateByLoginQueryVariables = Exact<{
  login: Scalars['String'];
  currDateTemplate: DateTemplate;
  lastDateTemplate: DateTemplate;
}>;


export type GetEvalCountByDateTemplateByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', currData: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastData: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetRecentCommentByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetRecentCommentByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', recentComment?: string | null } };

export type GetTotalDurationByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetTotalDurationByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', totalDuration: number } };

export type GetTotalEvalCountByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetTotalEvalCountByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', totalCount: number } };

export type GetBeginAtByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetBeginAtByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', beginAt: string } };

export type GetBlackHoledAtByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetBlackHoledAtByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', blackholedAt?: string | null } };

export type GetCharacterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharacterQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', character?: { __typename?: 'Character', effort: { __typename?: 'CharacterEffort', examTryCount: number, projectTryCount: number, logtimeRank: { __typename?: 'UserRank', rank: number, value: number, userPreview: { __typename?: 'UserPreview', id: number } }, evalCountRank: { __typename?: 'UserRank', rank: number, value: number } }, talent: { __typename?: 'CharacterTalent', levelRank: { __typename?: 'UserRank', rank: number, value: number }, examOneshotRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> }, projectOneshotRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> }, outstandingRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } } } | null } };

export type GetCoalitionScoreByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetCoalitionScoreByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number } }, scoreInfo: { __typename?: 'UserScoreInfo', value: number, rankInCoalition: number } } };

export type GetLastPassedByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetLastPassedByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastPassed?: string | null } } };

export type GetLastRegisteredByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetLastRegisteredByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastRegistered?: string | null } } };

export type GetLevelRecordsByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetLevelRecordsByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', userLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number } | null>, memberLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }> } };

export type GetLogtimeByDateTemplateQueryVariables = Exact<{
  login: Scalars['String'];
  currDateTemplate: DateTemplate;
  lastDateTemplate: DateTemplate;
}>;


export type GetLogtimeByDateTemplateQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', currData: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastData: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetPreferredClusterByDateTemplateByLoginQueryVariables = Exact<{
  login: Scalars['String'];
  dateTemplate: DateTemplate;
}>;


export type GetPreferredClusterByDateTemplateByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', preferredClusterByDateTemplate: { __typename?: 'PreferredClusterDateRanged', start: string, end: string, data: { __typename?: 'PreferredCluster', name?: string | null } } } };

export type GetPrefferedTimeByDateTemplateByLoginQueryVariables = Exact<{
  login: Scalars['String'];
  dateTemplate: DateTemplate;
}>;


export type GetPrefferedTimeByDateTemplateByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', preferredTimeByDateTemplate: { __typename?: 'PreferredTimeDateRanged', start: string, end: string, data: { __typename?: 'PreferredTime', total: number, morning: number, daytime: number, evening: number, night: number } } } };

export type GetTeamInfoByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetTeamInfoByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastRegistered?: string | null, lastPassed?: string | null, teams: Array<{ __typename?: 'UserTeam', id: number, name: string, occurrence: number, status: TeamStatus, lastEventTime: string, isValidated?: boolean | null, finalMark?: number | null, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } } | null> } } };

export type GetWalletByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetWalletByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', wallet: number } };

export type GetUserProfileQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', id: number, login: string, imgUrl?: string | null, grade: string, displayname: string, level: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number }, titles: Array<{ __typename?: 'UserTitle', titleId: number, name: string, selected: boolean, createdAt: string, updatedAt: string } | null> } } };

export type GetAveragePassFinalMarkByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetAveragePassFinalMarkByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', averagePassFinalMark: number } };

export type GetClosedTeamCountByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetClosedTeamCountByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', closedTeamCount: number } };

export type GetCurrRegisteredTeamCountByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetCurrRegisteredTeamCountByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', currRegisteredTeamCount: number } };

export type GetDifficultyByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetDifficultyByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', difficulty?: number | null } };

export type GetEstimateTimeByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetEstimateTimeByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', estimateTime?: string | null } };

export type GetObjectivesByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetObjectivesByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', objectives: Array<string | null> } };

export type GetSkillsByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetSkillsByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', skills: Array<string | null> } };

export type GetUserCountByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetUserCountByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', minUserCount: number, maxUserCount: number } };

export type GetValidatedRateByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetValidatedRateByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', validatedRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } } };

export type GetProjectInfoByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetProjectInfoByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', name: string, description: string, minUserCount: number, maxUserCount: number, estimateTime?: string | null, difficulty?: number | null, currRegisteredTeamCount: number, closedTeamCount: number, averagePassFinalMark: number, objectives: Array<string | null>, skills: Array<string | null>, validatedRate: (
      { __typename?: 'Rate' }
      & { ' $fragmentRefs'?: { 'ValidatedRateFieldsFragment': ValidatedRateFieldsFragment } }
    ) } };

export type ValidatedRateFieldsFragment = { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } & { ' $fragmentName'?: 'ValidatedRateFieldsFragment' };

export const ValidatedRateFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"validatedRateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Rate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<ValidatedRateFieldsFragment, unknown>;
export const FindUserPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUserPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUserPreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]}}]} as unknown as DocumentNode<FindUserPreviewQuery, FindUserPreviewQueryVariables>;
export const FindProjectPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindProjectPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findProjectPreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<FindProjectPreviewQuery, FindProjectPreviewQueryVariables>;
export const GetEvalLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvalLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"corrector"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"corrected"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"outstandingOnly"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EvalLogSortOrder"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEvalLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"corrector"},"value":{"kind":"Variable","name":{"kind":"Name","value":"corrector"}}},{"kind":"Argument","name":{"kind":"Name","value":"corrected"},"value":{"kind":"Variable","name":{"kind":"Name","value":"corrected"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}},{"kind":"Argument","name":{"kind":"Name","value":"outstandingOnly"},"value":{"kind":"Variable","name":{"kind":"Name","value":"outstandingOnly"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"corrector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPositive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"correctorReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}},{"kind":"Field","name":{"kind":"Name","value":"correctedsReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<GetEvalLogsQuery, GetEvalLogsQueryVariables>;
export const GetTigCountPerCoalitionByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTigCountPerCoalitionByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tigCountPerCoalitionByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetTigCountPerCoalitionByDateTemplateQuery, GetTigCountPerCoalitionByDateTemplateQueryVariables>;
export const GetScoreRecordsPerCoalitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetScoreRecordsPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scoreRecordsPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetScoreRecordsPerCoalitionQuery, GetScoreRecordsPerCoalitionQueryVariables>;
export const GetTotalScoresPerCoalitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalScoresPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalScoresPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetTotalScoresPerCoalitionQuery, GetTotalScoresPerCoalitionQueryVariables>;
export const GetAverageCommentLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageCommentLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageCommentLengthQuery, GetAverageCommentLengthQueryVariables>;
export const GetAverageFeedbackLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageFeedbackLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageFeedbackLengthQuery, GetAverageFeedbackLengthQueryVariables>;
export const GetEvalCountByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvalCountByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetEvalCountByDateTemplateQuery, GetEvalCountByDateTemplateQueryVariables>;
export const GetAverageEvalCountByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageEvalCountByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageEvalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetAverageEvalCountByDateTemplateQuery, GetAverageEvalCountByDateTemplateQueryVariables>;
export const GetCurrRegisteredCountRankingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrRegisteredCountRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCountRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrRegisteredCountRankingQuery, GetCurrRegisteredCountRankingQueryVariables>;
export const GetRecentExamResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecentExamResult"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentExamResult"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resultPerRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"rate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxPeople"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nbrSubscribers"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRecentExamResultQuery, GetRecentExamResultQueryVariables>;
export const GetAliveUserCountRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAliveUserCountRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aliveUserCountRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAliveUserCountRecordsQuery, GetAliveUserCountRecordsQueryVariables>;
export const GetAverageDurationPerCircleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageDurationPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDurationPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAverageDurationPerCircleQuery, GetAverageDurationPerCircleQueryVariables>;
export const GetBlackholedCountPerCircleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlackholedCountPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedCountPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackholedCountPerCircleQuery, GetBlackholedCountPerCircleQueryVariables>;
export const GetBlackHoledRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlackHoledRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackHoledRateQuery, GetBlackHoledRateQueryVariables>;
export const GetCorrectionPointRankingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCorrectionPointRanking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPointRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]}}]} as unknown as DocumentNode<GetCorrectionPointRankingQuery, GetCorrectionPointRankingQueryVariables>;
export const GetMyInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recentValidatedTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNewMember"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}},{"kind":"Field","name":{"kind":"Name","value":"experienceRank"}},{"kind":"Field","name":{"kind":"Name","value":"scoreRank"}},{"kind":"Field","name":{"kind":"Name","value":"evalCountRank"}}]}}]}}]} as unknown as DocumentNode<GetMyInfoQuery, GetMyInfoQueryVariables>;
export const GetMemberRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMemberRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMemberRateQuery, GetMemberRateQueryVariables>;
export const GetBlackholedCountByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlackholedCountByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currData"},"name":{"kind":"Name","value":"blackholedCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastData"},"name":{"kind":"Name","value":"blackholedCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackholedCountByDateTemplateQuery, GetBlackholedCountByDateTemplateQueryVariables>;
export const GetUserCountPerLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserCountPerLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCountPerLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserCountPerLevelQuery, GetUserCountPerLevelQueryVariables>;
export const GetWalletRankingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWalletRanking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]}}]} as unknown as DocumentNode<GetWalletRankingQuery, GetWalletRankingQueryVariables>;
export const GetCurrLastEvalCountByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrLastEvalCountByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currData"},"name":{"kind":"Name","value":"evalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastData"},"name":{"kind":"Name","value":"evalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrLastEvalCountByDateTemplateQuery, GetCurrLastEvalCountByDateTemplateQueryVariables>;
export const GetLandingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daysAfterBeginAt"}},{"kind":"Field","name":{"kind":"Name","value":"aliveCount"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedCount"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}},{"kind":"Field","name":{"kind":"Name","value":"evalCount"}},{"kind":"Field","name":{"kind":"Name","value":"trendingProject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetLandingQuery, GetLandingQueryVariables>;
export const GetLeaderboardCoalitionScoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardCoalitionScore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardCoalitionScoreQuery, GetLeaderboardCoalitionScoreQueryVariables>;
export const GetLeaderboardEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardEvalCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardEvalCountQuery, GetLeaderboardEvalCountQueryVariables>;
export const GetLeaderboardExpIncrementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardExpIncrement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardExpIncrement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardExpIncrementQuery, GetLeaderboardExpIncrementQueryVariables>;
export const GetLeaderboardLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardLevel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardLevelQuery, GetLeaderboardLevelQueryVariables>;
export const GetAverageCommentLengthByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageCommentLengthByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageCommentLengthByLoginQuery, GetAverageCommentLengthByLoginQueryVariables>;
export const GetAverageDurationByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageDurationByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDuration"}}]}}]}}]} as unknown as DocumentNode<GetAverageDurationByLoginQuery, GetAverageDurationByLoginQueryVariables>;
export const GetAverageFeedbackLengthByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageFeedbackLengthByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageFeedbackLengthByLoginQuery, GetAverageFeedbackLengthByLoginQueryVariables>;
export const GetAverageFinalMarkByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageFinalMarkByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFinalMark"}}]}}]}}]} as unknown as DocumentNode<GetAverageFinalMarkByLoginQuery, GetAverageFinalMarkByLoginQueryVariables>;
export const GetCorrectionPointByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCorrectionPointByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPoint"}}]}}]}}]} as unknown as DocumentNode<GetCorrectionPointByLoginQuery, GetCorrectionPointByLoginQueryVariables>;
export const GetEvalCountByDateTemplateByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvalCountByDateTemplateByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currData"},"name":{"kind":"Name","value":"countByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastData"},"name":{"kind":"Name","value":"countByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetEvalCountByDateTemplateByLoginQuery, GetEvalCountByDateTemplateByLoginQueryVariables>;
export const GetRecentCommentByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecentCommentByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentComment"}}]}}]}}]} as unknown as DocumentNode<GetRecentCommentByLoginQuery, GetRecentCommentByLoginQueryVariables>;
export const GetTotalDurationByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalDurationByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDuration"}}]}}]}}]} as unknown as DocumentNode<GetTotalDurationByLoginQuery, GetTotalDurationByLoginQueryVariables>;
export const GetTotalEvalCountByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalEvalCountByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetTotalEvalCountByLoginQuery, GetTotalEvalCountByLoginQueryVariables>;
export const GetBeginAtByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBeginAtByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginAt"}}]}}]}}]} as unknown as DocumentNode<GetBeginAtByLoginQuery, GetBeginAtByLoginQueryVariables>;
export const GetBlackHoledAtByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlackHoledAtByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}}]}}]}}]} as unknown as DocumentNode<GetBlackHoledAtByLoginQuery, GetBlackHoledAtByLoginQueryVariables>;
export const GetCharacterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCharacter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"character"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"effort"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logtimeRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"evalCountRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"examTryCount"}},{"kind":"Field","name":{"kind":"Name","value":"projectTryCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"talent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"examOneshotRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectOneshotRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outstandingRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCharacterQuery, GetCharacterQueryVariables>;
export const GetCoalitionScoreByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCoalitionScoreByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rankInCoalition"}}]}}]}}]}}]} as unknown as DocumentNode<GetCoalitionScoreByLoginQuery, GetCoalitionScoreByLoginQueryVariables>;
export const GetLastPassedByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastPassedByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastPassed"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastPassedByLoginQuery, GetLastPassedByLoginQueryVariables>;
export const GetLastRegisteredByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastRegisteredByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"}}]}}]}}]}}]} as unknown as DocumentNode<GetLastRegisteredByLoginQuery, GetLastRegisteredByLoginQueryVariables>;
export const GetLevelRecordsByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLevelRecordsByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetLevelRecordsByLoginQuery, GetLevelRecordsByLoginQueryVariables>;
export const GetLogtimeByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLogtimeByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currData"},"name":{"kind":"Name","value":"logtimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastData"},"name":{"kind":"Name","value":"logtimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLogtimeByDateTemplateQuery, GetLogtimeByDateTemplateQueryVariables>;
export const GetPreferredClusterByDateTemplateByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPreferredClusterByDateTemplateByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredClusterByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetPreferredClusterByDateTemplateByLoginQuery, GetPreferredClusterByDateTemplateByLoginQueryVariables>;
export const GetPrefferedTimeByDateTemplateByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPrefferedTimeByDateTemplateByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredTimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"morning"}},{"kind":"Field","name":{"kind":"Name","value":"daytime"}},{"kind":"Field","name":{"kind":"Name","value":"evening"}},{"kind":"Field","name":{"kind":"Name","value":"night"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetPrefferedTimeByDateTemplateByLoginQuery, GetPrefferedTimeByDateTemplateByLoginQueryVariables>;
export const GetTeamInfoByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamInfoByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"}},{"kind":"Field","name":{"kind":"Name","value":"lastPassed"}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamInfoByLoginQuery, GetTeamInfoByLoginQueryVariables>;
export const GetWalletByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWalletByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallet"}}]}}]}}]} as unknown as DocumentNode<GetWalletByLoginQuery, GetWalletByLoginQueryVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}},{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"titleId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const GetAveragePassFinalMarkByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAveragePassFinalMarkByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averagePassFinalMark"}}]}}]}}]} as unknown as DocumentNode<GetAveragePassFinalMarkByProjectNameQuery, GetAveragePassFinalMarkByProjectNameQueryVariables>;
export const GetClosedTeamCountByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClosedTeamCountByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"closedTeamCount"}}]}}]}}]} as unknown as DocumentNode<GetClosedTeamCountByProjectNameQuery, GetClosedTeamCountByProjectNameQueryVariables>;
export const GetCurrRegisteredTeamCountByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrRegisteredTeamCountByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredTeamCount"}}]}}]}}]} as unknown as DocumentNode<GetCurrRegisteredTeamCountByProjectNameQuery, GetCurrRegisteredTeamCountByProjectNameQueryVariables>;
export const GetDifficultyByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDifficultyByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"difficulty"}}]}}]}}]} as unknown as DocumentNode<GetDifficultyByProjectNameQuery, GetDifficultyByProjectNameQueryVariables>;
export const GetEstimateTimeByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEstimateTimeByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"estimateTime"}}]}}]}}]} as unknown as DocumentNode<GetEstimateTimeByProjectNameQuery, GetEstimateTimeByProjectNameQueryVariables>;
export const GetObjectivesByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectivesByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"objectives"}}]}}]}}]} as unknown as DocumentNode<GetObjectivesByProjectNameQuery, GetObjectivesByProjectNameQueryVariables>;
export const GetSkillsByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSkillsByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"}}]}}]}}]} as unknown as DocumentNode<GetSkillsByProjectNameQuery, GetSkillsByProjectNameQueryVariables>;
export const GetUserCountByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserCountByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minUserCount"}},{"kind":"Field","name":{"kind":"Name","value":"maxUserCount"}}]}}]}}]} as unknown as DocumentNode<GetUserCountByProjectNameQuery, GetUserCountByProjectNameQueryVariables>;
export const GetValidatedRateByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetValidatedRateByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validatedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetValidatedRateByProjectNameQuery, GetValidatedRateByProjectNameQueryVariables>;
export const GetProjectInfoByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectInfoByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minUserCount"}},{"kind":"Field","name":{"kind":"Name","value":"maxUserCount"}},{"kind":"Field","name":{"kind":"Name","value":"estimateTime"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"currRegisteredTeamCount"}},{"kind":"Field","name":{"kind":"Name","value":"closedTeamCount"}},{"kind":"Field","name":{"kind":"Name","value":"averagePassFinalMark"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"validatedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"validatedRateFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"validatedRateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Rate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetProjectInfoByProjectNameQuery, GetProjectInfoByProjectNameQueryVariables>;