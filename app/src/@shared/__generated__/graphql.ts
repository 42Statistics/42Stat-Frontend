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

export type Account = {
  __typename?: 'Account';
  linkedAccounts: Array<LinkableAccount>;
  userId: Scalars['Int'];
};

export type Character = {
  __typename?: 'Character';
  imgUrl: Scalars['String'];
  name: Scalars['String'];
  types: Array<CharacterType>;
};

export type CharacterType = {
  __typename?: 'CharacterType';
  color: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type Coalition = {
  __typename?: 'Coalition';
  color: Scalars['String'];
  coverUrl: Scalars['String'];
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
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
  pageInfo: CursorPageInfo;
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

export type GoogleLoginInput = {
  clientId: Scalars['String'];
  credential: Scalars['String'];
};

export type HomeCoalition = {
  __typename?: 'HomeCoalition';
  scoreRecordsPerCoalition: Array<ScoreRecordPerCoalition>;
  tigCountPerCoalitionByDateTemplate: IntPerCoalitionDateRanged;
  totalScoresPerCoalition: Array<IntPerCoalition>;
  winCountPerCoalition: Array<IntPerCoalition>;
};


export type HomeCoalitionTigCountPerCoalitionByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};

export type HomeEval = {
  __typename?: 'HomeEval';
  averageCommentLength: Scalars['Int'];
  averageFeedbackLength: Scalars['Int'];
  evalCountRecords: Array<IntRecord>;
  totalEvalCount: Scalars['Int'];
};


export type HomeEvalEvalCountRecordsArgs = {
  last: Scalars['Int'];
};

export type HomeTeam = {
  __typename?: 'HomeTeam';
  currRegisteredCountRanking: Array<ProjectRank>;
  recentExamResult: ExamResultDateRanged;
  teamCloseRecords: Array<IntRecord>;
};


export type HomeTeamCurrRegisteredCountRankingArgs = {
  limit?: Scalars['Int'];
};


export type HomeTeamRecentExamResultArgs = {
  skip?: Scalars['Int'];
};


export type HomeTeamTeamCloseRecordsArgs = {
  last: Scalars['Int'];
};

export type HomeUser = {
  __typename?: 'HomeUser';
  aliveUserCountRecords: Array<IntRecord>;
  averageDurationPerCircle: Array<IntPerCircle>;
  blackholedCountPerCircle: Array<IntPerCircle>;
  blackholedCountRecords: Array<IntRecord>;
  blackholedRate: Rate;
  correctionPointRanking: Array<UserRank>;
  memberRate: Rate;
  userCountPerLevel: Array<UserCountPerLevel>;
  walletRanking: Array<UserRank>;
};


export type HomeUserBlackholedCountRecordsArgs = {
  last: Scalars['Int'];
};


export type HomeUserCorrectionPointRankingArgs = {
  limit?: Scalars['Int'];
};


export type HomeUserWalletRankingArgs = {
  limit?: Scalars['Int'];
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

export type LeaderboardComment = {
  __typename?: 'LeaderboardComment';
  /** TOTAL 만 가능합니다 */
  byDateTemplate: LeaderboardElementDateRanged;
};


export type LeaderboardCommentByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
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
  /** TOTAL, CURR_MONTH, CURR_WEEK 만 가능합니다 */
  byDateTemplate: LeaderboardElementDateRanged;
};


export type LeaderboardEvalByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LeaderboardExp = {
  __typename?: 'LeaderboardExp';
  /** CURR_MONTH, CURR_WEEK 만 가능합니다 */
  byDateTemplate: LeaderboardElementDateRanged;
};


export type LeaderboardExpByDateTemplateArgs = {
  dateTemplate: DateTemplate;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type LeaderboardLevel = {
  __typename?: 'LeaderboardLevel';
  /** TOTAL 만 가능합니다 */
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

export type LinkableAccount = {
  __typename?: 'LinkableAccount';
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  linkedAt: Scalars['DateTime'];
  platform: Scalars['String'];
};

export type LoginNotLinked = {
  __typename?: 'LoginNotLinked';
  message: Scalars['String'];
};

export type LoginResult = LoginNotLinked | LoginSuccess;

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  accessToken: Scalars['String'];
  message: Scalars['String'];
  refreshToken: Scalars['String'];
  userId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAccount: Scalars['Int'];
  ftLogin: LoginSuccess;
  googleLogin: LoginResult;
  linkGoogle: Account;
  logout: Scalars['Int'];
  refreshToken: LoginSuccess;
  unlinkAccount: Account;
};


export type MutationFtLoginArgs = {
  ftCode: Scalars['String'];
};


export type MutationGoogleLoginArgs = {
  ftCode?: InputMaybe<Scalars['String']>;
  google: GoogleLoginInput;
};


export type MutationLinkGoogleArgs = {
  google: GoogleLoginInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationUnlinkAccountArgs = {
  targetPlatform: Scalars['String'];
};

export type MyInfo = {
  __typename?: 'MyInfo';
  blackholedAt?: Maybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  evalCountRank?: Maybe<Scalars['Int']>;
  experienceRank?: Maybe<Scalars['Int']>;
  isNewMember: Scalars['Boolean'];
  lastValidatedTeam?: Maybe<UserTeam>;
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
  countRecords: Array<IntRecord>;
  destinyRanking: Array<UserRank>;
  recentComment?: Maybe<Scalars['String']>;
  totalCount: Scalars['Int'];
  totalDuration: Scalars['Int'];
  userProfile: UserProfile;
};


export type PersonalEvalCountRecordsArgs = {
  last: Scalars['Int'];
};


export type PersonalEvalDestinyRankingArgs = {
  limit?: Scalars['Int'];
};

export type PersonalGeneral = {
  __typename?: 'PersonalGeneral';
  beginAt: Scalars['DateTime'];
  blackholedAt?: Maybe<Scalars['DateTime']>;
  character?: Maybe<Character>;
  logtimeRecords: Array<IntRecord>;
  preferredClusterByDateTemplate: PreferredClusterDateRanged;
  preferredTimeByDateTemplate: PreferredTimeDateRanged;
  promoLevelRecords: Array<LevelRecord>;
  promoMemberLevelRecords: Array<LevelRecord>;
  scoreInfo: UserScoreInfo;
  teamInfo: UserTeamInfo;
  userLevelRecords: Array<LevelRecord>;
  userProfile: UserProfile;
  wallet: Scalars['Int'];
};


export type PersonalGeneralLogtimeRecordsArgs = {
  last: Scalars['Int'];
};


export type PersonalGeneralPreferredClusterByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};


export type PersonalGeneralPreferredTimeByDateTemplateArgs = {
  dateTemplate: DateTemplate;
};

export type PersonalVersus = {
  __typename?: 'PersonalVersus';
  currMonthEvalCountRankWithTotal: UserRankWithTotal;
  currMonthExpIncreamentRankWithTotal: UserRankWithTotal;
  currMonthScoreRankWithTotal: UserRankWithTotal;
  levelRankWithTotal: UserRankWithTotal;
  totalEvalCountRankWithTotal: UserRankWithTotal;
  totalLogtime: Scalars['Int'];
  totalScoreRankWithTotal: UserRankWithTotal;
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
  circle?: Maybe<Scalars['Int']>;
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
  pdfUrl?: Maybe<Scalars['String']>;
  skills: Array<Scalars['String']>;
  url: Scalars['String'];
  validatedRate: Rate;
};

export type ProjectPreview = {
  __typename?: 'ProjectPreview';
  circle?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  pdfUrl?: Maybe<Scalars['String']>;
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
  getEvalLogs: EvalLogsPaginated;
  getHomeCoalition: HomeCoalition;
  getHomeEval: HomeEval;
  getHomeTeam: HomeTeam;
  getHomeUser: HomeUser;
  getLanding: Landing;
  getLeaderboardComment: LeaderboardComment;
  getLeaderboardEvalCount: LeaderboardEval;
  getLeaderboardExpIncrement: LeaderboardExp;
  getLeaderboardLevel: LeaderboardLevel;
  getLeaderboardScore: LeaderboardScore;
  getMyInfo?: Maybe<MyInfo>;
  getPersonalEval: PersonalEval;
  getPersonalGeneral: PersonalGeneral;
  getPersonalVersus?: Maybe<PersonalVersus>;
  getProjectInfo: ProjectInfo;
  getSetting: Setting;
  getSpotlight: Spotlight;
  getTeamInfo: TeamInfo;
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


export type QueryGetPersonalVersusArgs = {
  login?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProjectInfoArgs = {
  projectName?: Scalars['String'];
};


export type QueryGetSpotlightArgs = {
  input: Scalars['String'];
  limit?: Scalars['Int'];
};


export type QueryGetTeamInfoArgs = {
  id: Scalars['Int'];
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
  account: Account;
};

export type Spotlight = {
  __typename?: 'Spotlight';
  projectPreviews: Array<ProjectPreview>;
  userPreviews: Array<UserPreview>;
};

export type TeamEvalLog = {
  __typename?: 'TeamEvalLog';
  correctedsReview?: Maybe<EvalReview>;
  correctorReview: EvalReview;
  header: TeamEvalLogHeader;
  id: Scalars['Int'];
};

export type TeamEvalLogHeader = {
  __typename?: 'TeamEvalLogHeader';
  beginAt: Scalars['DateTime'];
  corrector: UserPreview;
  flag: Flag;
};

export type TeamInfo = {
  __typename?: 'TeamInfo';
  closedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  evalLogs: Array<TeamEvalLog>;
  finalMark?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  lastEventTime: Scalars['DateTime'];
  lockedAt?: Maybe<Scalars['DateTime']>;
  /** 기계 채점 결과 */
  moulinette?: Maybe<TeamUpload>;
  name: Scalars['String'];
  projectPreview: ProjectPreview;
  status: TeamStatus;
  url: Scalars['String'];
  users: Array<TeamUserPreview>;
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

export type TeamUpload = {
  __typename?: 'TeamUpload';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  finalMark: Scalars['Int'];
  id: Scalars['Int'];
};

export type TeamUserPreview = {
  __typename?: 'TeamUserPreview';
  id: Scalars['Int'];
  imgUrl?: Maybe<Scalars['String']>;
  isLeader: Scalars['Boolean'];
  login: Scalars['String'];
  occurrence: Scalars['Int'];
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

export type UserProfile = {
  __typename?: 'UserProfile';
  coalition?: Maybe<Coalition>;
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

export type UserRankWithTotal = {
  __typename?: 'UserRankWithTotal';
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
  rankInCoalition?: Maybe<Scalars['Int']>;
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

export type UserTeamInfo = {
  __typename?: 'UserTeamInfo';
  lastPassed?: Maybe<UserTeam>;
  lastRegistered?: Maybe<UserTeam>;
  teams: Array<UserTeam>;
};

export type UserTitle = {
  __typename?: 'UserTitle';
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  selected: Scalars['Boolean'];
  titleId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type GetSpotlightQueryVariables = Exact<{
  input: Scalars['String'];
  limit: Scalars['Int'];
}>;


export type GetSpotlightQuery = { __typename?: 'Query', getSpotlight: { __typename?: 'Spotlight', userPreviews: Array<{ __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }>, projectPreviews: Array<{ __typename?: 'ProjectPreview', id: number, name: string, url: string, circle?: number | null }> } };

export type GetMyPreviewQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyPreviewQuery = { __typename?: 'Query', getMyInfo?: { __typename?: 'MyInfo', displayname: string, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null };

export type GetNewAccessTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type GetNewAccessTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'LoginSuccess', message: string, accessToken: string, refreshToken: string, userId: number } };

export type GoogleLoginMutationVariables = Exact<{
  google: GoogleLoginInput;
  ftCode?: InputMaybe<Scalars['String']>;
}>;


export type GoogleLoginMutation = { __typename?: 'Mutation', googleLogin: { __typename: 'LoginNotLinked', message: string } | { __typename: 'LoginSuccess', message: string, accessToken: string, refreshToken: string, userId: number } };

export type CoalitionFieldsFragment = { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl: string, coverUrl: string, color: string, score: number, userId: number };

export type ProjectPreviewFieldsFragment = { __typename?: 'ProjectPreview', id: number, name: string, url: string, circle?: number | null };

export type TeamPreviewFieldsFragment = { __typename?: 'TeamPreview', id: number, name: string, url: string };

export type TeamUserPreviewFieldsFragment = { __typename?: 'TeamUserPreview', login: string, imgUrl?: string | null, occurrence: number, isLeader: boolean };

export type UserPreviewFieldsFragment = { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null };

export type UserProfileFieldsFragment = { __typename?: 'UserProfile', id: number, login: string, imgUrl?: string | null, grade: string, displayname: string, level: number, coalition?: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl: string, coverUrl: string, color: string, score: number, userId: number } | null, titles: Array<{ __typename?: 'UserTitle', titleId: number, name: string, selected: boolean, createdAt: string, updatedAt: string }> };

export type UserTeamFieldsFragment = { __typename?: 'UserTeam', id: number, name: string, occurrence: number, status: TeamStatus, lastEventTime: string, isValidated?: boolean | null, finalMark?: number | null, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string, circle?: number | null } };

export type GetEvalLogsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  corrector?: InputMaybe<Scalars['String']>;
  corrected?: InputMaybe<Scalars['String']>;
  projectName?: InputMaybe<Scalars['String']>;
  outstandingOnly?: InputMaybe<Scalars['Boolean']>;
  sortOrder?: InputMaybe<EvalLogSortOrder>;
}>;


export type GetEvalLogsQuery = { __typename?: 'Query', getEvalLogs: { __typename?: 'EvalLogsPaginated', edges: Array<{ __typename?: 'EvalLogEdge', cursor: string, node: { __typename?: 'EvalLog', id: number, header: { __typename?: 'EvalLogHeader', beginAt: string, corrector: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }, teamPreview: { __typename?: 'TeamPreview', id: number, name: string, url: string }, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string, circle?: number | null }, flag: { __typename?: 'Flag', id: number, name: string, isPositive: boolean } }, correctorReview: { __typename?: 'EvalReview', mark: number, review: string }, correctedsReview?: { __typename?: 'EvalReview', mark: number, review: string } | null } }>, pageInfo: { __typename?: 'CursorPageInfo', totalCount: number, hasNextPage: boolean, endCursor?: string | null } } };

export type FtLoginMutationVariables = Exact<{
  ftCode: Scalars['String'];
}>;


export type FtLoginMutation = { __typename?: 'Mutation', ftLogin: { __typename?: 'LoginSuccess', message: string, accessToken: string, refreshToken: string, userId: number } };

export type GetIndividualizedMessageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIndividualizedMessageQuery = { __typename?: 'Query', getMyInfo?: { __typename?: 'MyInfo', isNewMember: boolean, blackholedAt?: string | null, experienceRank?: number | null, scoreRank?: number | null, evalCountRank?: number | null, lastValidatedTeam?: { __typename?: 'UserTeam', status: TeamStatus, lastEventTime: string, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } } | null } | null };

export type GetTigCountPerCoalitionByDateTemplateQueryVariables = Exact<{
  dateTemplate: DateTemplate;
}>;


export type GetTigCountPerCoalitionByDateTemplateQuery = { __typename?: 'Query', getHomeCoalition: { __typename?: 'HomeCoalition', tigCountPerCoalitionByDateTemplate: { __typename?: 'IntPerCoalitionDateRanged', start: string, end: string, data: Array<{ __typename?: 'IntPerCoalition', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl: string, coverUrl: string, color: string, score: number, userId: number } }> } } };

export type GetScoreRecordsPerCoalitionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetScoreRecordsPerCoalitionQuery = { __typename?: 'Query', getHomeCoalition: { __typename?: 'HomeCoalition', scoreRecordsPerCoalition: Array<{ __typename?: 'ScoreRecordPerCoalition', coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl: string, coverUrl: string, color: string, score: number, userId: number }, records: Array<{ __typename?: 'IntRecord', at: string, value: number }> }> } };

export type GetTotalScoresPerCoalitionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalScoresPerCoalitionQuery = { __typename?: 'Query', getHomeCoalition: { __typename?: 'HomeCoalition', totalScoresPerCoalition: Array<{ __typename?: 'IntPerCoalition', value: number, coalition: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl: string, coverUrl: string, color: string, score: number, userId: number } }> } };

export type GetAverageCommentLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageCommentLengthQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', averageCommentLength: number } };

export type GetAverageFeedbackLengthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageFeedbackLengthQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', averageFeedbackLength: number } };

export type GetEvalCountRecordsQueryVariables = Exact<{
  last: Scalars['Int'];
}>;


export type GetEvalCountRecordsQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', evalCountRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }> } };

export type GetTotalEvalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalEvalCountQuery = { __typename?: 'Query', getHomeEval: { __typename?: 'HomeEval', totalEvalCount: number } };

export type GetCurrRegisteredCountRankingQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetCurrRegisteredCountRankingQuery = { __typename?: 'Query', getHomeTeam: { __typename?: 'HomeTeam', currRegisteredCountRanking: Array<{ __typename?: 'ProjectRank', rank: number, value: number, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string, circle?: number | null } }> } };

export type GetRecentExamResultQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentExamResultQuery = { __typename?: 'Query', getHomeTeam: { __typename?: 'HomeTeam', recentExamResult: { __typename?: 'ExamResultDateRanged', data: { __typename?: 'ExamResult', beginAt: string, location: string, resultPerRank: Array<{ __typename?: 'ResultPerRank', rank: number, rate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } }> } } } };

export type GetTeamCloseRecordsQueryVariables = Exact<{
  last: Scalars['Int'];
}>;


export type GetTeamCloseRecordsQuery = { __typename?: 'Query', getHomeTeam: { __typename?: 'HomeTeam', teamCloseRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }> } };

export type GetAliveUserCountRecordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAliveUserCountRecordsQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', aliveUserCountRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }> } };

export type GetAverageDurationPerCircleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageDurationPerCircleQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', averageDurationPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }> } };

export type GetBlackholedCountPerCircleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlackholedCountPerCircleQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', blackholedCountPerCircle: Array<{ __typename?: 'IntPerCircle', circle: number, value: number }> } };

export type GetBlackholedCountRecordsQueryVariables = Exact<{
  last: Scalars['Int'];
}>;


export type GetBlackholedCountRecordsQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', blackholedCountRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }> } };

export type GetBlackholedRateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlackholedRateQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', blackholedRate: { __typename?: 'Rate', fields: Array<{ __typename?: 'Pair', key: string, value: number }> } } };

export type GetCorrectionPointRankingQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetCorrectionPointRankingQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', correctionPointRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetMemberRateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMemberRateQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', memberRate: { __typename?: 'Rate', fields: Array<{ __typename?: 'Pair', key: string, value: number }> } } };

export type GetUserCountPerLevelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCountPerLevelQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', userCountPerLevel: Array<{ __typename?: 'UserCountPerLevel', level: number, value: number }> } };

export type GetWalletRankingQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetWalletRankingQuery = { __typename?: 'Query', getHomeUser: { __typename?: 'HomeUser', walletRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetLandingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLandingQuery = { __typename?: 'Query', getLanding: { __typename?: 'Landing', daysAfterBeginAt: number, aliveCount: number, blackholedCount: number, memberCount: number, evalCount: number, trendingProject: { __typename?: 'ProjectRank', rank: number, value: number, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string } } } };

export type GetLeaderboardCoalitionScoreQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardCoalitionScoreQuery = { __typename?: 'Query', getLeaderboardScore: { __typename?: 'LeaderboardScore', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } } } } };

export type GetLeaderboardCommentQueryVariables = Exact<{
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  dateTemplate: DateTemplate;
}>;


export type GetLeaderboardCommentQuery = { __typename?: 'Query', getLeaderboardComment: { __typename?: 'LeaderboardComment', byDateTemplate: { __typename?: 'LeaderboardElementDateRanged', start: string, end: string, data: { __typename?: 'LeaderboardElement', me?: { __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } } | null, totalRanking: { __typename?: 'UserRankingIndexPaginated', totalCount: number, pageSize: number, pageNumber: number, nodes: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } } } } };

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

export type GetPersonalEvalZeroCostByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetPersonalEvalZeroCostByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', correctionPoint: number, recentComment?: string | null } };

export type GetPersonalGeneralZeroCostByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetPersonalGeneralZeroCostByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', beginAt: string, blackholedAt?: string | null, wallet: number, teamInfo: { __typename?: 'UserTeamInfo', lastPassed?: { __typename?: 'UserTeam', id: number, name: string, occurrence: number, status: TeamStatus, lastEventTime: string, isValidated?: boolean | null, finalMark?: number | null, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string, circle?: number | null } } | null, lastRegistered?: { __typename?: 'UserTeam', id: number, name: string, occurrence: number, status: TeamStatus, lastEventTime: string, isValidated?: boolean | null, finalMark?: number | null, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string, circle?: number | null } } | null }, userProfile: { __typename?: 'UserProfile', coalition?: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl: string, coverUrl: string, color: string, score: number, userId: number } | null }, scoreInfo: { __typename?: 'UserScoreInfo', value: number, rankInCoalition?: number | null } } };

export type CoalitionScoreFragmentFragment = { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', coalition?: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl: string, coverUrl: string, color: string, score: number, userId: number } | null }, scoreInfo: { __typename?: 'UserScoreInfo', value: number, rankInCoalition?: number | null } };

export type GetUserProfileByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetUserProfileByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', userProfile: { __typename?: 'UserProfile', id: number, login: string, imgUrl?: string | null, grade: string, displayname: string, level: number, coalition?: { __typename?: 'Coalition', id: number, name: string, slug: string, imageUrl: string, coverUrl: string, color: string, score: number, userId: number } | null, titles: Array<{ __typename?: 'UserTitle', titleId: number, name: string, selected: boolean, createdAt: string, updatedAt: string }> } } };

export type GetVersusZeroCostQueryVariables = Exact<{
  login1: Scalars['String'];
  login2: Scalars['String'];
}>;


export type GetVersusZeroCostQuery = { __typename?: 'Query', data1: { __typename?: 'PersonalGeneral', beginAt: string, userProfile: { __typename?: 'UserProfile', level: number } }, data2: { __typename?: 'PersonalGeneral', beginAt: string, userProfile: { __typename?: 'UserProfile', level: number } } };

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

export type GetCountRecordsByLoginQueryVariables = Exact<{
  login: Scalars['String'];
  last: Scalars['Int'];
}>;


export type GetCountRecordsByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', countRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }> } };

export type GetDestinyRankingByLoginQueryVariables = Exact<{
  login: Scalars['String'];
  limit: Scalars['Int'];
}>;


export type GetDestinyRankingByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', destinyRanking: Array<{ __typename?: 'UserRank', value: number, rank: number, userPreview: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null } }> } };

export type GetTotalCountByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetTotalCountByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', totalCount: number } };

export type GetTotalDurationByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetTotalDurationByLoginQuery = { __typename?: 'Query', getPersonalEval: { __typename?: 'PersonalEval', totalDuration: number } };

export type GetCharacterByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetCharacterByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', character?: { __typename?: 'Character', name: string, imgUrl: string, types: Array<{ __typename?: 'CharacterType', name: string, description: string, color: string }> } | null } };

export type GetLevelRecordsByLoginQueryVariables = Exact<{
  login: Scalars['String'];
}>;


export type GetLevelRecordsByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', userLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }>, promoLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }>, promoMemberLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }> } };

export type GetLogtimeRecordsQueryVariables = Exact<{
  login: Scalars['String'];
  last: Scalars['Int'];
}>;


export type GetLogtimeRecordsQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', logtimeRecords: Array<{ __typename?: 'IntRecord', at: string, value: number }> } };

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


export type GetTeamInfoByLoginQuery = { __typename?: 'Query', getPersonalGeneral: { __typename?: 'PersonalGeneral', teamInfo: { __typename?: 'UserTeamInfo', teams: Array<{ __typename?: 'UserTeam', id: number, name: string, occurrence: number, status: TeamStatus, lastEventTime: string, isValidated?: boolean | null, finalMark?: number | null, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string, circle?: number | null } }> } } };

export type GetAverageCommentLengthVersusQueryVariables = Exact<{
  login1: Scalars['String'];
  login2: Scalars['String'];
}>;


export type GetAverageCommentLengthVersusQuery = { __typename?: 'Query', data1: { __typename?: 'PersonalEval', averageCommentLength: number }, data2: { __typename?: 'PersonalEval', averageCommentLength: number } };

export type GetAverageFinalMarkVersusQueryVariables = Exact<{
  login1: Scalars['String'];
  login2: Scalars['String'];
}>;


export type GetAverageFinalMarkVersusQuery = { __typename?: 'Query', data1: { __typename?: 'PersonalEval', averageFinalMark: number }, data2: { __typename?: 'PersonalEval', averageFinalMark: number } };

export type GetLevelRecordsVersusQueryVariables = Exact<{
  login1: Scalars['String'];
  login2: Scalars['String'];
}>;


export type GetLevelRecordsVersusQuery = { __typename?: 'Query', data1: { __typename?: 'PersonalGeneral', userLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }> }, data2: { __typename?: 'PersonalGeneral', userLevelRecords: Array<{ __typename?: 'LevelRecord', monthsPassed: number, level: number }> } };

export type GetRankingsVersusQueryVariables = Exact<{
  login1: Scalars['String'];
  login2: Scalars['String'];
}>;


export type GetRankingsVersusQuery = { __typename?: 'Query', data1?: { __typename?: 'PersonalVersus', levelRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, totalScoreRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, totalEvalCountRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, currMonthExpIncreamentRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, currMonthScoreRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, currMonthEvalCountRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number } } | null, data2?: { __typename?: 'PersonalVersus', levelRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, totalScoreRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, totalEvalCountRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, currMonthExpIncreamentRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, currMonthScoreRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number }, currMonthEvalCountRankWithTotal: { __typename?: 'UserRankWithTotal', rank: number, totalUserCount: number } } | null };

export type GetTotalEvalCountVersusQueryVariables = Exact<{
  login1: Scalars['String'];
  login2: Scalars['String'];
}>;


export type GetTotalEvalCountVersusQuery = { __typename?: 'Query', data1?: { __typename?: 'PersonalVersus', totalEvalCountRankWithTotal: { __typename?: 'UserRankWithTotal', value: number } } | null, data2?: { __typename?: 'PersonalVersus', totalEvalCountRankWithTotal: { __typename?: 'UserRankWithTotal', value: number } } | null };

export type GetTotalLogtimeVersusQueryVariables = Exact<{
  login1: Scalars['String'];
  login2: Scalars['String'];
}>;


export type GetTotalLogtimeVersusQuery = { __typename?: 'Query', data1?: { __typename?: 'PersonalVersus', totalLogtime: number } | null, data2?: { __typename?: 'PersonalVersus', totalLogtime: number } | null };

export type GetProjectExistsQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetProjectExistsQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', name: string } };

export type GetProjectInfoZeroCostByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetProjectInfoZeroCostByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', name: string, circle?: number | null, url: string, pdfUrl?: string | null, description: string, minUserCount: number, maxUserCount: number, estimateTime?: string | null, difficulty?: number | null, objectives: Array<string>, skills: Array<string> } };

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

export type GetValidatedRateByProjectNameQueryVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type GetValidatedRateByProjectNameQuery = { __typename?: 'Query', getProjectInfo: { __typename?: 'ProjectInfo', validatedRate: { __typename?: 'Rate', total: number, fields: Array<{ __typename?: 'Pair', key: string, value: number }> } } };

export type DeleteAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAccountMutation = { __typename?: 'Mutation', deleteAccount: number };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: number };

export type LinkGoogleMutationVariables = Exact<{
  google: GoogleLoginInput;
}>;


export type LinkGoogleMutation = { __typename?: 'Mutation', linkGoogle: { __typename?: 'Account', userId: number, linkedAccounts: Array<{ __typename?: 'LinkableAccount', platform: string, id: string, email?: string | null, linkedAt: string }> } };

export type UnlinkAccountMutationVariables = Exact<{
  targetPlatform: Scalars['String'];
}>;


export type UnlinkAccountMutation = { __typename?: 'Mutation', unlinkAccount: { __typename?: 'Account', userId: number, linkedAccounts: Array<{ __typename?: 'LinkableAccount', platform: string, id: string, email?: string | null, linkedAt: string }> } };

export type AccountFieldsFragment = { __typename?: 'Account', userId: number, linkedAccounts: Array<{ __typename?: 'LinkableAccount', platform: string, id: string, email?: string | null, linkedAt: string }> };

export type GetSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingQuery = { __typename?: 'Query', getSetting: { __typename?: 'Setting', account: { __typename?: 'Account', userId: number, linkedAccounts: Array<{ __typename?: 'LinkableAccount', platform: string, id: string, email?: string | null, linkedAt: string }> } } };

export type GetTeamInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTeamInfoQuery = { __typename?: 'Query', getTeamInfo: { __typename?: 'TeamInfo', id: number, name: string, url: string, finalMark?: number | null, status: TeamStatus, lastEventTime: string, users: Array<{ __typename?: 'TeamUserPreview', login: string, imgUrl?: string | null, occurrence: number, isLeader: boolean }>, moulinette?: { __typename?: 'TeamUpload', id: number, finalMark: number, comment: string, createdAt: string } | null, projectPreview: { __typename?: 'ProjectPreview', id: number, name: string, url: string, circle?: number | null }, evalLogs: Array<{ __typename?: 'TeamEvalLog', id: number, correctorReview: { __typename?: 'EvalReview', mark: number, review: string }, correctedsReview?: { __typename?: 'EvalReview', mark: number, review: string } | null, header: { __typename?: 'TeamEvalLogHeader', beginAt: string, corrector: { __typename?: 'UserPreview', id: number, login: string, imgUrl?: string | null }, flag: { __typename?: 'Flag', id: number, name: string, isPositive: boolean } } }> } };

export const TeamPreviewFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"teamPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeamPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<TeamPreviewFieldsFragment, unknown>;
export const TeamUserPreviewFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"teamUserPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeamUserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"isLeader"}}]}}]} as unknown as DocumentNode<TeamUserPreviewFieldsFragment, unknown>;
export const UserPreviewFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<UserPreviewFieldsFragment, unknown>;
export const CoalitionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Coalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<CoalitionFieldsFragment, unknown>;
export const UserProfileFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userProfileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}},{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"coalitionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"titleId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Coalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<UserProfileFieldsFragment, unknown>;
export const ProjectPreviewFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"circle"}}]}}]} as unknown as DocumentNode<ProjectPreviewFieldsFragment, unknown>;
export const UserTeamFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userTeamFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"circle"}}]}}]} as unknown as DocumentNode<UserTeamFieldsFragment, unknown>;
export const CoalitionScoreFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionScoreFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalGeneral"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"coalitionFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rankInCoalition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Coalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<CoalitionScoreFragmentFragment, unknown>;
export const AccountFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"linkedAt"}}]}}]}}]} as unknown as DocumentNode<AccountFieldsFragment, unknown>;
export const GetSpotlightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpotlight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSpotlight"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectPreviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectPreviewFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"circle"}}]}}]} as unknown as DocumentNode<GetSpotlightQuery, GetSpotlightQueryVariables>;
export const GetMyPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}}]}}]}}]} as unknown as DocumentNode<GetMyPreviewQuery, GetMyPreviewQueryVariables>;
export const GetNewAccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GetNewAccessToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetNewAccessTokenMutation, GetNewAccessTokenMutationVariables>;
export const GoogleLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"googleLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"google"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GoogleLoginInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ftCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"google"},"value":{"kind":"Variable","name":{"kind":"Name","value":"google"}}},{"kind":"Argument","name":{"kind":"Name","value":"ftCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ftCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoginSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoginNotLinked"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GoogleLoginMutation, GoogleLoginMutationVariables>;
export const GetEvalLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvalLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"corrector"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"corrected"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"outstandingOnly"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EvalLogSortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEvalLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"corrector"},"value":{"kind":"Variable","name":{"kind":"Name","value":"corrector"}}},{"kind":"Argument","name":{"kind":"Name","value":"corrected"},"value":{"kind":"Variable","name":{"kind":"Name","value":"corrected"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}},{"kind":"Argument","name":{"kind":"Name","value":"outstandingOnly"},"value":{"kind":"Variable","name":{"kind":"Name","value":"outstandingOnly"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"corrector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teamPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPositive"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"correctorReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}},{"kind":"Field","name":{"kind":"Name","value":"correctedsReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"teamPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeamPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"circle"}}]}}]} as unknown as DocumentNode<GetEvalLogsQuery, GetEvalLogsQueryVariables>;
export const FtLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ftLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ftCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ftLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ftCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ftCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<FtLoginMutation, FtLoginMutationVariables>;
export const GetIndividualizedMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIndividualizedMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastValidatedTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNewMember"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}},{"kind":"Field","name":{"kind":"Name","value":"experienceRank"}},{"kind":"Field","name":{"kind":"Name","value":"scoreRank"}},{"kind":"Field","name":{"kind":"Name","value":"evalCountRank"}}]}}]}}]} as unknown as DocumentNode<GetIndividualizedMessageQuery, GetIndividualizedMessageQueryVariables>;
export const GetTigCountPerCoalitionByDateTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTigCountPerCoalitionByDateTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tigCountPerCoalitionByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetTigCountPerCoalitionByDateTemplateQuery, GetTigCountPerCoalitionByDateTemplateQueryVariables>;
export const GetScoreRecordsPerCoalitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetScoreRecordsPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scoreRecordsPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"coalitionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Coalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<GetScoreRecordsPerCoalitionQuery, GetScoreRecordsPerCoalitionQueryVariables>;
export const GetTotalScoresPerCoalitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalScoresPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalScoresPerCoalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"coalitionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Coalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<GetTotalScoresPerCoalitionQuery, GetTotalScoresPerCoalitionQueryVariables>;
export const GetAverageCommentLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageCommentLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageCommentLengthQuery, GetAverageCommentLengthQueryVariables>;
export const GetAverageFeedbackLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageFeedbackLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageFeedbackLengthQuery, GetAverageFeedbackLengthQueryVariables>;
export const GetEvalCountRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvalCountRecords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evalCountRecords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetEvalCountRecordsQuery, GetEvalCountRecordsQueryVariables>;
export const GetTotalEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeEval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCount"}}]}}]}}]} as unknown as DocumentNode<GetTotalEvalCountQuery, GetTotalEvalCountQueryVariables>;
export const GetCurrRegisteredCountRankingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrRegisteredCountRanking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredCountRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"circle"}}]}}]} as unknown as DocumentNode<GetCurrRegisteredCountRankingQuery, GetCurrRegisteredCountRankingQueryVariables>;
export const GetRecentExamResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecentExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentExamResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resultPerRank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"rate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRecentExamResultQuery, GetRecentExamResultQueryVariables>;
export const GetTeamCloseRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamCloseRecords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamCloseRecords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamCloseRecordsQuery, GetTeamCloseRecordsQueryVariables>;
export const GetAliveUserCountRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAliveUserCountRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aliveUserCountRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAliveUserCountRecordsQuery, GetAliveUserCountRecordsQueryVariables>;
export const GetAverageDurationPerCircleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageDurationPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDurationPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAverageDurationPerCircleQuery, GetAverageDurationPerCircleQueryVariables>;
export const GetBlackholedCountPerCircleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlackholedCountPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedCountPerCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackholedCountPerCircleQuery, GetBlackholedCountPerCircleQueryVariables>;
export const GetBlackholedCountRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlackholedCountRecords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedCountRecords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackholedCountRecordsQuery, GetBlackholedCountRecordsQueryVariables>;
export const GetBlackholedRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlackholedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blackholedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBlackholedRateQuery, GetBlackholedRateQueryVariables>;
export const GetCorrectionPointRankingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCorrectionPointRanking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPointRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<GetCorrectionPointRankingQuery, GetCorrectionPointRankingQueryVariables>;
export const GetMemberRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMemberRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMemberRateQuery, GetMemberRateQueryVariables>;
export const GetUserCountPerLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserCountPerLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCountPerLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserCountPerLevelQuery, GetUserCountPerLevelQueryVariables>;
export const GetWalletRankingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWalletRanking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHomeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<GetWalletRankingQuery, GetWalletRankingQueryVariables>;
export const GetLandingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daysAfterBeginAt"}},{"kind":"Field","name":{"kind":"Name","value":"aliveCount"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedCount"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}},{"kind":"Field","name":{"kind":"Name","value":"evalCount"}},{"kind":"Field","name":{"kind":"Name","value":"trendingProject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetLandingQuery, GetLandingQueryVariables>;
export const GetLeaderboardCoalitionScoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardCoalitionScore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardScore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<GetLeaderboardCoalitionScoreQuery, GetLeaderboardCoalitionScoreQueryVariables>;
export const GetLeaderboardCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<GetLeaderboardCommentQuery, GetLeaderboardCommentQueryVariables>;
export const GetLeaderboardEvalCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardEvalCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardEvalCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<GetLeaderboardEvalCountQuery, GetLeaderboardEvalCountQueryVariables>;
export const GetLeaderboardExpIncrementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardExpIncrement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardExpIncrement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<GetLeaderboardExpIncrementQuery, GetLeaderboardExpIncrementQueryVariables>;
export const GetLeaderboardLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaderboardLevel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeaderboardLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"byDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRanking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<GetLeaderboardLevelQuery, GetLeaderboardLevelQueryVariables>;
export const GetPersonalEvalZeroCostByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonalEvalZeroCostByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctionPoint"}},{"kind":"Field","name":{"kind":"Name","value":"recentComment"}}]}}]}}]} as unknown as DocumentNode<GetPersonalEvalZeroCostByLoginQuery, GetPersonalEvalZeroCostByLoginQueryVariables>;
export const GetPersonalGeneralZeroCostByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonalGeneralZeroCostByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"blackholedAt"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"coalitionScoreFragment"}},{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastPassed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userTeamFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastRegistered"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userTeamFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"wallet"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Coalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"circle"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionScoreFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalGeneral"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"coalitionFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"scoreInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rankInCoalition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userTeamFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}}]}}]} as unknown as DocumentNode<GetPersonalGeneralZeroCostByLoginQuery, GetPersonalGeneralZeroCostByLoginQueryVariables>;
export const GetUserProfileByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfileByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userProfileFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"coalitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Coalition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userProfileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}},{"kind":"Field","name":{"kind":"Name","value":"coalition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"coalitionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"titles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"titleId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]} as unknown as DocumentNode<GetUserProfileByLoginQuery, GetUserProfileByLoginQueryVariables>;
export const GetVersusZeroCostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVersusZeroCost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data1"},"name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"data2"},"name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}}]}}]}}]} as unknown as DocumentNode<GetVersusZeroCostQuery, GetVersusZeroCostQueryVariables>;
export const GetAverageCommentLengthByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageCommentLengthByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageCommentLengthByLoginQuery, GetAverageCommentLengthByLoginQueryVariables>;
export const GetAverageDurationByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageDurationByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageDuration"}}]}}]}}]} as unknown as DocumentNode<GetAverageDurationByLoginQuery, GetAverageDurationByLoginQueryVariables>;
export const GetAverageFeedbackLengthByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageFeedbackLengthByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFeedbackLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageFeedbackLengthByLoginQuery, GetAverageFeedbackLengthByLoginQueryVariables>;
export const GetAverageFinalMarkByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageFinalMarkByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFinalMark"}}]}}]}}]} as unknown as DocumentNode<GetAverageFinalMarkByLoginQuery, GetAverageFinalMarkByLoginQueryVariables>;
export const GetCountRecordsByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountRecordsByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countRecords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetCountRecordsByLoginQuery, GetCountRecordsByLoginQueryVariables>;
export const GetDestinyRankingByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDestinyRankingByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destinyRanking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<GetDestinyRankingByLoginQuery, GetDestinyRankingByLoginQueryVariables>;
export const GetTotalCountByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalCountByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetTotalCountByLoginQuery, GetTotalCountByLoginQueryVariables>;
export const GetTotalDurationByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalDurationByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalDuration"}}]}}]}}]} as unknown as DocumentNode<GetTotalDurationByLoginQuery, GetTotalDurationByLoginQueryVariables>;
export const GetCharacterByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCharacterByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"character"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCharacterByLoginQuery, GetCharacterByLoginQueryVariables>;
export const GetLevelRecordsByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLevelRecordsByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promoLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promoMemberLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetLevelRecordsByLoginQuery, GetLevelRecordsByLoginQueryVariables>;
export const GetLogtimeRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLogtimeRecords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logtimeRecords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetLogtimeRecordsQuery, GetLogtimeRecordsQueryVariables>;
export const GetPreferredClusterByDateTemplateByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPreferredClusterByDateTemplateByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredClusterByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetPreferredClusterByDateTemplateByLoginQuery, GetPreferredClusterByDateTemplateByLoginQueryVariables>;
export const GetPrefferedTimeByDateTemplateByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPrefferedTimeByDateTemplateByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTemplate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preferredTimeByDateTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTemplate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateTemplate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"morning"}},{"kind":"Field","name":{"kind":"Name","value":"daytime"}},{"kind":"Field","name":{"kind":"Name","value":"evening"}},{"kind":"Field","name":{"kind":"Name","value":"night"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]} as unknown as DocumentNode<GetPrefferedTimeByDateTemplateByLoginQuery, GetPrefferedTimeByDateTemplateByLoginQueryVariables>;
export const GetTeamInfoByLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamInfoByLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userTeamFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"circle"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userTeamFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}}]}}]} as unknown as DocumentNode<GetTeamInfoByLoginQuery, GetTeamInfoByLoginQueryVariables>;
export const GetAverageCommentLengthVersusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageCommentLengthVersus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data1"},"name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"data2"},"name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageCommentLength"}}]}}]}}]} as unknown as DocumentNode<GetAverageCommentLengthVersusQuery, GetAverageCommentLengthVersusQueryVariables>;
export const GetAverageFinalMarkVersusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAverageFinalMarkVersus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data1"},"name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFinalMark"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"data2"},"name":{"kind":"Name","value":"getPersonalEval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageFinalMark"}}]}}]}}]} as unknown as DocumentNode<GetAverageFinalMarkVersusQuery, GetAverageFinalMarkVersusQueryVariables>;
export const GetLevelRecordsVersusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLevelRecordsVersus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data1"},"name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"data2"},"name":{"kind":"Name","value":"getPersonalGeneral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLevelRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monthsPassed"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<GetLevelRecordsVersusQuery, GetLevelRecordsVersusQueryVariables>;
export const GetRankingsVersusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRankingsVersus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data1"},"name":{"kind":"Name","value":"getPersonalVersus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalScoreRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalEvalCountRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currMonthExpIncreamentRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currMonthScoreRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currMonthEvalCountRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"data2"},"name":{"kind":"Name","value":"getPersonalVersus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levelRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalScoreRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalEvalCountRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currMonthExpIncreamentRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currMonthScoreRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currMonthEvalCountRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"totalUserCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetRankingsVersusQuery, GetRankingsVersusQueryVariables>;
export const GetTotalEvalCountVersusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalEvalCountVersus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data1"},"name":{"kind":"Name","value":"getPersonalVersus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCountRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"data2"},"name":{"kind":"Name","value":"getPersonalVersus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalEvalCountRankWithTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetTotalEvalCountVersusQuery, GetTotalEvalCountVersusQueryVariables>;
export const GetTotalLogtimeVersusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalLogtimeVersus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data1"},"name":{"kind":"Name","value":"getPersonalVersus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalLogtime"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"data2"},"name":{"kind":"Name","value":"getPersonalVersus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalLogtime"}}]}}]}}]} as unknown as DocumentNode<GetTotalLogtimeVersusQuery, GetTotalLogtimeVersusQueryVariables>;
export const GetProjectExistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectExists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetProjectExistsQuery, GetProjectExistsQueryVariables>;
export const GetProjectInfoZeroCostByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectInfoZeroCostByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"circle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"pdfUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minUserCount"}},{"kind":"Field","name":{"kind":"Name","value":"maxUserCount"}},{"kind":"Field","name":{"kind":"Name","value":"estimateTime"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}}]}}]}}]} as unknown as DocumentNode<GetProjectInfoZeroCostByProjectNameQuery, GetProjectInfoZeroCostByProjectNameQueryVariables>;
export const GetAveragePassFinalMarkByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAveragePassFinalMarkByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averagePassFinalMark"}}]}}]}}]} as unknown as DocumentNode<GetAveragePassFinalMarkByProjectNameQuery, GetAveragePassFinalMarkByProjectNameQueryVariables>;
export const GetClosedTeamCountByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClosedTeamCountByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"closedTeamCount"}}]}}]}}]} as unknown as DocumentNode<GetClosedTeamCountByProjectNameQuery, GetClosedTeamCountByProjectNameQueryVariables>;
export const GetCurrRegisteredTeamCountByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrRegisteredTeamCountByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currRegisteredTeamCount"}}]}}]}}]} as unknown as DocumentNode<GetCurrRegisteredTeamCountByProjectNameQuery, GetCurrRegisteredTeamCountByProjectNameQueryVariables>;
export const GetValidatedRateByProjectNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetValidatedRateByProjectName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validatedRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetValidatedRateByProjectNameQuery, GetValidatedRateByProjectNameQueryVariables>;
export const DeleteAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAccount"}}]}}]} as unknown as DocumentNode<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const LinkGoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LinkGoogle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"google"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GoogleLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkGoogle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"google"},"value":{"kind":"Variable","name":{"kind":"Name","value":"google"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"linkedAt"}}]}}]}}]}}]} as unknown as DocumentNode<LinkGoogleMutation, LinkGoogleMutationVariables>;
export const UnlinkAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlinkAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetPlatform"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlinkAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"targetPlatform"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetPlatform"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"linkedAt"}}]}}]}}]}}]} as unknown as DocumentNode<UnlinkAccountMutation, UnlinkAccountMutationVariables>;
export const GetSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"linkedAt"}}]}}]}}]} as unknown as DocumentNode<GetSettingQuery, GetSettingQueryVariables>;
export const GetTeamInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTeamInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamUserPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}},{"kind":"Field","name":{"kind":"Name","value":"moulinette"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"finalMark"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastEventTime"}},{"kind":"Field","name":{"kind":"Name","value":"projectPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"evalLogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"correctorReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}},{"kind":"Field","name":{"kind":"Name","value":"correctedsReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mark"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}},{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"corrector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userPreviewFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beginAt"}},{"kind":"Field","name":{"kind":"Name","value":"flag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPositive"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"teamUserPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeamUserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"occurrence"}},{"kind":"Field","name":{"kind":"Name","value":"isLeader"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"circle"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userPreviewFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserPreview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]} as unknown as DocumentNode<GetTeamInfoQuery, GetTeamInfoQueryVariables>;