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
};

export type Character = {
  __typename?: 'Character';
  effort: CharacterEffort;
  talent: CharacterTalent;
};

export type CharacterEffort = {
  __typename?: 'CharacterEffort';
  evalCountRank: UserRankWithCount;
  examTryCount: Scalars['Int'];
  logtimeRank: UserRankWithCount;
  projectTryCount: Scalars['Int'];
};

export type CharacterTalent = {
  __typename?: 'CharacterTalent';
  examOneshotRate: Rate;
  levelRank: UserRankWithCount;
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
  edges: Array<EvalLogEdge>;
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

export type GoogleLoginInput = {
  clientId: Scalars['String'];
  credential: Scalars['String'];
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

export type InternalServerErrorType = {
  __typename?: 'InternalServerErrorType';
  message: Scalars['String'];
  status: Scalars['Int'];
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

export type Mutation = {
  __typename?: 'Mutation';
  deleteAccount: Scalars['Boolean'];
  linkGoogle: Scalars['Boolean'];
  login: StatusUnion;
  logout: Scalars['Boolean'];
  refreshToken: StatusUnion;
  unlinkGoogle: Scalars['Boolean'];
};


export type MutationLinkGoogleArgs = {
  google: GoogleLoginInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRefreshTokenArgs = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
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

export type NotFoundType = {
  __typename?: 'NotFoundType';
  message: Scalars['String'];
  status: Scalars['Int'];
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
  destinyRanking: Array<UserRank>;
  recentComment?: Maybe<Scalars['String']>;
  totalCount: Scalars['Int'];
  totalDuration: Scalars['Int'];
  userProfile: UserProfile;
};


export type PersonalEvalCountByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};


export type PersonalEvalDestinyRankingArgs = {
  limit?: Scalars['Int'];
};

export type PersonalGeneral = {
  __typename?: 'PersonalGeneral';
  beginAt: Scalars['DateTime'];
  blackholedAt?: Maybe<Scalars['DateTime']>;
  character?: Maybe<Character>;
  logtimeByDateTemplate: IntDateRanged;
  preferredClusterByDateTemplate: PreferredClusterDateRanged;
  preferredTimeByDateTemplate: PreferredTimeDateRanged;
  promoLevelRecords: Array<LevelRecord>;
  promoMemberLevelRecords: Array<LevelRecord>;
  scoreInfo: UserScoreInfo;
  teamInfo: TeamInfo;
  userLevelRecords: Array<LevelRecord>;
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
  objectives: Array<Scalars['String']>;
  skills: Array<Scalars['String']>;
  url: Scalars['String'];
  validatedRate: Rate;
};

export type ProjectPreview = {
  __typename?: 'ProjectPreview';
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type ProjectRank = {
  __typename?: 'ProjectRank';
  projectPreview: ProjectPreview;
  rank: Scalars['Int'];
  value: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  findProjectPreview: Array<ProjectPreview>;
  findUserPreview: Array<UserPreview>;
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
  getSetting: Setting;
};


export type QueryFindProjectPreviewArgs = {
  limit?: Scalars['Int'];
  name: Scalars['String'];
};


export type QueryFindUserPreviewArgs = {
  limit?: Scalars['Int'];
  login: Scalars['String'];
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
  records: Array<IntRecord>;
};

export type Setting = {
  __typename?: 'Setting';
  googleEmail?: Maybe<Scalars['String']>;
  linkedTime?: Maybe<Scalars['DateTime']>;
  userLogin: Scalars['String'];
};

export type StatusUnion = InternalServerErrorType | NotFoundType | SuccessType | UnauthorizedType;

export type SuccessType = {
  __typename?: 'SuccessType';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  status: Scalars['Int'];
  userPreview: UserPreviewWithDisplayname;
};

export type TeamInfo = {
  __typename?: 'TeamInfo';
  lastPassed?: Maybe<Scalars['String']>;
  lastRegistered?: Maybe<Scalars['String']>;
  teams: Array<UserTeam>;
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

export type UnauthorizedType = {
  __typename?: 'UnauthorizedType';
  message: Scalars['String'];
  status: Scalars['Int'];
};

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

export type UserPreviewWithDisplayname = {
  __typename?: 'UserPreviewWithDisplayname';
  displayname: Scalars['String'];
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
  titles: Array<UserTitle>;
};

export type UserRank = {
  __typename?: 'UserRank';
  rank: Scalars['Int'];
  userPreview: UserPreview;
  value: Scalars['Float'];
};

export type UserRankWithCount = {
  __typename?: 'UserRankWithCount';
  rank: Scalars['Int'];
  totalUserCount: Scalars['Int'];
  userPreview: UserPreview;
  value: Scalars['Float'];
};

export type UserRankingIndexPaginated = {
  __typename?: 'UserRankingIndexPaginated';
  nodes: Array<UserRank>;
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

export type LoginInput = {
  code?: InputMaybe<Scalars['String']>;
  google?: InputMaybe<GoogleLoginInput>;
};

export type LoginGoogleMutationVariables = Exact<{
  google?: InputMaybe<GoogleLoginInput>;
}>;


export type LoginGoogleMutation = { __typename?: 'Mutation', login: { __typename: 'InternalServerErrorType', status: number, message: string } | { __typename: 'NotFoundType', status: number, message: string } | { __typename: 'SuccessType', status: number, accessToken: string, refreshToken: string, userPreview: { __typename?: 'UserPreviewWithDisplayname', id: number, login: string, imgUrl?: string | null, displayname: string } } | { __typename: 'UnauthorizedType', status: number, message: string } };

export type FindUserPreviewQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type FindUserPreviewQuery = { __typename?: 'Query', findUserPreview: Array<{ __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }> };

export type FindProjectPreviewQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type FindProjectPreviewQuery = { __typename?: 'Query', findProjectPreview: Array<{ __typename?: 'ProjectPreview', id: number, name: string, url: string }> };

export type GetMyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyProfileQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', id: number, login: string, imgUrl?: string | null, displayname: string } } };

export type VerifyMutationVariables = Exact<{
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
}>;


export type VerifyMutation = { __typename?: 'Mutation', refreshToken: { __typename: 'InternalServerErrorType', status: number, message: string } | { __typename: 'NotFoundType', status: number, message: string } | { __typename: 'SuccessType', status: number, accessToken: string, refreshToken: string, userPreview: { __typename?: 'UserPreviewWithDisplayname', id: number, login: string, imgUrl?: string | null, displayname: string } } | { __typename: 'UnauthorizedType', status: number, message: string } };

export type GetEvalLogsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  corrector?: InputMaybe<Scalars['String']>;
  corrected?: InputMaybe<Scalars['String']>;
  projectName?: InputMaybe<Scalars['String']>;
  outstandingOnly?: InputMaybe<Scalars['Boolean']>;
  sortOrder: EvalLogSortOrder;
}>;


export type GetEvalLogsQuery = { __typename?: 'Query', getEvalLogs: { __typename?: 'EvalLogsPaginated', edges: Array<{ __typename?: 'EvalLogEdge', cursor: string, node: { __typename?: 'EvalLog', id: number, header: { __typename?: 'EvalLogHeader', beginAt: string, corrector: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }, teamPreview: { __typename?: 'TeamPreview', id: number, name: string, url: string }, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string }, flag: { __typename?: 'Flag', id: number, name: string, isPositive: boolean } }, correctorReview: { __typename?: 'EvalReview', mark: number, review: string }, correctedsReview?: { __typename?: 'EvalReview', mark: number, review: string } | null } }>, pageInfo?: { __typename?: 'CursorPageInfo', totalCount: number, hasNextPage: boolean, endCursor?: string | null } | null } };

export type LoginFtMutationVariables = Exact<{
  code: Scalars['String'];
  google?: InputMaybe<GoogleLoginInput>;
}>;


export type LoginFtMutation = { __typename?: 'Mutation', login: { __typename: 'InternalServerErrorType', status: number, message: string } | { __typename: 'NotFoundType', status: number, message: string } | { __typename: 'SuccessType', status: number, accessToken: string, refreshToken: string, userPreview: { __typename?: 'UserPreviewWithDisplayname', id: number, login: string, imgUrl?: string | null, displayname: string } } | { __typename: 'UnauthorizedType', status: number, message: string } };

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = { __typename?: 'Query', getMyInfo: { __typename?: 'MyInfo', isNewMember: boolean, blackholedAt?: string | null, experienceRank?: number | null, scoreRank?: number | null, evalCountRank?: number | null, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }, recentValidatedTeam?: { __typename?: 'UserTeam', status: TeamStatus, lastEventTime: string, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } } | null }, getHomeUser: { __typename?: 'HomeUser', aliveUserCountRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }>, averageDurationPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }>, blackholedCountPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }>, blackholedRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> }, correctionPointRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }>, memberRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> }, userCountPerLevel: Array<{ __typename?: 'UserCountPerLevel', value: number, level: number }>, walletRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> }, getHomeEval: { __typename?: 'HomeEval', averageCommentLength: number, averageFeedbackLength: number }, getHomeTeam: { __typename?: 'HomeTeam', currRegisteredCountRanking: Array<{ __typename?: 'ProjectRank', rank: number, value: number, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } }>, recentExamResult: { __typename?: 'ExamResultDateRanged', start: string, end: string, data: { __typename?: 'ExamResult', beginAt: string, endAt: string, location: string, maxPeople: number, name: string, nbrSubscribers: number, resultPerRank: Array<{ __typename?: 'ResultPerRank', rank: number, rate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } }> } } }, getHomeCoalition: { __typename?: 'HomeCoalition', scoreRecordsPerCoalition: Array<{ __typename?: 'ScoreRecordPerCoalition', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number }, records: Array<{ __typename?: 'IntRecord', at: string, value: number }> }>, totalScoresPerCoalition: Array<{ __typename?: 'IntPerCoalition', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, userId: number } }> } };

export type GetMyInfoFragmentFragment = { __typename?: 'MyInfo', isNewMember: boolean, blackholedAt?: string | null, experienceRank?: number | null, scoreRank?: number | null, evalCountRank?: number | null, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }, recentValidatedTeam?: { __typename?: 'UserTeam', status: TeamStatus, lastEventTime: string, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } } | null };

export type HomeUserFragmentFragment = { __typename?: 'HomeUser', aliveUserCountRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }>, averageDurationPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }>, blackholedCountPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }>, blackholedRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> }, correctionPointRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }>, memberRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> }, userCountPerLevel: Array<{ __typename?: 'UserCountPerLevel', value: number, level: number }>, walletRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> };

export type AliveUserCountRecordsFragmentFragment = { __typename?: 'HomeUser', aliveUserCountRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }> };

export type AverageDurationPerCircleFragmentFragment = { __typename?: 'HomeUser', averageDurationPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }> };

export type BlackholedCountPerCircleFragmentFragment = { __typename?: 'HomeUser', blackholedCountPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }> };

export type BlackholedRateFragmentFragment = { __typename?: 'HomeUser', blackholedRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } };

export type CorrectionPointRankingFragmentFragment = { __typename?: 'HomeUser', correctionPointRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> };

export type MemberRateFragmentFragment = { __typename?: 'HomeUser', memberRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } };

export type UserCountPerLevelFragmentFragment = { __typename?: 'HomeUser', userCountPerLevel: Array<{ __typename?: 'UserCountPerLevel', value: number, level: number }> };

export type WalletRankingFragmentFragment = { __typename?: 'HomeUser', walletRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> };

export type HomeEvalFragmentFragment = { __typename?: 'HomeEval', averageCommentLength: number, averageFeedbackLength: number };

export type HomeTeamFragmentFragment = { __typename?: 'HomeTeam', currRegisteredCountRanking: Array<{ __typename?: 'ProjectRank', rank: number, value: number, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } }>, recentExamResult: { __typename?: 'ExamResultDateRanged', start: string, end: string, data: { __typename?: 'ExamResult', beginAt: string, endAt: string, location: string, maxPeople: number, name: string, nbrSubscribers: number, resultPerRank: Array<{ __typename?: 'ResultPerRank', rank: number, rate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } }> } } };

export type CurrRegisteredCountRankingFragmentFragment = { __typename?: 'HomeTeam', currRegisteredCountRanking: Array<{ __typename?: 'ProjectRank', rank: number, value: number, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } }> };

export type RecentExamResultFragmentFragment = { __typename?: 'HomeTeam', recentExamResult: { __typename?: 'ExamResultDateRanged', start: string, end: string, data: { __typename?: 'ExamResult', beginAt: string, endAt: string, location: string, maxPeople: number, name: string, nbrSubscribers: number, resultPerRank: Array<{ __typename?: 'ResultPerRank', rank: number, rate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } }> } } };

export type HomeCoalitionFragmentFragment = { __typename?: 'HomeCoalition', scoreRecordsPerCoalition: Array<{ __typename?: 'ScoreRecordPerCoalition', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number }, records: Array<{ __typename?: 'IntRecord', at: string, value: number }> }>, totalScoresPerCoalition: Array<{ __typename?: 'IntPerCoalition', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, userId: number } }> };

export type ScoreRecordsPerCoalitionFragmentFragment = { __typename?: 'HomeCoalition', scoreRecordsPerCoalition: Array<{ __typename?: 'ScoreRecordPerCoalition', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number }, records: Array<{ __typename?: 'IntRecord', at: string, value: number }> }> };

export type TotalScoresPerCoalitionFragmentFragment = { __typename?: 'HomeCoalition', totalScoresPerCoalition: Array<{ __typename?: 'IntPerCoalition', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, userId: number } }> };

export type GetTigCountPerCoalitionByDateTemplateQueryVariables = Exact<{
  dateTemplate: DateTemplate;
}>;


export type GetTigCountPerCoalitionByDateTemplateQuery = { __typename?: 'Query', getHomeCoalition: { __typename?: 'HomeCoalition', tigCountPerCoalitionByDateTemplate: { __typename?: 'IntPerCoalitionDateRanged', start: string, end: string, data: Array<{ __typename?: 'IntPerCoalition', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number } }> } } };

export type GetEvalCountByDateTemplateQueryVariables = Exact<{
  dateTemplate: DateTemplate;
}>;


export type GetEvalCountByDateTemplateQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', evalCountByDateTemplate: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetAverageEvalCountByDateTemplateQueryVariables = Exact<{
  dateTemplate: DateTemplate;
}>;


export type GetAverageEvalCountByDateTemplateQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', averageEvalCountByDateTemplate: { __typename?: 'FloatDateRanged', data: number, start: string, end: string } } };

export type GetCurrLastEvalCountByDateTemplateQueryVariables = Exact<{
  currDateTemplate: DateTemplate;
  lastDateTemplate: DateTemplate;
}>;


export type GetCurrLastEvalCountByDateTemplateQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', currData: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastData: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetBlackholedCountByDateTemplateQueryVariables = Exact<{
  currDateTemplate: DateTemplate;
  lastDateTemplate: DateTemplate;
}>;


export type GetBlackholedCountByDateTemplateQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', currData: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastData: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetLandingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLandingQuery = { __typename?: 'Query', getLanding: { __typename?: 'Landing', daysAfterBeginAt: number, aliveCount: number, blackholedCount: number, memberCount: number, evalCount: number, trendingProject: { __typename?: 'ProjectRank', rank: number, value: number, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } } } };

export type GetLeaderboardCoalitionScoreQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardCoalitionScoreQuery = { __typename?: 'Query', getLeaderboardScore: { __typename?: 'LeaderboardScore', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } } } } };

export type GetLeaderboardEvalCountQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardEvalCountQuery = { __typename?: 'Query', getLeaderboardEvalCount: { __typename?: 'LeaderboardEval', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } } } } };

export type GetLeaderboardExpIncrementQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardExpIncrementQuery = { __typename?: 'Query', getLeaderboardExpIncrement: { __typename?: 'LeaderboardExp', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } } } } };

export type GetLeaderboardLevelQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardLevelQuery = { __typename?: 'Query', getLeaderboardLevel: { __typename?: 'LeaderboardLevel', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } } } } };

export type GetPersonalEvalByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetPersonalEvalByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', correctionPoint: number, totalCount: number, totalDuration: number, averageDuration: number, averageFinalMark: number, averageCommentLength: number, averageFeedbackLength: number, recentComment?: string | null } };

export type GetEvalCountByDateTemplateByLoginQueryVariables = Exact<{
  login: Scalars['String'];
  currDateTemplate: DateTemplate;
  lastDateTemplate: DateTemplate;
}>;


export type GetEvalCountByDateTemplateByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', currData: { __typename?: 'IntDateRanged', data: number, start: string, end: string }, lastData: { __typename?: 'IntDateRanged', data: number, start: string, end: string } } };

export type GetPersonalGeneralByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetPersonalGeneralByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', beginAt: string, wallet: number, blackholedAt?: string | null, teamInfo: { __typename?: 'TeamInfo', lastPassed?: string | null, lastRegistered?: string | null, teams: Array<{ __typename?: 'UserTeam', id: number, name: string, occurrence: number, status: TeamStatus, lastEventTime: string, isValidated?: boolean | null, finalMark?: number | null, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } }> }, userProfile: { __typename?: 'UserProfile', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number } }, scoreInfo: { __typename?: 'UserScoreInfo', value: number, rankInCoalition: number }, userLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }>, promoLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }>, promoMemberLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }> } };

export type CoalitionScoreFragmentFragment = { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number } }, scoreInfo: { __typename?: 'UserScoreInfo', value: number, rankInCoalition: number } };

export type LevelRecordsFragmentFragment = { __typename?: 'PersonalGeneral', userLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }>, promoLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }>, promoMemberLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }> };

export type CharacterFragmentFragment = { __typename?: 'PersonalGeneral', character?: { __typename?: 'Character', effort: { __typename?: 'CharacterEffort', examTryCount: number, projectTryCount: number, logtimeRank: { __typename?: 'UserRankWithCount', rank: number, value: number, userPreview: { __typename?: 'UserPreview', id: number } }, evalCountRank: { __typename?: 'UserRankWithCount', rank: number, value: number } }, talent: { __typename?: 'CharacterTalent', levelRank: { __typename?: 'UserRankWithCount', rank: number, value: number }, examOneshotRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> }, projectOneshotRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> }, outstandingRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } } } | null };

export type TeamInfoFragmentFragment = { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'TeamInfo', lastRegistered?: string | null, lastPassed?: string | null, teams: Array<{ __typename?: 'UserTeam', id: number, name: string, occurrence: number, status: TeamStatus, lastEventTime: string, isValidated?: boolean | null, finalMark?: number | null, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } }> } };

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

export type GetUserProfileByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetUserProfileByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', id: number, login: string, imgUrl?: string | null, grade: string, displayname: string, level: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl?: string | null, coverUrl?: string | null, color?: string | null, score: number, userId: number }, titles: Array<{ __typename?: 'UserTitle', titleId: number, name: string, selected: boolean, createdAt: string, updatedAt: string }> } } };

export type GetProjectInfoByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetProjectInfoByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', name: string, description: string, minUserCount: number, maxUserCount: number, estimateTime?: string | null, difficulty?: number | null, currRegisteredTeamCount: number, closedTeamCount: number, averagePassFinalMark: number, objectives: Array<string>, skills: Array<string>, validatedRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } } };

export type ValidatedRateFragmentFragment = { __typename?: 'ProjectInfo', validatedRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } };

export type DeleteAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAccountMutation = { __typename?: 'Mutation', deleteAccount: boolean };

export type GetSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingQuery = { __typename?: 'Query', getSetting: { __typename?: 'Setting', userLogin: string, googleEmail?: string | null, linkedTime?: string | null } };

export type LinkGoogleMutationVariables = Exact<{
  google: GoogleLoginInput;
}>;


export type LinkGoogleMutation = { __typename?: 'Mutation', linkGoogle: boolean };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type UnlinkGoogleMutationVariables = Exact<{ [key: string]: never; }>;


export type UnlinkGoogleMutation = { __typename?: 'Mutation', unlinkGoogle: boolean };

export const GetMyInfoFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getMyInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MyInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recentValidatedTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNewMember"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}},{"kind":"Field","name":{"kind":"Name","value":"experienceRank"}},{"kind":"Field","name":{"kind":"Name","value":"scoreRank"}},{"kind":"Field","name":{"kind":"Name","value":"evalCountRank"}}]}}]} as unknown as DocumentNode<GetMyInfoFragmentFragment, unknown>;
export const AliveUserCountRecordsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"aliveUserCountRecordsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aliveUserCountRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<AliveUserCountRecordsFragmentFragment, unknown>;
export const AverageDurationPerCircleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"averageDurationPerCircleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDurationPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<AverageDurationPerCircleFragmentFragment, unknown>;
export const BlackholedCountPerCircleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blackholedCountPerCircleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedCountPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<BlackholedCountPerCircleFragmentFragment, unknown>;
export const BlackholedRateFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blackholedRateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<BlackholedRateFragmentFragment, unknown>;
export const CorrectionPointRankingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"correctionPointRankingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPointRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]} as unknown as DocumentNode<CorrectionPointRankingFragmentFragment, unknown>;
export const MemberRateFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"memberRateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<MemberRateFragmentFragment, unknown>;
export const UserCountPerLevelFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userCountPerLevelFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCountPerLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]} as unknown as DocumentNode<UserCountPerLevelFragmentFragment, unknown>;
export const WalletRankingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"walletRankingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]} as unknown as DocumentNode<WalletRankingFragmentFragment, unknown>;
export const HomeUserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homeUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"aliveUserCountRecordsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"averageDurationPerCircleFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blackholedCountPerCircleFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blackholedRateFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"correctionPointRankingFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"memberRateFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"userCountPerLevelFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"walletRankingFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"aliveUserCountRecordsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aliveUserCountRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"averageDurationPerCircleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDurationPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blackholedCountPerCircleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedCountPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blackholedRateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"correctionPointRankingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPointRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"memberRateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userCountPerLevelFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCountPerLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"walletRankingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]} as unknown as DocumentNode<HomeUserFragmentFragment, unknown>;
export const HomeEvalFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homeEvalFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeEval"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}},{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]} as unknown as DocumentNode<HomeEvalFragmentFragment, unknown>;
export const CurrRegisteredCountRankingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"currRegisteredCountRankingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCountRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CurrRegisteredCountRankingFragmentFragment, unknown>;
export const RecentExamResultFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"recentExamResultFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentExamResult"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resultPerRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"rate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxPeople"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nbrSubscribers"}}]}}]}}]}}]} as unknown as DocumentNode<RecentExamResultFragmentFragment, unknown>;
export const HomeTeamFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homeTeamFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"currRegisteredCountRankingFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"recentExamResultFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"currRegisteredCountRankingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCountRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"recentExamResultFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentExamResult"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resultPerRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"rate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxPeople"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nbrSubscribers"}}]}}]}}]}}]} as unknown as DocumentNode<HomeTeamFragmentFragment, unknown>;
export const ScoreRecordsPerCoalitionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"scoreRecordsPerCoalitionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeCoalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scoreRecordsPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ScoreRecordsPerCoalitionFragmentFragment, unknown>;
export const TotalScoresPerCoalitionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"totalScoresPerCoalitionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeCoalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalScoresPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<TotalScoresPerCoalitionFragmentFragment, unknown>;
export const HomeCoalitionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homeCoalitionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeCoalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"scoreRecordsPerCoalitionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"totalScoresPerCoalitionFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"scoreRecordsPerCoalitionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeCoalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scoreRecordsPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"totalScoresPerCoalitionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeCoalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalScoresPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<HomeCoalitionFragmentFragment, unknown>;
export const CoalitionScoreFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionScoreFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalGeneral"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rankInCoalition"}}]}}]}}]} as unknown as DocumentNode<CoalitionScoreFragmentFragment, unknown>;
export const LevelRecordsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"levelRecordsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalGeneral"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promoLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promoMemberLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]} as unknown as DocumentNode<LevelRecordsFragmentFragment, unknown>;
export const CharacterFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"characterFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalGeneral"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"character"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"effort"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logtimeRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"evalCountRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"examTryCount"}},{"kind":"Field","name":{"kind":"Name","value":"projectTryCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"talent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"examOneshotRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectOneshotRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outstandingRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CharacterFragmentFragment, unknown>;
export const TeamInfoFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"teamInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalGeneral"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"}},{"kind":"Field","name":{"kind":"Name","value":"lastPassed"}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}}]}}]}}]}}]} as unknown as DocumentNode<TeamInfoFragmentFragment, unknown>;
export const ValidatedRateFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"validatedRateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validatedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ValidatedRateFragmentFragment, unknown>;
export const LoginGoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginGoogle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"google"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GoogleLoginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"google"},"value":{"kind":"Variable","name":{"kind":"Name","value":"google"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnauthorizedType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalServerErrorType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SuccessType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginGoogleMutation, LoginGoogleMutationVariables>;
export const FindUserPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUserPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUserPreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]}}]} as unknown as DocumentNode<FindUserPreviewQuery, FindUserPreviewQueryVariables>;
export const FindProjectPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindProjectPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findProjectPreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<FindProjectPreviewQuery, FindProjectPreviewQueryVariables>;
export const GetMyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyProfileQuery, GetMyProfileQueryVariables>;
export const VerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Verify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnauthorizedType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalServerErrorType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SuccessType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}}]}}]}}]}}]}}]} as unknown as DocumentNode<VerifyMutation, VerifyMutationVariables>;
export const GetEvalLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvalLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"corrector"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"corrected"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"outstandingOnly"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EvalLogSortOrder"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEvalLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"corrector"},"value":{"kind":"Variable","name":{"kind":"Name","value":"corrector"}}},{"kind":"Argument","name":{"kind":"Name","value":"corrected"},"value":{"kind":"Variable","name":{"kind":"Name","value":"corrected"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}},{"kind":"Argument","name":{"kind":"Name","value":"outstandingOnly"},"value":{"kind":"Variable","name":{"kind":"Name","value":"outstandingOnly"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"corrector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPositive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"correctorReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}},{"kind":"Field","name":{"kind":"Name","value":"correctedsReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<GetEvalLogsQuery, GetEvalLogsQueryVariables>;
export const LoginFtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginFt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"google"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GoogleLoginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"google"},"value":{"kind":"Variable","name":{"kind":"Name","value":"google"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnauthorizedType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalServerErrorType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SuccessType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginFtMutation, LoginFtMutationVariables>;
export const GetHomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"getMyInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"homeUserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"homeEvalFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getHomeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"homeTeamFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"homeCoalitionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"aliveUserCountRecordsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aliveUserCountRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"averageDurationPerCircleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDurationPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blackholedCountPerCircleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedCountPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"blackholedRateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"correctionPointRankingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPointRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"memberRateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userCountPerLevelFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCountPerLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"walletRankingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"currRegisteredCountRankingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCountRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"recentExamResultFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentExamResult"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resultPerRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"rate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"maxPeople"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nbrSubscribers"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"scoreRecordsPerCoalitionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeCoalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scoreRecordsPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"totalScoresPerCoalitionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeCoalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalScoresPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getMyInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MyInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recentValidatedTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNewMember"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}},{"kind":"Field","name":{"kind":"Name","value":"experienceRank"}},{"kind":"Field","name":{"kind":"Name","value":"scoreRank"}},{"kind":"Field","name":{"kind":"Name","value":"evalCountRank"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homeUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"aliveUserCountRecordsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"averageDurationPerCircleFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blackholedCountPerCircleFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"blackholedRateFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"correctionPointRankingFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"memberRateFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"userCountPerLevelFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"walletRankingFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homeEvalFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeEval"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}},{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homeTeamFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"currRegisteredCountRankingFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"recentExamResultFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"homeCoalitionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeCoalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"scoreRecordsPerCoalitionFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"totalScoresPerCoalitionFragment"}}]}}]} as unknown as DocumentNode<GetHomeQuery, GetHomeQueryVariables>;
export const GetTigCountPerCoalitionByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTigCountPerCoalitionByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tigCountPerCoalitionByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetTigCountPerCoalitionByDateTemplateQuery, GetTigCountPerCoalitionByDateTemplateQueryVariables>;
export const GetEvalCountByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvalCountByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetEvalCountByDateTemplateQuery, GetEvalCountByDateTemplateQueryVariables>;
export const GetAverageEvalCountByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageEvalCountByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageEvalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetAverageEvalCountByDateTemplateQuery, GetAverageEvalCountByDateTemplateQueryVariables>;
export const GetCurrLastEvalCountByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrLastEvalCountByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currData"},"name":{"kind":"Name","value":"evalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastData"},"name":{"kind":"Name","value":"evalCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrLastEvalCountByDateTemplateQuery, GetCurrLastEvalCountByDateTemplateQueryVariables>;
export const GetBlackholedCountByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlackholedCountByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currData"},"name":{"kind":"Name","value":"blackholedCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastData"},"name":{"kind":"Name","value":"blackholedCountByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackholedCountByDateTemplateQuery, GetBlackholedCountByDateTemplateQueryVariables>;
export const GetLandingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daysAfterBeginAt"}},{"kind":"Field","name":{"kind":"Name","value":"aliveCount"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedCount"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}},{"kind":"Field","name":{"kind":"Name","value":"evalCount"}},{"kind":"Field","name":{"kind":"Name","value":"trendingProject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetLandingQuery, GetLandingQueryVariables>;
export const GetLeaderboardCoalitionScoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardCoalitionScore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardCoalitionScoreQuery, GetLeaderboardCoalitionScoreQueryVariables>;
export const GetLeaderboardEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardEvalCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardEvalCountQuery, GetLeaderboardEvalCountQueryVariables>;
export const GetLeaderboardExpIncrementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardExpIncrement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardExpIncrement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardExpIncrementQuery, GetLeaderboardExpIncrementQueryVariables>;
export const GetLeaderboardLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardLevel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardLevelQuery, GetLeaderboardLevelQueryVariables>;
export const GetPersonalEvalByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonalEvalByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPoint"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalDuration"}},{"kind":"Field","name":{"kind":"Name","value":"averageDuration"}},{"kind":"Field","name":{"kind":"Name","value":"averageFinalMark"}},{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}},{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}},{"kind":"Field","name":{"kind":"Name","value":"recentComment"}}]}}]}}]} as unknown as DocumentNode<GetPersonalEvalByLoginQuery, GetPersonalEvalByLoginQueryVariables>;
export const GetEvalCountByDateTemplateByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvalCountByDateTemplateByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currData"},"name":{"kind":"Name","value":"countByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastData"},"name":{"kind":"Name","value":"countByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetEvalCountByDateTemplateByLoginQuery, GetEvalCountByDateTemplateByLoginQueryVariables>;
export const GetPersonalGeneralByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonalGeneralByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastPassed"}},{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wallet"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"coalitionScoreFragment"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"levelRecordsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamInfoFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionScoreFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalGeneral"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rankInCoalition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"levelRecordsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalGeneral"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promoLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promoMemberLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"teamInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalGeneral"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"}},{"kind":"Field","name":{"kind":"Name","value":"lastPassed"}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonalGeneralByLoginQuery, GetPersonalGeneralByLoginQueryVariables>;
export const GetLogtimeByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLogtimeByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currData"},"name":{"kind":"Name","value":"logtimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastData"},"name":{"kind":"Name","value":"logtimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastDateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetLogtimeByDateTemplateQuery, GetLogtimeByDateTemplateQueryVariables>;
export const GetPreferredClusterByDateTemplateByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPreferredClusterByDateTemplateByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredClusterByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetPreferredClusterByDateTemplateByLoginQuery, GetPreferredClusterByDateTemplateByLoginQueryVariables>;
export const GetPrefferedTimeByDateTemplateByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPrefferedTimeByDateTemplateByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredTimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"morning"}},{"kind":"Field","name":{"kind":"Name","value":"daytime"}},{"kind":"Field","name":{"kind":"Name","value":"evening"}},{"kind":"Field","name":{"kind":"Name","value":"night"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetPrefferedTimeByDateTemplateByLoginQuery, GetPrefferedTimeByDateTemplateByLoginQueryVariables>;
export const GetUserProfileByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfileByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}},{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"titleId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProfileByLoginQuery, GetUserProfileByLoginQueryVariables>;
export const GetProjectInfoByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectInfoByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minUserCount"}},{"kind":"Field","name":{"kind":"Name","value":"maxUserCount"}},{"kind":"Field","name":{"kind":"Name","value":"estimateTime"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"currRegisteredTeamCount"}},{"kind":"Field","name":{"kind":"Name","value":"closedTeamCount"}},{"kind":"Field","name":{"kind":"Name","value":"averagePassFinalMark"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"validatedRateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"validatedRateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validatedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectInfoByProjectNameQuery, GetProjectInfoByProjectNameQueryVariables>;
export const DeleteAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAccount"}}]}}]} as unknown as DocumentNode<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const GetSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogin"}},{"kind":"Field","name":{"kind":"Name","value":"googleEmail"}},{"kind":"Field","name":{"kind":"Name","value":"linkedTime"}}]}}]}}]} as unknown as DocumentNode<GetSettingQuery, GetSettingQueryVariables>;
export const LinkGoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LinkGoogle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"google"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GoogleLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkGoogle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"google"},"value":{"kind":"Variable","name":{"kind":"Name","value":"google"}}}]}]}}]} as unknown as DocumentNode<LinkGoogleMutation, LinkGoogleMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const UnlinkGoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlinkGoogle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlinkGoogle"}}]}}]} as unknown as DocumentNode<UnlinkGoogleMutation, UnlinkGoogleMutationVariables>;