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
    "\n  query FindUserPreview($login: String!) {\n    findUserPreview(login: $login) {\n      id\n      login\n      imgUrl\n    }\n  }\n": types.FindUserPreviewDocument,
    "\n  query GetEvalLogs(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $projectName: String!\n    $outstandingOnly: Boolean!\n    $corrector: String\n    $corrected: String\n  ) {\n    getEvalLogs(\n      pageSize: $pageSize\n      pageNumber: $pageNumber\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      corrector: $corrector\n      corrected: $corrected\n    ) {\n      nodes {\n        header {\n          corrector {\n            id\n            login\n            imgUrl\n          }\n          teamPreview {\n            id\n            name\n            url\n          }\n          beginAt\n          projectPreview {\n            id\n            name\n            url\n          }\n          flag {\n            id\n            name\n            isPositive\n          }\n        }\n        correctorReview {\n          mark\n          review\n        }\n        correctedsReview {\n          mark\n          review\n        }\n      }\n      totalCount\n      pageSize\n      pageNumber\n    }\n  }\n": types.GetEvalLogsDocument,
    "\n  query getActiveUserCountRecord {\n    getTotalPage {\n      activeUserCountRecords {\n        at\n        value\n      }\n    }\n  }\n": types.GetActiveUserCountRecordDocument,
    "\n  query getAverageCircleDuration {\n    getTotalPage {\n      averageCircleDurations {\n        circle\n        value\n      }\n    }\n  }\n": types.GetAverageCircleDurationDocument,
    "\n  query getAverageCommentLength {\n    getTotalPage {\n      averageCommentLength\n    }\n  }\n": types.GetAverageCommentLengthDocument,
    "\n  query getAverageFeedbackLength {\n    getTotalPage {\n      averageFeedbackLength\n    }\n  }\n": types.GetAverageFeedbackLengthDocument,
    "\n  query getBlackholedCountPerCircles {\n    getTotalPage {\n      blackholedCountPerCircles {\n        circle\n        value\n      }\n    }\n  }\n": types.GetBlackholedCountPerCirclesDocument,
    "\n  query getCoalitionScoreRecord {\n    getTotalPage {\n      scoreRecords {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n": types.GetCoalitionScoreRecordDocument,
    "\n  query getCoalitionTotalScores {\n    getTotalPage {\n      totalScores {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          userId\n        }\n        value\n      }\n    }\n  }\n": types.GetCoalitionTotalScoresDocument,
    "\n  query getCorrectionPointRank($limit: Int!) {\n    getTotalPage {\n      correctionPointRanks(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetCorrectionPointRankDocument,
    "\n  query GetCurrMonthBlackholedCount {\n    getHomePage {\n      currMonthBlackholedCount {\n        data\n        from\n        to\n      }\n      lastMonthBlackholedCount {\n        data\n        from\n        to\n      }\n    }\n  }\n": types.GetCurrMonthBlackholedCountDocument,
    "\n  query GetCurrRegisteredCountRank {\n    getHomePage {\n      currRegisteredCountRank {\n        projectPreview {\n          id\n          name\n        }\n        value\n      }\n    }\n  }\n": types.GetCurrRegisteredCountRankDocument,
    "\n  query GetCurrWeekEvalCount {\n    getHomePage {\n      currWeekEvalCount {\n        data\n        from\n        to\n      }\n      lastWeekEvalCount {\n        data\n        from\n        to\n      }\n    }\n  }\n": types.GetCurrWeekEvalCountDocument,
    "\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        data {\n          rank\n          passCount\n          totalCount\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetLastExamResultDocument,
    "\n  query getTotalEvalCount {\n    getTotalPage {\n      totalEvalCount\n    }\n  }\n": types.GetTotalEvalCountDocument,
    "\n  query getUserCountPerLevels {\n    getTotalPage {\n      userCountPerLevels {\n        userCount\n        level\n      }\n    }\n  }\n": types.GetUserCountPerLevelsDocument,
    "\n  query getWalletRank($limit: Int!) {\n    getTotalPage {\n      walletRanks(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetWalletRankDocument,
    "\n  query GetMonthlyCoalitionScoreRank {\n    getTotalPage {\n      monthlyScoreRanks {\n        data {\n          userPreview {\n            id\n            login\n            imgUrl\n          }\n          value\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetMonthlyCoalitionScoreRankDocument,
    "\n  query GetTotalEvalCountRank {\n    getHomePage {\n      totalEvalCountRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetTotalEvalCountRankDocument,
    "\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetMonthlyExpIncrementRankDocument,
    "\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n": types.GetLevelRankDocument,
    "\n  query getPersonalAverageCommentLength($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageCommentLength\n    }\n  }\n": types.GetPersonalAverageCommentLengthDocument,
    "\n  query getAverageDuration($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageDuration\n    }\n  }\n": types.GetAverageDurationDocument,
    "\n  query getPersonalAverageFeedbackLength($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageFeedbackLength\n    }\n  }\n": types.GetPersonalAverageFeedbackLengthDocument,
    "\n  query getAverageFinalMark($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageFinalMark\n    }\n  }\n": types.GetAverageFinalMarkDocument,
    "\n  query getCurrentCorrectionPoint($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        correctionPoint\n      }\n    }\n  }\n": types.GetCurrentCorrectionPointDocument,
    "\n  query getMonthlyEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      currMonthCount {\n        data\n        from\n        to\n      }\n      lastMonthCount {\n        data\n        from\n        to\n      }\n    }\n  }\n": types.GetMonthlyEvalCountDocument,
    "\n  query getPersonalTotalEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      totalCount\n    }\n  }\n": types.GetPersonalTotalEvalCountDocument,
    "\n  query getBeginAt($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        beginAt\n      }\n    }\n  }\n": types.GetBeginAtDocument,
    "\n  query getBlackholedAt($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        blackholedAt\n      }\n    }\n  }\n": types.GetBlackholedAtDocument,
    "\n  query getCurrentCoalitionScore($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        coalition {\n          score\n          imageUrl\n          color\n        }\n        scoreInfo {\n          rankInCoalition\n        }\n      }\n    }\n  }\n": types.GetCurrentCoalitionScoreDocument,
    "\n  query getCurrentWallet($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        wallet\n      }\n    }\n  }\n": types.GetCurrentWalletDocument,
    "\n  query getLastPass($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      teamInfo {\n        lastPass\n      }\n    }\n  }\n": types.GetLastPassDocument,
    "\n  query getLastRegistered($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n": types.GetLastRegisteredDocument,
    "\n  query getLevelGraph($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      levelGraphs {\n        data {\n          date\n          userLevel\n          averageLevel\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetLevelGraphDocument,
    "\n  query getLogtimeInfo($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      logtimeInfo {\n        data {\n          currMonthLogtime\n          lastMonthLogtime\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n          preferredCluster\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetLogtimeInfoDocument,
    "\n  query getPrefferedCluster($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      logtimeInfo {\n        data {\n          preferredCluster\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetPrefferedClusterDocument,
    "\n  query getPrefferedTime($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      logtimeInfo {\n        data {\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n        }\n        from\n        to\n      }\n    }\n  }\n": types.GetPrefferedTimeDocument,
    "\n  query getTeamInfo($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      teamInfo {\n        teams {\n          id\n          name\n          occurrence\n          closedAt\n          firstCreatedAt\n          finalMark\n          isValidated\n        }\n      }\n    }\n  }\n": types.GetTeamInfoDocument,
    "\n  query GetUserProfile($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        id\n        login\n        grade\n        name\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        imgUrl\n        titles {\n          id\n          name\n          isSelected\n        }\n        level\n      }\n    }\n  }\n": types.GetUserProfileDocument,
    "\n  query GetProjectInfo($projectName: String!) {\n    getTotalPage {\n      projectInfo(projectName: $projectName) {\n        id\n        name\n        skills\n        averageDurationTime\n        averagePassFinalmark\n        totalCloseCount\n        currRegisteredCount\n        passPercentage\n        totalEvalCount\n      }\n    }\n  }\n": types.GetProjectInfoDocument,
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
export function gql(source: "\n  query FindUserPreview($login: String!) {\n    findUserPreview(login: $login) {\n      id\n      login\n      imgUrl\n    }\n  }\n"): (typeof documents)["\n  query FindUserPreview($login: String!) {\n    findUserPreview(login: $login) {\n      id\n      login\n      imgUrl\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEvalLogs(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $projectName: String!\n    $outstandingOnly: Boolean!\n    $corrector: String\n    $corrected: String\n  ) {\n    getEvalLogs(\n      pageSize: $pageSize\n      pageNumber: $pageNumber\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      corrector: $corrector\n      corrected: $corrected\n    ) {\n      nodes {\n        header {\n          corrector {\n            id\n            login\n            imgUrl\n          }\n          teamPreview {\n            id\n            name\n            url\n          }\n          beginAt\n          projectPreview {\n            id\n            name\n            url\n          }\n          flag {\n            id\n            name\n            isPositive\n          }\n        }\n        correctorReview {\n          mark\n          review\n        }\n        correctedsReview {\n          mark\n          review\n        }\n      }\n      totalCount\n      pageSize\n      pageNumber\n    }\n  }\n"): (typeof documents)["\n  query GetEvalLogs(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $projectName: String!\n    $outstandingOnly: Boolean!\n    $corrector: String\n    $corrected: String\n  ) {\n    getEvalLogs(\n      pageSize: $pageSize\n      pageNumber: $pageNumber\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      corrector: $corrector\n      corrected: $corrected\n    ) {\n      nodes {\n        header {\n          corrector {\n            id\n            login\n            imgUrl\n          }\n          teamPreview {\n            id\n            name\n            url\n          }\n          beginAt\n          projectPreview {\n            id\n            name\n            url\n          }\n          flag {\n            id\n            name\n            isPositive\n          }\n        }\n        correctorReview {\n          mark\n          review\n        }\n        correctedsReview {\n          mark\n          review\n        }\n      }\n      totalCount\n      pageSize\n      pageNumber\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getActiveUserCountRecord {\n    getTotalPage {\n      activeUserCountRecords {\n        at\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getActiveUserCountRecord {\n    getTotalPage {\n      activeUserCountRecords {\n        at\n        value\n      }\n    }\n  }\n"];
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
export function gql(source: "\n  query getBlackholedCountPerCircles {\n    getTotalPage {\n      blackholedCountPerCircles {\n        circle\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getBlackholedCountPerCircles {\n    getTotalPage {\n      blackholedCountPerCircles {\n        circle\n        value\n      }\n    }\n  }\n"];
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
export function gql(source: "\n  query getCorrectionPointRank($limit: Int!) {\n    getTotalPage {\n      correctionPointRanks(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCorrectionPointRank($limit: Int!) {\n    getTotalPage {\n      correctionPointRanks(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrMonthBlackholedCount {\n    getHomePage {\n      currMonthBlackholedCount {\n        data\n        from\n        to\n      }\n      lastMonthBlackholedCount {\n        data\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrMonthBlackholedCount {\n    getHomePage {\n      currMonthBlackholedCount {\n        data\n        from\n        to\n      }\n      lastMonthBlackholedCount {\n        data\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrRegisteredCountRank {\n    getHomePage {\n      currRegisteredCountRank {\n        projectPreview {\n          id\n          name\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrRegisteredCountRank {\n    getHomePage {\n      currRegisteredCountRank {\n        projectPreview {\n          id\n          name\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrWeekEvalCount {\n    getHomePage {\n      currWeekEvalCount {\n        data\n        from\n        to\n      }\n      lastWeekEvalCount {\n        data\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrWeekEvalCount {\n    getHomePage {\n      currWeekEvalCount {\n        data\n        from\n        to\n      }\n      lastWeekEvalCount {\n        data\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        data {\n          rank\n          passCount\n          totalCount\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        data {\n          rank\n          passCount\n          totalCount\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTotalEvalCount {\n    getTotalPage {\n      totalEvalCount\n    }\n  }\n"): (typeof documents)["\n  query getTotalEvalCount {\n    getTotalPage {\n      totalEvalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUserCountPerLevels {\n    getTotalPage {\n      userCountPerLevels {\n        userCount\n        level\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUserCountPerLevels {\n    getTotalPage {\n      userCountPerLevels {\n        userCount\n        level\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getWalletRank($limit: Int!) {\n    getTotalPage {\n      walletRanks(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getWalletRank($limit: Int!) {\n    getTotalPage {\n      walletRanks(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMonthlyCoalitionScoreRank {\n    getTotalPage {\n      monthlyScoreRanks {\n        data {\n          userPreview {\n            id\n            login\n            imgUrl\n          }\n          value\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMonthlyCoalitionScoreRank {\n    getTotalPage {\n      monthlyScoreRanks {\n        data {\n          userPreview {\n            id\n            login\n            imgUrl\n          }\n          value\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTotalEvalCountRank {\n    getHomePage {\n      totalEvalCountRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTotalEvalCountRank {\n    getHomePage {\n      totalEvalCountRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPersonalAverageCommentLength($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageCommentLength\n    }\n  }\n"): (typeof documents)["\n  query getPersonalAverageCommentLength($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageCommentLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAverageDuration($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageDuration\n    }\n  }\n"): (typeof documents)["\n  query getAverageDuration($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageDuration\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPersonalAverageFeedbackLength($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageFeedbackLength\n    }\n  }\n"): (typeof documents)["\n  query getPersonalAverageFeedbackLength($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageFeedbackLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAverageFinalMark($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageFinalMark\n    }\n  }\n"): (typeof documents)["\n  query getAverageFinalMark($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageFinalMark\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCurrentCorrectionPoint($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        correctionPoint\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentCorrectionPoint($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        correctionPoint\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getMonthlyEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      currMonthCount {\n        data\n        from\n        to\n      }\n      lastMonthCount {\n        data\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMonthlyEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      currMonthCount {\n        data\n        from\n        to\n      }\n      lastMonthCount {\n        data\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPersonalTotalEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query getPersonalTotalEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getBeginAt($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        beginAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query getBeginAt($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        beginAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getBlackholedAt($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        blackholedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query getBlackholedAt($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        blackholedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCurrentCoalitionScore($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        coalition {\n          score\n          imageUrl\n          color\n        }\n        scoreInfo {\n          rankInCoalition\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentCoalitionScore($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        coalition {\n          score\n          imageUrl\n          color\n        }\n        scoreInfo {\n          rankInCoalition\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCurrentWallet($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        wallet\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentWallet($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        wallet\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLastPass($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      teamInfo {\n        lastPass\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLastPass($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      teamInfo {\n        lastPass\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLastRegistered($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLastRegistered($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLevelGraph($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      levelGraphs {\n        data {\n          date\n          userLevel\n          averageLevel\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLevelGraph($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      levelGraphs {\n        data {\n          date\n          userLevel\n          averageLevel\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLogtimeInfo($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      logtimeInfo {\n        data {\n          currMonthLogtime\n          lastMonthLogtime\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n          preferredCluster\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLogtimeInfo($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      logtimeInfo {\n        data {\n          currMonthLogtime\n          lastMonthLogtime\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n          preferredCluster\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPrefferedCluster($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      logtimeInfo {\n        data {\n          preferredCluster\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPrefferedCluster($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      logtimeInfo {\n        data {\n          preferredCluster\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPrefferedTime($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      logtimeInfo {\n        data {\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n        }\n        from\n        to\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPrefferedTime($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      logtimeInfo {\n        data {\n          preferredTime {\n            morning\n            daytime\n            evening\n            night\n          }\n        }\n        from\n        to\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTeamInfo($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      teamInfo {\n        teams {\n          id\n          name\n          occurrence\n          closedAt\n          firstCreatedAt\n          finalMark\n          isValidated\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTeamInfo($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      teamInfo {\n        teams {\n          id\n          name\n          occurrence\n          closedAt\n          firstCreatedAt\n          finalMark\n          isValidated\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserProfile($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        id\n        login\n        grade\n        name\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        imgUrl\n        titles {\n          id\n          name\n          isSelected\n        }\n        level\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserProfile($login: String!) {\n    getPersonGeneralPage(login: $login) {\n      userProfile {\n        id\n        login\n        grade\n        name\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        imgUrl\n        titles {\n          id\n          name\n          isSelected\n        }\n        level\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProjectInfo($projectName: String!) {\n    getTotalPage {\n      projectInfo(projectName: $projectName) {\n        id\n        name\n        skills\n        averageDurationTime\n        averagePassFinalmark\n        totalCloseCount\n        currRegisteredCount\n        passPercentage\n        totalEvalCount\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProjectInfo($projectName: String!) {\n    getTotalPage {\n      projectInfo(projectName: $projectName) {\n        id\n        name\n        skills\n        averageDurationTime\n        averagePassFinalmark\n        totalCloseCount\n        currRegisteredCount\n        passPercentage\n        totalEvalCount\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;