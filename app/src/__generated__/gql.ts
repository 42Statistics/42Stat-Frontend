/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetCurrMonthBlackholedCnt {\n    getHomePage {\n      currMonthBlackholedCnt\n      lastMonthBlackholedCnt\n    }\n  }\n": types.GetCurrMonthBlackholedCntDocument,
    "\n  query GetCurrRegisteredCntRank {\n    getHomePage {\n      currRegisteredCntRank {\n        projectPreview {\n          name\n        }\n        value\n      }\n    }\n  }\n": types.GetCurrRegisteredCntRankDocument,
    "\n  query GetCurrWeekEvalCnt {\n    getHomePage {\n      currWeekEvalCnt\n      lastWeekEvalCnt\n    }\n  }\n": types.GetCurrWeekEvalCntDocument,
    "\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        rank\n        passCnt\n        totalCnt\n      }\n    }\n  }\n": types.GetLastExamResultDocument,
    "\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetLevelRankDocument,
    "\n  query GetMonthlyAccessTimeRank {\n    getHomePage {\n      monthlyAccessTimeRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetMonthlyAccessTimeRankDocument,
    "\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetMonthlyExpIncrementRankDocument,
    "\n  query GetTotalEvalCntRank {\n    getHomePage {\n      totalEvalCntRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetTotalEvalCntRankDocument,
    "\n  query getLastPass {\n    getPersonGeneralPage {\n      teamInfo {\n        lastPass\n      }\n    }\n  }\n": types.GetLastPassDocument,
    "\n  query getLastRegistered {\n    getPersonGeneralPage {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n": types.GetLastRegisteredDocument,
    "\n  query getLogtimeInfo {\n    getPersonGeneralPage {\n      logtimeInfo {\n        currMonthLogtime\n        lastMonthLogtime\n      }\n    }\n  }\n": types.GetLogtimeInfoDocument,
    "\n  query getPrefferedCluster {\n    getPersonGeneralPage {\n      logtimeInfo {\n        preferredCluster\n      }\n    }\n  }\n": types.GetPrefferedClusterDocument,
    "\n  query getPrefferedTime {\n    getPersonGeneralPage {\n      logtimeInfo {\n        preferredTime {\n          morning\n          daytime\n          evening\n          night\n        }\n      }\n    }\n  }\n": types.GetPrefferedTimeDocument,
    "\n  query getPersonalTotalEvalCnt {\n    getPersonGeneralPage {\n      evalUserInfo {\n        totalEvalCnt\n      }\n    }\n  }\n": types.GetPersonalTotalEvalCntDocument,
    "\n  query GetUserProfile {\n    getPersonGeneralPage {\n      userProfile {\n        id\n        login\n        grade\n        name\n        coalition {\n          id\n          name\n        }\n        imgUrl\n        titles {\n          id\n          name\n          isSelected\n        }\n        level\n        pooledAt\n        blackholedAt\n        wallet\n        correctionPoint\n        scoreInfo {\n          current\n          rankInCoalition\n          rankInTotal\n        }\n        levelRank\n      }\n    }\n  }\n": types.GetUserProfileDocument,
    "\n  query getActiveUserCntRecord {\n    getTotalPage {\n      activeUserCntRecords {\n        at\n        value\n      }\n    }\n  }\n": types.GetActiveUserCntRecordDocument,
    "\n  query getAverageCircleDuration {\n    getTotalPage {\n      averageCircleDurations {\n        circle\n        value\n      }\n    }\n  }\n": types.GetAverageCircleDurationDocument,
    "\n  query getAverageFeedbackLength {\n    getTotalPage {\n      averageFeedbackLength\n    }\n  }\n": types.GetAverageFeedbackLengthDocument,
    "\n  query getWhenGoBlackHole {\n    getTotalPage {\n      blackholedCntPerCircles {\n        circle\n        value\n      }\n    }\n  }\n": types.GetWhenGoBlackHoleDocument,
    "\n  query getCoalitionScoreRecord {\n    getTotalPage {\n      scoreRecords {\n        coalition {\n          id\n          name\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n": types.GetCoalitionScoreRecordDocument,
    "\n  query getCorrectionPointRank {\n    getTotalPage {\n      correctionPointRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetCorrectionPointRankDocument,
    "\n  query getEvalCntPerPoints {\n    getTotalPage {\n      evalCntPerPoints {\n        evalCnt\n        point\n      }\n    }\n  }\n": types.GetEvalCntPerPointsDocument,
    "\n  query getCoalitionScoreRank {\n    getTotalPage {\n      monthlyScoreRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetCoalitionScoreRankDocument,
    "\n  query GetProjectInfo($projectName: String!) {\n    getTotalPage {\n      projectInfo(projectName: $projectName) {\n        id\n        name\n        skills\n        averageDurationTime\n        averagePassFinalmark\n        totalCloseCnt\n        currRegisteredCnt\n        passPercentage\n        totalEvalCnt\n      }\n    }\n  }\n": types.GetProjectInfoDocument,
    "\n  query getTotalEvalCnt {\n    getTotalPage {\n      totalEvalCnt\n    }\n  }\n": types.GetTotalEvalCntDocument,
    "\n  query getUserCntPerLevels {\n    getTotalPage {\n      userCntPerLevels {\n        userCnt\n        level\n      }\n    }\n  }\n": types.GetUserCntPerLevelsDocument,
    "\n  query getUserCntPerPoints {\n    getTotalPage {\n      userCntPerPoints {\n        userCnt\n        point\n      }\n    }\n  }\n": types.GetUserCntPerPointsDocument,
    "\n  query getWalletRank {\n    getTotalPage {\n      walletRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetWalletRankDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrMonthBlackholedCnt {\n    getHomePage {\n      currMonthBlackholedCnt\n      lastMonthBlackholedCnt\n    }\n  }\n"): (typeof documents)["\n  query GetCurrMonthBlackholedCnt {\n    getHomePage {\n      currMonthBlackholedCnt\n      lastMonthBlackholedCnt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrRegisteredCntRank {\n    getHomePage {\n      currRegisteredCntRank {\n        projectPreview {\n          name\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrRegisteredCntRank {\n    getHomePage {\n      currRegisteredCntRank {\n        projectPreview {\n          name\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrWeekEvalCnt {\n    getHomePage {\n      currWeekEvalCnt\n      lastWeekEvalCnt\n    }\n  }\n"): (typeof documents)["\n  query GetCurrWeekEvalCnt {\n    getHomePage {\n      currWeekEvalCnt\n      lastWeekEvalCnt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        rank\n        passCnt\n        totalCnt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        rank\n        passCnt\n        totalCnt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMonthlyAccessTimeRank {\n    getHomePage {\n      monthlyAccessTimeRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMonthlyAccessTimeRank {\n    getHomePage {\n      monthlyAccessTimeRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTotalEvalCntRank {\n    getHomePage {\n      totalEvalCntRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTotalEvalCntRank {\n    getHomePage {\n      totalEvalCntRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLastPass {\n    getPersonGeneralPage {\n      teamInfo {\n        lastPass\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLastPass {\n    getPersonGeneralPage {\n      teamInfo {\n        lastPass\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLastRegistered {\n    getPersonGeneralPage {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLastRegistered {\n    getPersonGeneralPage {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLogtimeInfo {\n    getPersonGeneralPage {\n      logtimeInfo {\n        currMonthLogtime\n        lastMonthLogtime\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLogtimeInfo {\n    getPersonGeneralPage {\n      logtimeInfo {\n        currMonthLogtime\n        lastMonthLogtime\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPrefferedCluster {\n    getPersonGeneralPage {\n      logtimeInfo {\n        preferredCluster\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPrefferedCluster {\n    getPersonGeneralPage {\n      logtimeInfo {\n        preferredCluster\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPrefferedTime {\n    getPersonGeneralPage {\n      logtimeInfo {\n        preferredTime {\n          morning\n          daytime\n          evening\n          night\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPrefferedTime {\n    getPersonGeneralPage {\n      logtimeInfo {\n        preferredTime {\n          morning\n          daytime\n          evening\n          night\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPersonalTotalEvalCnt {\n    getPersonGeneralPage {\n      evalUserInfo {\n        totalEvalCnt\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPersonalTotalEvalCnt {\n    getPersonGeneralPage {\n      evalUserInfo {\n        totalEvalCnt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserProfile {\n    getPersonGeneralPage {\n      userProfile {\n        id\n        login\n        grade\n        name\n        coalition {\n          id\n          name\n        }\n        imgUrl\n        titles {\n          id\n          name\n          isSelected\n        }\n        level\n        pooledAt\n        blackholedAt\n        wallet\n        correctionPoint\n        scoreInfo {\n          current\n          rankInCoalition\n          rankInTotal\n        }\n        levelRank\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserProfile {\n    getPersonGeneralPage {\n      userProfile {\n        id\n        login\n        grade\n        name\n        coalition {\n          id\n          name\n        }\n        imgUrl\n        titles {\n          id\n          name\n          isSelected\n        }\n        level\n        pooledAt\n        blackholedAt\n        wallet\n        correctionPoint\n        scoreInfo {\n          current\n          rankInCoalition\n          rankInTotal\n        }\n        levelRank\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getActiveUserCntRecord {\n    getTotalPage {\n      activeUserCntRecords {\n        at\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getActiveUserCntRecord {\n    getTotalPage {\n      activeUserCntRecords {\n        at\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAverageCircleDuration {\n    getTotalPage {\n      averageCircleDurations {\n        circle\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAverageCircleDuration {\n    getTotalPage {\n      averageCircleDurations {\n        circle\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAverageFeedbackLength {\n    getTotalPage {\n      averageFeedbackLength\n    }\n  }\n"): (typeof documents)["\n  query getAverageFeedbackLength {\n    getTotalPage {\n      averageFeedbackLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getWhenGoBlackHole {\n    getTotalPage {\n      blackholedCntPerCircles {\n        circle\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getWhenGoBlackHole {\n    getTotalPage {\n      blackholedCntPerCircles {\n        circle\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCoalitionScoreRecord {\n    getTotalPage {\n      scoreRecords {\n        coalition {\n          id\n          name\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCoalitionScoreRecord {\n    getTotalPage {\n      scoreRecords {\n        coalition {\n          id\n          name\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCorrectionPointRank {\n    getTotalPage {\n      correctionPointRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCorrectionPointRank {\n    getTotalPage {\n      correctionPointRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getEvalCntPerPoints {\n    getTotalPage {\n      evalCntPerPoints {\n        evalCnt\n        point\n      }\n    }\n  }\n"): (typeof documents)["\n  query getEvalCntPerPoints {\n    getTotalPage {\n      evalCntPerPoints {\n        evalCnt\n        point\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCoalitionScoreRank {\n    getTotalPage {\n      monthlyScoreRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCoalitionScoreRank {\n    getTotalPage {\n      monthlyScoreRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProjectInfo($projectName: String!) {\n    getTotalPage {\n      projectInfo(projectName: $projectName) {\n        id\n        name\n        skills\n        averageDurationTime\n        averagePassFinalmark\n        totalCloseCnt\n        currRegisteredCnt\n        passPercentage\n        totalEvalCnt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProjectInfo($projectName: String!) {\n    getTotalPage {\n      projectInfo(projectName: $projectName) {\n        id\n        name\n        skills\n        averageDurationTime\n        averagePassFinalmark\n        totalCloseCnt\n        currRegisteredCnt\n        passPercentage\n        totalEvalCnt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTotalEvalCnt {\n    getTotalPage {\n      totalEvalCnt\n    }\n  }\n"): (typeof documents)["\n  query getTotalEvalCnt {\n    getTotalPage {\n      totalEvalCnt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUserCntPerLevels {\n    getTotalPage {\n      userCntPerLevels {\n        userCnt\n        level\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUserCntPerLevels {\n    getTotalPage {\n      userCntPerLevels {\n        userCnt\n        level\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUserCntPerPoints {\n    getTotalPage {\n      userCntPerPoints {\n        userCnt\n        point\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUserCntPerPoints {\n    getTotalPage {\n      userCntPerPoints {\n        userCnt\n        point\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getWalletRank {\n    getTotalPage {\n      walletRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getWalletRank {\n    getTotalPage {\n      walletRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;