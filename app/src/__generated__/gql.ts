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
    "\n  query FindUserPreview($login: String!) {\n    findUserPreview(login: $login) {\n      id\n      login\n      imgUrl\n    }\n  }\n": types.FindUserPreviewDocument,
    "\n  query FindProjectPreview($name: String!) {\n    findProjectPreview(name: $name) {\n      id\n      name\n      url\n    }\n  }\n": types.FindProjectPreviewDocument,
    "\n  query GetEvalLogs(\n    $after: String\n    $first: Int!\n    $corrector: String\n    $corrected: String\n    $projectName: String\n    $outstandingOnly: Boolean\n    $sortOrder: EvalLogSortOrder!\n  ) {\n    getEvalLogs(\n      after: $after\n      first: $first\n      corrector: $corrector\n      corrected: $corrected\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      sortOrder: $sortOrder\n    ) {\n      edges {\n        cursor\n        node {\n          id\n          header {\n            corrector {\n              id\n              login\n              imgUrl\n            }\n            teamPreview {\n              id\n              name\n              url\n            }\n            beginAt\n            projectPreview {\n              id\n              name\n              url\n            }\n            flag {\n              id\n              name\n              isPositive\n            }\n          }\n          correctorReview {\n            mark\n            review\n          }\n          correctedsReview {\n            mark\n            review\n          }\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n": types.GetEvalLogsDocument,
    "\n  query getCoalitionScoreRecord {\n    getHomeCoalition {\n      scoreRecordsPerCoalition {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n": types.GetCoalitionScoreRecordDocument,
    "\n  query getCoalitionTotalScores {\n    getHomeCoalition {\n      totalScoresPerCoalition {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          userId\n        }\n        value\n      }\n    }\n  }\n": types.GetCoalitionTotalScoresDocument,
    "\n  query GetTigCountPerCoalition {\n    getHomeCoalition {\n      tigCountPerCoalition {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        value\n      }\n    }\n  }\n": types.GetTigCountPerCoalitionDocument,
    "\n  query getAverageCommentLength {\n    getHomeEval {\n      averageCommentLength\n    }\n  }\n": types.GetAverageCommentLengthDocument,
    "\n  query getAverageFeedbackLength {\n    getHomeEval {\n      averageFeedbackLength\n    }\n  }\n": types.GetAverageFeedbackLengthDocument,
    "\n  query GetCurrWeekAverageEvalCount {\n    getHomeEval {\n      evalCountByDateTemplate(dateTemplate: CURR_WEEK) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetCurrWeekAverageEvalCountDocument,
    "\n  query getTotalEvalCount {\n    getHomeEval {\n      totalEvalCount\n    }\n  }\n": types.GetTotalEvalCountDocument,
    "\n  query GetCurrRegisteredCountRank {\n    getHomeTeam {\n      currRegisteredCountRanking {\n        projectPreview {\n          id\n          name\n        }\n        value\n      }\n    }\n  }\n": types.GetCurrRegisteredCountRankDocument,
    "\n  query GetLastExamResult {\n    getHomeTeam {\n      lastExamResult {\n        data {\n          rank\n          passCount\n          totalCount\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetLastExamResultDocument,
    "\n  query getActiveUserCountRecords {\n    getHomeUser {\n      activeUserCountRecords {\n        at\n        value\n      }\n    }\n  }\n": types.GetActiveUserCountRecordsDocument,
    "\n  query getAverageDurationPerCircle {\n    getHomeUser {\n      averageDurationPerCircle {\n        circle\n        value\n      }\n    }\n  }\n": types.GetAverageDurationPerCircleDocument,
    "\n  query getBlackholedCountPerCircle {\n    getHomeUser {\n      blackholedCountPerCircle {\n        circle\n        value\n      }\n    }\n  }\n": types.GetBlackholedCountPerCircleDocument,
    "\n  query GetBlackHoledRate {\n    getHomeUser {\n      blackholedRate {\n        total\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n": types.GetBlackHoledRateDocument,
    "\n  query getCorrectionPointRanking($limit: Int!) {\n    getHomeUser {\n      correctionPointRanking(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n        rank\n      }\n    }\n  }\n": types.GetCorrectionPointRankingDocument,
    "\n  query GetBlackholedCountByDateTemplate(\n    $curr: DateTemplate!\n    $last: DateTemplate!\n  ) {\n    getHomeUser {\n      curr: blackholedCountByDateTemplate(dateTemplate: $curr) {\n        data\n        start\n        end\n      }\n      last: blackholedCountByDateTemplate(dateTemplate: $last) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetBlackholedCountByDateTemplateDocument,
    "\n  query GetEvalCountByDateTemplate($curr: DateTemplate!, $last: DateTemplate!) {\n    getHomeEval {\n      curr: evalCountByDateTemplate(dateTemplate: $curr) {\n        data\n        start\n        end\n      }\n      last: evalCountByDateTemplate(dateTemplate: $last) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetEvalCountByDateTemplateDocument,
    "\n  query GetMemberRate {\n    getHomeUser {\n      memberRate {\n        total\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n": types.GetMemberRateDocument,
    "\n  query getUserCountPerLevel {\n    getHomeUser {\n      userCountPerLevel {\n        userCount\n        level\n      }\n    }\n  }\n": types.GetUserCountPerLevelDocument,
    "\n  query getWalletRanking($limit: Int!) {\n    getHomeUser {\n      walletRanking(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n        rank\n      }\n    }\n  }\n": types.GetWalletRankingDocument,
    "\n  query GetLeaderboardScore(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardScore {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                id\n                login\n                imgUrl\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetLeaderboardScoreDocument,
    "\n  query GetLeaderboardEvalCount(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardEvalCount {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                id\n                login\n                imgUrl\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetLeaderboardEvalCountDocument,
    "\n  query GetLeaderboardExpIncrement(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardExpIncrement {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                id\n                login\n                imgUrl\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetLeaderboardExpIncrementDocument,
    "\n  query GetLeaderboardLevel($pageSize: Int!, $pageNumber: Int!) {\n    getLeaderboardLevel {\n      total(pageSize: $pageSize, pageNumber: $pageNumber) {\n        me {\n          userPreview {\n            id\n            login\n            imgUrl\n          }\n          value\n          rank\n        }\n        totalRanking {\n          nodes {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalCount\n          pageSize\n          pageNumber\n        }\n      }\n    }\n  }\n": types.GetLeaderboardLevelDocument,
    "\n  query getPersonalAverageCommentLength($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageCommentLength\n    }\n  }\n": types.GetPersonalAverageCommentLengthDocument,
    "\n  query getAverageDuration($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageDuration\n    }\n  }\n": types.GetAverageDurationDocument,
    "\n  query getPersonalAverageFeedbackLength($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageFeedbackLength\n    }\n  }\n": types.GetPersonalAverageFeedbackLengthDocument,
    "\n  query getAverageFinalMark($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      averageFinalMark\n    }\n  }\n": types.GetAverageFinalMarkDocument,
    "\n  query getCurrentCorrectionPoint($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      correctionPoint\n    }\n  }\n": types.GetCurrentCorrectionPointDocument,
    "\n  query getLatestComment($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      lastComment\n    }\n  }\n": types.GetLatestCommentDocument,
    "\n  query getMonthlyEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      currMonthCount: countByDateTemplate(dateTemplate: CURR_WEEK) {\n        data\n        start\n        end\n      }\n      lastMonthCount: countByDateTemplate(dateTemplate: LAST_WEEK) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetMonthlyEvalCountDocument,
    "\n  query getPersonalTotalEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      totalCount\n    }\n  }\n": types.GetPersonalTotalEvalCountDocument,
    "\n  query GetTotalEvalTime {\n    getPersonalEvalPage {\n      totalDuration\n    }\n  }\n": types.GetTotalEvalTimeDocument,
    "\n  query getBeginAt($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      beginAt\n    }\n  }\n": types.GetBeginAtDocument,
    "\n  query getBlackHoledAt($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      blackholedAt\n    }\n  }\n": types.GetBlackHoledAtDocument,
    "\n  query getCurrentCoalitionScore($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      userProfile {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n      }\n      scoreInfo {\n        value\n        rankInCoalition\n      }\n    }\n  }\n": types.GetCurrentCoalitionScoreDocument,
    "\n  query getCurrentWallet($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      wallet\n    }\n  }\n": types.GetCurrentWalletDocument,
    "\n  query getLastPass($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      teamInfo {\n        lastPassed\n      }\n    }\n  }\n": types.GetLastPassDocument,
    "\n  query getLastRegistered($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n": types.GetLastRegisteredDocument,
    "\n  query getLevelGraph($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      levelRecords {\n        after\n        userLevel\n        averageLevel\n      }\n    }\n  }\n": types.GetLevelGraphDocument,
    "\n  query getLogtimeInfo($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      currMonthLogtime: logtimeByDateTemplate(dateTemplate: CURR_MONTH) {\n        data\n        start\n        end\n      }\n      lastMonthLogtime: logtimeByDateTemplate(dateTemplate: LAST_MONTH) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetLogtimeInfoDocument,
    "\n  query getPrefferedCluster($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      preferredClusterByDateTemplate(dateTemplate: CURR_MONTH) {\n        data {\n          name\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetPrefferedClusterDocument,
    "\n  query getPrefferedTime($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      preferredTimeByDateTemplate(dateTemplate: CURR_MONTH) {\n        data {\n          total\n          morning\n          daytime\n          evening\n          night\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetPrefferedTimeDocument,
    "\n  query getCoalition($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      userProfile {\n        coalition {\n          name\n        }\n      }\n    }\n  }\n": types.GetCoalitionDocument,
    "\n  query getTeamInfo($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      teamInfo {\n        lastRegistered\n        lastPassed\n        teams {\n          id\n          name\n          occurrence\n          projectPreview {\n            id\n            name\n            url\n          }\n          status\n          lastEventTime\n          isValidated\n          finalMark\n        }\n      }\n    }\n  }\n": types.GetTeamInfoDocument,
    "\n  query GetUserProfile($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      userProfile {\n        id\n        login\n        imgUrl\n        grade\n        displayname\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        titles {\n          titleId\n          name\n          selected\n          createdAt\n          updatedAt\n        }\n        level\n      }\n    }\n  }\n": types.GetUserProfileDocument,
    "\n  query GetProjectInfo($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      id\n      name\n      skills\n      keywords\n      description\n      minUserCount\n      maxUserCount\n      duration\n      difficulty\n      currRegisteredTeamCount\n      closedTeamCount\n      averagePassFinalMark\n      evalInfo {\n        totalEvalCount\n        passCount\n        failCount\n      }\n    }\n  }\n": types.GetProjectInfoDocument,
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
export function gql(source: "\n  query FindUserPreview($login: String!) {\n    findUserPreview(login: $login) {\n      id\n      login\n      imgUrl\n    }\n  }\n"): (typeof documents)["\n  query FindUserPreview($login: String!) {\n    findUserPreview(login: $login) {\n      id\n      login\n      imgUrl\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindProjectPreview($name: String!) {\n    findProjectPreview(name: $name) {\n      id\n      name\n      url\n    }\n  }\n"): (typeof documents)["\n  query FindProjectPreview($name: String!) {\n    findProjectPreview(name: $name) {\n      id\n      name\n      url\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEvalLogs(\n    $after: String\n    $first: Int!\n    $corrector: String\n    $corrected: String\n    $projectName: String\n    $outstandingOnly: Boolean\n    $sortOrder: EvalLogSortOrder!\n  ) {\n    getEvalLogs(\n      after: $after\n      first: $first\n      corrector: $corrector\n      corrected: $corrected\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      sortOrder: $sortOrder\n    ) {\n      edges {\n        cursor\n        node {\n          id\n          header {\n            corrector {\n              id\n              login\n              imgUrl\n            }\n            teamPreview {\n              id\n              name\n              url\n            }\n            beginAt\n            projectPreview {\n              id\n              name\n              url\n            }\n            flag {\n              id\n              name\n              isPositive\n            }\n          }\n          correctorReview {\n            mark\n            review\n          }\n          correctedsReview {\n            mark\n            review\n          }\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEvalLogs(\n    $after: String\n    $first: Int!\n    $corrector: String\n    $corrected: String\n    $projectName: String\n    $outstandingOnly: Boolean\n    $sortOrder: EvalLogSortOrder!\n  ) {\n    getEvalLogs(\n      after: $after\n      first: $first\n      corrector: $corrector\n      corrected: $corrected\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      sortOrder: $sortOrder\n    ) {\n      edges {\n        cursor\n        node {\n          id\n          header {\n            corrector {\n              id\n              login\n              imgUrl\n            }\n            teamPreview {\n              id\n              name\n              url\n            }\n            beginAt\n            projectPreview {\n              id\n              name\n              url\n            }\n            flag {\n              id\n              name\n              isPositive\n            }\n          }\n          correctorReview {\n            mark\n            review\n          }\n          correctedsReview {\n            mark\n            review\n          }\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCoalitionScoreRecord {\n    getHomeCoalition {\n      scoreRecordsPerCoalition {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCoalitionScoreRecord {\n    getHomeCoalition {\n      scoreRecordsPerCoalition {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCoalitionTotalScores {\n    getHomeCoalition {\n      totalScoresPerCoalition {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          userId\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCoalitionTotalScores {\n    getHomeCoalition {\n      totalScoresPerCoalition {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          userId\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTigCountPerCoalition {\n    getHomeCoalition {\n      tigCountPerCoalition {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTigCountPerCoalition {\n    getHomeCoalition {\n      tigCountPerCoalition {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAverageCommentLength {\n    getHomeEval {\n      averageCommentLength\n    }\n  }\n"): (typeof documents)["\n  query getAverageCommentLength {\n    getHomeEval {\n      averageCommentLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAverageFeedbackLength {\n    getHomeEval {\n      averageFeedbackLength\n    }\n  }\n"): (typeof documents)["\n  query getAverageFeedbackLength {\n    getHomeEval {\n      averageFeedbackLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrWeekAverageEvalCount {\n    getHomeEval {\n      evalCountByDateTemplate(dateTemplate: CURR_WEEK) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrWeekAverageEvalCount {\n    getHomeEval {\n      evalCountByDateTemplate(dateTemplate: CURR_WEEK) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTotalEvalCount {\n    getHomeEval {\n      totalEvalCount\n    }\n  }\n"): (typeof documents)["\n  query getTotalEvalCount {\n    getHomeEval {\n      totalEvalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrRegisteredCountRank {\n    getHomeTeam {\n      currRegisteredCountRanking {\n        projectPreview {\n          id\n          name\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrRegisteredCountRank {\n    getHomeTeam {\n      currRegisteredCountRanking {\n        projectPreview {\n          id\n          name\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLastExamResult {\n    getHomeTeam {\n      lastExamResult {\n        data {\n          rank\n          passCount\n          totalCount\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLastExamResult {\n    getHomeTeam {\n      lastExamResult {\n        data {\n          rank\n          passCount\n          totalCount\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getActiveUserCountRecords {\n    getHomeUser {\n      activeUserCountRecords {\n        at\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getActiveUserCountRecords {\n    getHomeUser {\n      activeUserCountRecords {\n        at\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAverageDurationPerCircle {\n    getHomeUser {\n      averageDurationPerCircle {\n        circle\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAverageDurationPerCircle {\n    getHomeUser {\n      averageDurationPerCircle {\n        circle\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getBlackholedCountPerCircle {\n    getHomeUser {\n      blackholedCountPerCircle {\n        circle\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query getBlackholedCountPerCircle {\n    getHomeUser {\n      blackholedCountPerCircle {\n        circle\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBlackHoledRate {\n    getHomeUser {\n      blackholedRate {\n        total\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlackHoledRate {\n    getHomeUser {\n      blackholedRate {\n        total\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCorrectionPointRanking($limit: Int!) {\n    getHomeUser {\n      correctionPointRanking(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n        rank\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCorrectionPointRanking($limit: Int!) {\n    getHomeUser {\n      correctionPointRanking(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n        rank\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBlackholedCountByDateTemplate(\n    $curr: DateTemplate!\n    $last: DateTemplate!\n  ) {\n    getHomeUser {\n      curr: blackholedCountByDateTemplate(dateTemplate: $curr) {\n        data\n        start\n        end\n      }\n      last: blackholedCountByDateTemplate(dateTemplate: $last) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlackholedCountByDateTemplate(\n    $curr: DateTemplate!\n    $last: DateTemplate!\n  ) {\n    getHomeUser {\n      curr: blackholedCountByDateTemplate(dateTemplate: $curr) {\n        data\n        start\n        end\n      }\n      last: blackholedCountByDateTemplate(dateTemplate: $last) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEvalCountByDateTemplate($curr: DateTemplate!, $last: DateTemplate!) {\n    getHomeEval {\n      curr: evalCountByDateTemplate(dateTemplate: $curr) {\n        data\n        start\n        end\n      }\n      last: evalCountByDateTemplate(dateTemplate: $last) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEvalCountByDateTemplate($curr: DateTemplate!, $last: DateTemplate!) {\n    getHomeEval {\n      curr: evalCountByDateTemplate(dateTemplate: $curr) {\n        data\n        start\n        end\n      }\n      last: evalCountByDateTemplate(dateTemplate: $last) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMemberRate {\n    getHomeUser {\n      memberRate {\n        total\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMemberRate {\n    getHomeUser {\n      memberRate {\n        total\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUserCountPerLevel {\n    getHomeUser {\n      userCountPerLevel {\n        userCount\n        level\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUserCountPerLevel {\n    getHomeUser {\n      userCountPerLevel {\n        userCount\n        level\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getWalletRanking($limit: Int!) {\n    getHomeUser {\n      walletRanking(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n        rank\n      }\n    }\n  }\n"): (typeof documents)["\n  query getWalletRanking($limit: Int!) {\n    getHomeUser {\n      walletRanking(limit: $limit) {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n        rank\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLeaderboardScore(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardScore {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                id\n                login\n                imgUrl\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLeaderboardScore(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardScore {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                id\n                login\n                imgUrl\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLeaderboardEvalCount(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardEvalCount {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                id\n                login\n                imgUrl\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLeaderboardEvalCount(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardEvalCount {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                id\n                login\n                imgUrl\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLeaderboardExpIncrement(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardExpIncrement {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                id\n                login\n                imgUrl\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLeaderboardExpIncrement(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardExpIncrement {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                id\n                login\n                imgUrl\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLeaderboardLevel($pageSize: Int!, $pageNumber: Int!) {\n    getLeaderboardLevel {\n      total(pageSize: $pageSize, pageNumber: $pageNumber) {\n        me {\n          userPreview {\n            id\n            login\n            imgUrl\n          }\n          value\n          rank\n        }\n        totalRanking {\n          nodes {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalCount\n          pageSize\n          pageNumber\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLeaderboardLevel($pageSize: Int!, $pageNumber: Int!) {\n    getLeaderboardLevel {\n      total(pageSize: $pageSize, pageNumber: $pageNumber) {\n        me {\n          userPreview {\n            id\n            login\n            imgUrl\n          }\n          value\n          rank\n        }\n        totalRanking {\n          nodes {\n            userPreview {\n              id\n              login\n              imgUrl\n            }\n            value\n            rank\n          }\n          totalCount\n          pageSize\n          pageNumber\n        }\n      }\n    }\n  }\n"];
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
export function gql(source: "\n  query getCurrentCorrectionPoint($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      correctionPoint\n    }\n  }\n"): (typeof documents)["\n  query getCurrentCorrectionPoint($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      correctionPoint\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLatestComment($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      lastComment\n    }\n  }\n"): (typeof documents)["\n  query getLatestComment($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      lastComment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getMonthlyEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      currMonthCount: countByDateTemplate(dateTemplate: CURR_WEEK) {\n        data\n        start\n        end\n      }\n      lastMonthCount: countByDateTemplate(dateTemplate: LAST_WEEK) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMonthlyEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      currMonthCount: countByDateTemplate(dateTemplate: CURR_WEEK) {\n        data\n        start\n        end\n      }\n      lastMonthCount: countByDateTemplate(dateTemplate: LAST_WEEK) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPersonalTotalEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query getPersonalTotalEvalCount($login: String!) {\n    getPersonalEvalPage(login: $login) {\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTotalEvalTime {\n    getPersonalEvalPage {\n      totalDuration\n    }\n  }\n"): (typeof documents)["\n  query GetTotalEvalTime {\n    getPersonalEvalPage {\n      totalDuration\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getBeginAt($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      beginAt\n    }\n  }\n"): (typeof documents)["\n  query getBeginAt($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      beginAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getBlackHoledAt($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      blackholedAt\n    }\n  }\n"): (typeof documents)["\n  query getBlackHoledAt($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      blackholedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCurrentCoalitionScore($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      userProfile {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n      }\n      scoreInfo {\n        value\n        rankInCoalition\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentCoalitionScore($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      userProfile {\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n      }\n      scoreInfo {\n        value\n        rankInCoalition\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCurrentWallet($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      wallet\n    }\n  }\n"): (typeof documents)["\n  query getCurrentWallet($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      wallet\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLastPass($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      teamInfo {\n        lastPassed\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLastPass($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      teamInfo {\n        lastPassed\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLastRegistered($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLastRegistered($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      teamInfo {\n        lastRegistered\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLevelGraph($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      levelRecords {\n        after\n        userLevel\n        averageLevel\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLevelGraph($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      levelRecords {\n        after\n        userLevel\n        averageLevel\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLogtimeInfo($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      currMonthLogtime: logtimeByDateTemplate(dateTemplate: CURR_MONTH) {\n        data\n        start\n        end\n      }\n      lastMonthLogtime: logtimeByDateTemplate(dateTemplate: LAST_MONTH) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLogtimeInfo($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      currMonthLogtime: logtimeByDateTemplate(dateTemplate: CURR_MONTH) {\n        data\n        start\n        end\n      }\n      lastMonthLogtime: logtimeByDateTemplate(dateTemplate: LAST_MONTH) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPrefferedCluster($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      preferredClusterByDateTemplate(dateTemplate: CURR_MONTH) {\n        data {\n          name\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPrefferedCluster($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      preferredClusterByDateTemplate(dateTemplate: CURR_MONTH) {\n        data {\n          name\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPrefferedTime($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      preferredTimeByDateTemplate(dateTemplate: CURR_MONTH) {\n        data {\n          total\n          morning\n          daytime\n          evening\n          night\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPrefferedTime($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      preferredTimeByDateTemplate(dateTemplate: CURR_MONTH) {\n        data {\n          total\n          morning\n          daytime\n          evening\n          night\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCoalition($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      userProfile {\n        coalition {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCoalition($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      userProfile {\n        coalition {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTeamInfo($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      teamInfo {\n        lastRegistered\n        lastPassed\n        teams {\n          id\n          name\n          occurrence\n          projectPreview {\n            id\n            name\n            url\n          }\n          status\n          lastEventTime\n          isValidated\n          finalMark\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTeamInfo($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      teamInfo {\n        lastRegistered\n        lastPassed\n        teams {\n          id\n          name\n          occurrence\n          projectPreview {\n            id\n            name\n            url\n          }\n          status\n          lastEventTime\n          isValidated\n          finalMark\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserProfile($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      userProfile {\n        id\n        login\n        imgUrl\n        grade\n        displayname\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        titles {\n          titleId\n          name\n          selected\n          createdAt\n          updatedAt\n        }\n        level\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserProfile($login: String!) {\n    getPersonalGeneralPage(login: $login) {\n      userProfile {\n        id\n        login\n        imgUrl\n        grade\n        displayname\n        coalition {\n          id\n          name\n          slug\n          imageUrl\n          coverUrl\n          color\n          score\n          userId\n        }\n        titles {\n          titleId\n          name\n          selected\n          createdAt\n          updatedAt\n        }\n        level\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProjectInfo($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      id\n      name\n      skills\n      keywords\n      description\n      minUserCount\n      maxUserCount\n      duration\n      difficulty\n      currRegisteredTeamCount\n      closedTeamCount\n      averagePassFinalMark\n      evalInfo {\n        totalEvalCount\n        passCount\n        failCount\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProjectInfo($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      id\n      name\n      skills\n      keywords\n      description\n      minUserCount\n      maxUserCount\n      duration\n      difficulty\n      currRegisteredTeamCount\n      closedTeamCount\n      averagePassFinalMark\n      evalInfo {\n        totalEvalCount\n        passCount\n        failCount\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;