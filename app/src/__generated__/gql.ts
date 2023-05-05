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
    "\n  query FindProjectPreview($name: String!) {\n    findProjectPreview(name: $name) {\n      id\n      name\n      url\n    }\n  }\n": types.FindProjectPreviewDocument,
    "\n  query GetEvalLogs(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $projectName: String!\n    $outstandingOnly: Boolean!\n    $corrector: String\n    $corrected: String\n  ) {\n    getEvalLogs(\n      pageSize: $pageSize\n      pageNumber: $pageNumber\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      corrector: $corrector\n      corrected: $corrected\n    ) {\n      nodes {\n        header {\n          corrector {\n            id\n            login\n            imgUrl\n          }\n          teamPreview {\n            id\n            name\n            url\n          }\n          beginAt\n          projectPreview {\n            id\n            name\n            url\n          }\n          flag {\n            id\n            name\n            isPositive\n          }\n        }\n        correctorReview {\n          mark\n          review\n        }\n        correctedsReview {\n          mark\n          review\n        }\n      }\n      totalCount\n      pageSize\n      pageNumber\n    }\n  }\n": types.GetEvalLogsDocument,
    "\n  query getCorrectionPointRank {\n    getTotalPage {\n      correctionPointRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetCorrectionPointRankDocument,
    "\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetLevelRankDocument,
    "\n  query GetMonthlyAccessTimeRank {\n    getHomePage {\n      monthlyAccessTimeRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetMonthlyAccessTimeRankDocument,
    "\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetMonthlyExpIncrementRankDocument,
    "\n  query getCoalitionScoreRank {\n    getTotalPage {\n      monthlyScoreRanks {\n        data {\n          userPreview {\n            id\n            login\n            imgUrl\n          }\n          value\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetCoalitionScoreRankDocument,
    "\n  query GetTotalEvalCntRank {\n    getHomePage {\n      totalEvalCntRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetTotalEvalCntRankDocument,
    "\n  query getWalletRank {\n    getTotalPage {\n      walletRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetWalletRankDocument,
    "\n  query getPersonalAverageCommentLength($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageCommentLength\n    }\n  }\n": types.GetPersonalAverageCommentLengthDocument,
    "\n  query getAverageDuration($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageDuration\n    }\n  }\n": types.GetAverageDurationDocument,
    "\n  query getPersonalAverageFeedbackLength($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageFeedbackLength\n    }\n  }\n": types.GetPersonalAverageFeedbackLengthDocument,
    "\n  query getAverageFinalMark($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageFinalMark\n    }\n  }\n": types.GetAverageFinalMarkDocument,
    "\n  query getMonthlyEvalCnt($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      currMonthCount {\n        data\n        from\n        to\n      }\n      lastMonthCount {\n        data\n        from\n        to\n      }\n    }\n  }\n": types.GetMonthlyEvalCntDocument,
    "\n  query getPersonalTotalEvalCnt($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      totalCount\n    }\n  }\n": types.GetPersonalTotalEvalCntDocument,
    "\n  query getLastPass {\n    getPersonGeneralPage {\n      teamInfo {\n        lastPass\n      }\n    }\n  }\n": types.GetLastPassDocument,
    "\n  query getLastRegistered {\n    getPersonGeneralPage {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n": types.GetLastRegisteredDocument,
    "\n  query getLevelGraph {\n    getPersonGeneralPage {\n      levelGraphs {\n        data {\n          date\n          userLevel\n          averageLevel\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetLevelGraphDocument,
    "\n  query getLogtimeInfo {\n    getPersonGeneralPage {\n      logtimeInfo {\n        data {\n          currMonthLogtime\n          lastMonthLogtime\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n          preferredCluster\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetLogtimeInfoDocument,
    "\n  query getPrefferedCluster {\n    getPersonGeneralPage {\n      logtimeInfo {\n        data {\n          preferredCluster\n        }\n      }\n    }\n  }\n": types.GetPrefferedClusterDocument,
    "\n  query getPrefferedTime {\n    getPersonGeneralPage {\n      logtimeInfo {\n        data {\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n        }\n      }\n    }\n  }\n": types.GetPrefferedTimeDocument,
    "\n  query getTeamInfo {\n    getPersonGeneralPage {\n      teamInfo {\n        teams {\n          id\n          name\n          occurrence\n          closedAt\n          firstCreatedAt\n          finalMark\n          isValidated\n        }\n      }\n    }\n  }\n": types.GetTeamInfoDocument,
    "\n  query GetUserProfile {\n    getPersonGeneralPage {\n      userProfile {\n        id\n        login\n        grade\n        name\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        imgUrl\n        titles {\n          id\n          name\n          isSelected\n        }\n        level\n        pooledAt\n        blackholedAt\n        wallet\n        correctionPoint\n        scoreInfo {\n          value\n          rankInCoalition\n          rankInTotal\n        }\n        levelRank\n      }\n    }\n  }\n": types.GetUserProfileDocument,
    "\n  query getActiveUserCntRecord {\n    getTotalPage {\n      activeUserCntRecords {\n        at\n        value\n      }\n    }\n  }\n": types.GetActiveUserCntRecordDocument,
    "\n  query getAverageCircleDuration {\n    getTotalPage {\n      averageCircleDurations {\n        circle\n        value\n      }\n    }\n  }\n": types.GetAverageCircleDurationDocument,
    "\n  query getAverageCommentLength {\n    getTotalPage {\n      averageCommentLength\n    }\n  }\n": types.GetAverageCommentLengthDocument,
    "\n  query getAverageFeedbackLength {\n    getTotalPage {\n      averageFeedbackLength\n    }\n  }\n": types.GetAverageFeedbackLengthDocument,
    "\n  query getWhenGoBlackHole {\n    getTotalPage {\n      blackholedCntPerCircles {\n        circle\n        value\n      }\n    }\n  }\n": types.GetWhenGoBlackHoleDocument,
    "\n  query getCoalitionScoreRecord {\n    getTotalPage {\n      scoreRecords {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n": types.GetCoalitionScoreRecordDocument,
    "\n  query getCoalitionTotalScores {\n    getTotalPage {\n      totalScores {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          userId\n        }\n        value\n      }\n    }\n  }\n": types.GetCoalitionTotalScoresDocument,
    "\n  query GetCurrMonthBlackholedCnt {\n    getHomePage {\n      currMonthBlackholedCnt {\n        data\n        from\n        to\n      }\n      lastMonthBlackholedCnt {\n        data\n        from\n        to\n      }\n    }\n  }\n": types.GetCurrMonthBlackholedCntDocument,
    "\n  query GetCurrRegisteredCntRank {\n    getHomePage {\n      currRegisteredCntRank {\n        projectPreview {\n          name\n        }\n        value\n      }\n    }\n  }\n": types.GetCurrRegisteredCntRankDocument,
    "\n  query GetCurrWeekEvalCnt {\n    getHomePage {\n      currWeekEvalCnt {\n        data\n        from\n        to\n      }\n      lastWeekEvalCnt {\n        data\n        from\n        to\n      }\n    }\n  }\n": types.GetCurrWeekEvalCntDocument,
    "\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        data {\n          rank\n          passCnt\n          totalCnt\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetLastExamResultDocument,
    "\n  query GetProjectInfo($projectName: String!) {\n    getTotalPage {\n      projectInfo(projectName: $projectName) {\n        id\n        name\n        skills\n        averageDurationTime\n        averagePassFinalmark\n        totalCloseCnt\n        currRegisteredCnt\n        passPercentage\n        totalEvalCnt\n      }\n    }\n  }\n": types.GetProjectInfoDocument,
    "\n  query getTotalEvalCount {\n    getTotalPage {\n      totalEvalCount\n    }\n  }\n": types.GetTotalEvalCountDocument,
    "\n  query getUserCntPerLevels {\n    getTotalPage {\n      userCntPerLevels {\n        userCnt\n        level\n      }\n    }\n  }\n": types.GetUserCntPerLevelsDocument,
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
export function gql(source: "\n  query FindProjectPreview($name: String!) {\n    findProjectPreview(name: $name) {\n      id\n      name\n      url\n    }\n  }\n"): (typeof documents)["\n  query FindProjectPreview($name: String!) {\n    findProjectPreview(name: $name) {\n      id\n      name\n      url\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEvalLogs(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $projectName: String!\n    $outstandingOnly: Boolean!\n    $corrector: String\n    $corrected: String\n  ) {\n    getEvalLogs(\n      pageSize: $pageSize\n      pageNumber: $pageNumber\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      corrector: $corrector\n      corrected: $corrected\n    ) {\n      nodes {\n        header {\n          corrector {\n            id\n            login\n            imgUrl\n          }\n          teamPreview {\n            id\n            name\n            url\n          }\n          beginAt\n          projectPreview {\n            id\n            name\n            url\n          }\n          flag {\n            id\n            name\n            isPositive\n          }\n        }\n        correctorReview {\n          mark\n          review\n        }\n        correctedsReview {\n          mark\n          review\n        }\n      }\n      totalCount\n      pageSize\n      pageNumber\n    }\n  }\n"): (typeof documents)["\n  query GetEvalLogs(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $projectName: String!\n    $outstandingOnly: Boolean!\n    $corrector: String\n    $corrected: String\n  ) {\n    getEvalLogs(\n      pageSize: $pageSize\n      pageNumber: $pageNumber\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      corrector: $corrector\n      corrected: $corrected\n    ) {\n      nodes {\n        header {\n          corrector {\n            id\n            login\n            imgUrl\n          }\n          teamPreview {\n            id\n            name\n            url\n          }\n          beginAt\n          projectPreview {\n            id\n            name\n            url\n          }\n          flag {\n            id\n            name\n            isPositive\n          }\n        }\n        correctorReview {\n          mark\n          review\n        }\n        correctedsReview {\n          mark\n          review\n        }\n      }\n      totalCount\n      pageSize\n      pageNumber\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCorrectionPointRank {\n    getTotalPage {\n      correctionPointRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCorrectionPointRank {\n    getTotalPage {\n      correctionPointRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
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
export function gql(source: "\n  query getCoalitionScoreRank {\n    getTotalPage {\n      monthlyScoreRanks {\n        data {\n          userPreview {\n            id\n            login\n            imgUrl\n          }\n          value\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCoalitionScoreRank {\n    getTotalPage {\n      monthlyScoreRanks {\n        data {\n          userPreview {\n            id\n            login\n            imgUrl\n          }\n          value\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTotalEvalCntRank {\n    getHomePage {\n      totalEvalCntRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTotalEvalCntRank {\n    getHomePage {\n      totalEvalCntRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getWalletRank {\n    getTotalPage {\n      walletRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getWalletRank {\n    getTotalPage {\n      walletRanks {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPersonalAverageCommentLength($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageCommentLength\n    }\n  }\n"): (typeof documents)["\n  query getPersonalAverageCommentLength($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageCommentLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAverageDuration($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageDuration\n    }\n  }\n"): (typeof documents)["\n  query getAverageDuration($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageDuration\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPersonalAverageFeedbackLength($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageFeedbackLength\n    }\n  }\n"): (typeof documents)["\n  query getPersonalAverageFeedbackLength($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageFeedbackLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAverageFinalMark($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageFinalMark\n    }\n  }\n"): (typeof documents)["\n  query getAverageFinalMark($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      averageFinalMark\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getMonthlyEvalCnt($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      currMonthCount {\n        data\n        from\n        to\n      }\n      lastMonthCount {\n        data\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMonthlyEvalCnt($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      currMonthCount {\n        data\n        from\n        to\n      }\n      lastMonthCount {\n        data\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPersonalTotalEvalCnt($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query getPersonalTotalEvalCnt($uid: Int!) {\n    getPersonalEvalPage(uid: $uid) {\n      totalCount\n    }\n  }\n"];
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
export function gql(source: "\n  query getLevelGraph {\n    getPersonGeneralPage {\n      levelGraphs {\n        data {\n          date\n          userLevel\n          averageLevel\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLevelGraph {\n    getPersonGeneralPage {\n      levelGraphs {\n        data {\n          date\n          userLevel\n          averageLevel\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLogtimeInfo {\n    getPersonGeneralPage {\n      logtimeInfo {\n        data {\n          currMonthLogtime\n          lastMonthLogtime\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n          preferredCluster\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLogtimeInfo {\n    getPersonGeneralPage {\n      logtimeInfo {\n        data {\n          currMonthLogtime\n          lastMonthLogtime\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n          preferredCluster\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPrefferedCluster {\n    getPersonGeneralPage {\n      logtimeInfo {\n        data {\n          preferredCluster\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPrefferedCluster {\n    getPersonGeneralPage {\n      logtimeInfo {\n        data {\n          preferredCluster\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPrefferedTime {\n    getPersonGeneralPage {\n      logtimeInfo {\n        data {\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPrefferedTime {\n    getPersonGeneralPage {\n      logtimeInfo {\n        data {\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTeamInfo {\n    getPersonGeneralPage {\n      teamInfo {\n        teams {\n          id\n          name\n          occurrence\n          closedAt\n          firstCreatedAt\n          finalMark\n          isValidated\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTeamInfo {\n    getPersonGeneralPage {\n      teamInfo {\n        teams {\n          id\n          name\n          occurrence\n          closedAt\n          firstCreatedAt\n          finalMark\n          isValidated\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserProfile {\n    getPersonGeneralPage {\n      userProfile {\n        id\n        login\n        grade\n        name\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        imgUrl\n        titles {\n          id\n          name\n          isSelected\n        }\n        level\n        pooledAt\n        blackholedAt\n        wallet\n        correctionPoint\n        scoreInfo {\n          value\n          rankInCoalition\n          rankInTotal\n        }\n        levelRank\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserProfile {\n    getPersonGeneralPage {\n      userProfile {\n        id\n        login\n        grade\n        name\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        imgUrl\n        titles {\n          id\n          name\n          isSelected\n        }\n        level\n        pooledAt\n        blackholedAt\n        wallet\n        correctionPoint\n        scoreInfo {\n          value\n          rankInCoalition\n          rankInTotal\n        }\n        levelRank\n      }\n    }\n  }\n"];
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
export function gql(source: "\n  query getAverageCommentLength {\n    getTotalPage {\n      averageCommentLength\n    }\n  }\n"): (typeof documents)["\n  query getAverageCommentLength {\n    getTotalPage {\n      averageCommentLength\n    }\n  }\n"];
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
export function gql(source: "\n  query getCoalitionScoreRecord {\n    getTotalPage {\n      scoreRecords {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCoalitionScoreRecord {\n    getTotalPage {\n      scoreRecords {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCoalitionTotalScores {\n    getTotalPage {\n      totalScores {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          userId\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCoalitionTotalScores {\n    getTotalPage {\n      totalScores {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          userId\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrMonthBlackholedCnt {\n    getHomePage {\n      currMonthBlackholedCnt {\n        data\n        from\n        to\n      }\n      lastMonthBlackholedCnt {\n        data\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrMonthBlackholedCnt {\n    getHomePage {\n      currMonthBlackholedCnt {\n        data\n        from\n        to\n      }\n      lastMonthBlackholedCnt {\n        data\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrRegisteredCntRank {\n    getHomePage {\n      currRegisteredCntRank {\n        projectPreview {\n          name\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrRegisteredCntRank {\n    getHomePage {\n      currRegisteredCntRank {\n        projectPreview {\n          name\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrWeekEvalCnt {\n    getHomePage {\n      currWeekEvalCnt {\n        data\n        from\n        to\n      }\n      lastWeekEvalCnt {\n        data\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrWeekEvalCnt {\n    getHomePage {\n      currWeekEvalCnt {\n        data\n        from\n        to\n      }\n      lastWeekEvalCnt {\n        data\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        data {\n          rank\n          passCnt\n          totalCnt\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        data {\n          rank\n          passCnt\n          totalCnt\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProjectInfo($projectName: String!) {\n    getTotalPage {\n      projectInfo(projectName: $projectName) {\n        id\n        name\n        skills\n        averageDurationTime\n        averagePassFinalmark\n        totalCloseCnt\n        currRegisteredCnt\n        passPercentage\n        totalEvalCnt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProjectInfo($projectName: String!) {\n    getTotalPage {\n      projectInfo(projectName: $projectName) {\n        id\n        name\n        skills\n        averageDurationTime\n        averagePassFinalmark\n        totalCloseCnt\n        currRegisteredCnt\n        passPercentage\n        totalEvalCnt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTotalEvalCount {\n    getTotalPage {\n      totalEvalCount\n    }\n  }\n"): (typeof documents)["\n  query getTotalEvalCount {\n    getTotalPage {\n      totalEvalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUserCntPerLevels {\n    getTotalPage {\n      userCntPerLevels {\n        userCnt\n        level\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUserCntPerLevels {\n    getTotalPage {\n      userCntPerLevels {\n        userCnt\n        level\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;