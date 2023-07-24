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
    "\n  query FindUserPreview($login: String!, $limit: Int!) {\n    findUserPreview(login: $login, limit: $limit) {\n      id\n      login\n      imgUrl\n    }\n  }\n": types.FindUserPreviewDocument,
    "\n  query FindProjectPreview($name: String!, $limit: Int!) {\n    findProjectPreview(name: $name, limit: $limit) {\n      id\n      name\n      url\n    }\n  }\n": types.FindProjectPreviewDocument,
    "\n  query GetMyProfile {\n    getPersonalGeneral {\n      userProfile {\n        id\n        login\n        imgUrl\n        displayname\n      }\n    }\n  }\n": types.GetMyProfileDocument,
    "\n  mutation GetNewAccessToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      message\n      accessToken\n      refreshToken\n      userId\n    }\n  }\n": types.GetNewAccessTokenDocument,
    "\n  mutation googleLogin($google: GoogleLoginInput!, $ftCode: String) {\n    googleLogin(google: $google, ftCode: $ftCode) {\n      __typename\n      ... on LoginSuccess {\n        message\n        accessToken\n        refreshToken\n        userId\n      }\n      ... on LoginNotLinked {\n        message\n      }\n    }\n  }\n": types.GoogleLoginDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  fragment coalitionFields on Coalition {\n    id\n    name\n    slug\n    imageUrl\n    coverUrl\n    color\n    score\n    userId\n  }\n": types.CoalitionFieldsFragmentDoc,
    "\n  fragment projectPreviewFields on ProjectPreview {\n    id\n    name\n    url\n  }\n": types.ProjectPreviewFieldsFragmentDoc,
    "\n  fragment userPreviewFields on UserPreview {\n    id\n    login\n    imgUrl\n  }\n": types.UserPreviewFieldsFragmentDoc,
    "\n  query GetEvalLogs(\n    $after: String\n    $first: Int!\n    $corrector: String\n    $corrected: String\n    $projectName: String\n    $outstandingOnly: Boolean\n    $sortOrder: EvalLogSortOrder!\n  ) {\n    getEvalLogs(\n      after: $after\n      first: $first\n      corrector: $corrector\n      corrected: $corrected\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      sortOrder: $sortOrder\n    ) {\n      edges {\n        cursor\n        node {\n          id\n          header {\n            corrector {\n              id\n              login\n              imgUrl\n            }\n            teamPreview {\n              id\n              name\n              url\n            }\n            beginAt\n            projectPreview {\n              id\n              name\n              url\n            }\n            flag {\n              id\n              name\n              isPositive\n            }\n          }\n          correctorReview {\n            mark\n            review\n          }\n          correctedsReview {\n            mark\n            review\n          }\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n": types.GetEvalLogsDocument,
    "\n  mutation ftLogin($ftCode: String!) {\n    ftLogin(ftCode: $ftCode) {\n      message\n      accessToken\n      refreshToken\n      userId\n    }\n  }\n": types.FtLoginDocument,
    "\n  query GetTigCountPerCoalitionByDateTemplate($dateTemplate: DateTemplate!) {\n    getHomeCoalition {\n      tigCountPerCoalitionByDateTemplate(dateTemplate: $dateTemplate) {\n        data {\n          coalition {\n            id\n            name\n            slug\n            imageUrl\n            coverUrl\n            color\n            score\n            userId\n          }\n          value\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetTigCountPerCoalitionByDateTemplateDocument,
    "\n  query GetScoreRecordsPerCoalition {\n    getHomeCoalition {\n      scoreRecordsPerCoalition {\n        coalition {\n          ...coalitionFields\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n": types.GetScoreRecordsPerCoalitionDocument,
    "\n  query GetTotalScoresPerCoalition {\n    getHomeCoalition {\n      totalScoresPerCoalition {\n        coalition {\n          ...coalitionFields\n        }\n        value\n      }\n    }\n  }\n": types.GetTotalScoresPerCoalitionDocument,
    "\n  query GetAverageCommentLength {\n    getHomeEval {\n      averageCommentLength\n    }\n  }\n": types.GetAverageCommentLengthDocument,
    "\n  query GetAverageFeedbackLength {\n    getHomeEval {\n      averageFeedbackLength\n    }\n  }\n": types.GetAverageFeedbackLengthDocument,
    "\n  query GetEvalCountByDateTemplate($dateTemplate: DateTemplate!) {\n    getHomeEval {\n      evalCountByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetEvalCountByDateTemplateDocument,
    "\n  query GetAverageEvalCountByDateTemplate($dateTemplate: DateTemplate!) {\n    getHomeEval {\n      averageEvalCountByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetAverageEvalCountByDateTemplateDocument,
    "\n  query GetCurrLastEvalCountByDateTemplate(\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getHomeEval {\n      currData: evalCountByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: evalCountByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetCurrLastEvalCountByDateTemplateDocument,
    "\n  query GetMyInfo {\n    getMyInfo {\n      userPreview {\n        id\n        login\n        imgUrl\n      }\n      recentValidatedTeam {\n        status\n        lastEventTime\n        projectPreview {\n          id\n          name\n          url\n        }\n      }\n      isNewMember\n      blackholedAt\n      experienceRank\n      scoreRank\n      evalCountRank\n    }\n  }\n": types.GetMyInfoDocument,
    "\n  query GetCurrRegisteredCountRanking($limit: Int!) {\n    getHomeTeam {\n      currRegisteredCountRanking(limit: $limit) {\n        projectPreview {\n          ...projectPreviewFields\n        }\n        rank\n        value\n      }\n    }\n  }\n": types.GetCurrRegisteredCountRankingDocument,
    "\n  query GetRecentExamResult($after: Int!) {\n    getHomeTeam {\n      recentExamResult(after: $after) {\n        data {\n          resultPerRank {\n            rank\n            rate {\n              total\n              fields {\n                key\n                value\n              }\n            }\n          }\n          beginAt\n          location\n        }\n      }\n    }\n  }\n": types.GetRecentExamResultDocument,
    "\n  query GetAliveUserCountRecords {\n    getHomeUser {\n      aliveUserCountRecords {\n        at\n        value\n      }\n    }\n  }\n": types.GetAliveUserCountRecordsDocument,
    "\n  query GetAverageDurationPerCircle {\n    getHomeUser {\n      averageDurationPerCircle {\n        circle\n        value\n      }\n    }\n  }\n": types.GetAverageDurationPerCircleDocument,
    "\n  query GetBlackholedCountPerCircle {\n    getHomeUser {\n      blackholedCountPerCircle {\n        circle\n        value\n      }\n    }\n  }\n": types.GetBlackholedCountPerCircleDocument,
    "\n  query GetBlackholedRate {\n    getHomeUser {\n      blackholedRate {\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n": types.GetBlackholedRateDocument,
    "\n  query GetCorrectionPointRanking($limit: Int!) {\n    getHomeUser {\n      correctionPointRanking(limit: $limit) {\n        userPreview {\n          ...userPreviewFields\n        }\n        value\n        rank\n      }\n    }\n  }\n": types.GetCorrectionPointRankingDocument,
    "\n  query GetMemberRate {\n    getHomeUser {\n      memberRate {\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n": types.GetMemberRateDocument,
    "\n  query GetBlackholedCountByDateTemplate(\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getHomeUser {\n      currData: blackholedCountByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: blackholedCountByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetBlackholedCountByDateTemplateDocument,
    "\n  query GetUserCountPerLevel {\n    getHomeUser {\n      userCountPerLevel {\n        level\n        value\n      }\n    }\n  }\n": types.GetUserCountPerLevelDocument,
    "\n  query GetWalletRanking($limit: Int!) {\n    getHomeUser {\n      walletRanking(limit: $limit) {\n        userPreview {\n          ...userPreviewFields\n        }\n        value\n        rank\n      }\n    }\n  }\n": types.GetWalletRankingDocument,
    "\n  query GetLanding {\n    getLanding {\n      daysAfterBeginAt\n      aliveCount\n      blackholedCount\n      memberCount\n      evalCount\n      trendingProject {\n        projectPreview {\n          id\n          name\n          url\n        }\n        rank\n        value\n      }\n    }\n  }\n": types.GetLandingDocument,
    "\n  query GetLeaderboardCoalitionScore(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardScore {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetLeaderboardCoalitionScoreDocument,
    "\n  query GetLeaderboardEvalCount(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardEvalCount {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetLeaderboardEvalCountDocument,
    "\n  query GetLeaderboardExpIncrement(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardExpIncrement {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetLeaderboardExpIncrementDocument,
    "\n  query GetLeaderboardLevel(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardLevel {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetLeaderboardLevelDocument,
    "\n  query GetPersonalEvalZeroCostByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      correctionPoint\n      recentComment\n    }\n  }\n": types.GetPersonalEvalZeroCostByLoginDocument,
    "\n  query GetPersonalGeneralZeroCostByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      beginAt\n      blackholedAt\n      ...coalitionScoreFragment\n      teamInfo {\n        lastPassed\n        lastRegistered\n      }\n      wallet\n    }\n  }\n\n  fragment coalitionScoreFragment on PersonalGeneral {\n    userProfile {\n      coalition {\n        ...coalitionFields\n      }\n    }\n    scoreInfo {\n      value\n      rankInCoalition\n    }\n  }\n": types.GetPersonalGeneralZeroCostByLoginDocument,
    "\n  query GetVersusZeroCost($login1: String!, $login2: String!) {\n    data1: getPersonalGeneral(login: $login1) {\n      userProfile {\n        level\n      }\n      beginAt\n    }\n    data2: getPersonalGeneral(login: $login2) {\n      userProfile {\n        level\n      }\n      beginAt\n    }\n  }\n": types.GetVersusZeroCostDocument,
    "\n  query GetAverageCommentLengthByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageCommentLength\n    }\n  }\n": types.GetAverageCommentLengthByLoginDocument,
    "\n  query GetAverageDurationByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageDuration\n    }\n  }\n": types.GetAverageDurationByLoginDocument,
    "\n  query GetAverageFeedbackLengthByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageFeedbackLength\n    }\n  }\n": types.GetAverageFeedbackLengthByLoginDocument,
    "\n  query GetAverageFinalMarkByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageFinalMark\n    }\n  }\n": types.GetAverageFinalMarkByLoginDocument,
    "\n  query GetDestinyRankingByLogin($login: String!, $limit: Int!) {\n    getPersonalEval(login: $login) {\n      destinyRanking(limit: $limit) {\n        userPreview {\n          ...userPreviewFields\n        }\n        value\n        rank\n      }\n    }\n  }\n": types.GetDestinyRankingByLoginDocument,
    "\n  query GetEvalCountByDateTemplateByLogin(\n    $login: String!\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getPersonalEval(login: $login) {\n      currData: countByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: countByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetEvalCountByDateTemplateByLoginDocument,
    "\n  query GetTotalCountByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      totalCount\n    }\n  }\n": types.GetTotalCountByLoginDocument,
    "\n  query GetTotalDurationByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      totalDuration\n    }\n  }\n": types.GetTotalDurationByLoginDocument,
    "\n  query GetCharacterByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      character {\n        name\n        imgUrl\n        types {\n          name\n          description\n          color\n        }\n      }\n    }\n  }\n": types.GetCharacterByLoginDocument,
    "\n  query GetLevelRecordsByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      userLevelRecords {\n        monthsPassed\n        level\n      }\n      promoLevelRecords {\n        monthsPassed\n        level\n      }\n      promoMemberLevelRecords {\n        monthsPassed\n        level\n      }\n    }\n  }\n": types.GetLevelRecordsByLoginDocument,
    "\n  query GetLogtimeByDateTemplate(\n    $login: String!\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getPersonalGeneral(login: $login) {\n      currData: logtimeByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: logtimeByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetLogtimeByDateTemplateDocument,
    "\n  query GetPreferredClusterByDateTemplateByLogin(\n    $login: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    getPersonalGeneral(login: $login) {\n      preferredClusterByDateTemplate(dateTemplate: $dateTemplate) {\n        data {\n          name\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetPreferredClusterByDateTemplateByLoginDocument,
    "\n  query GetPrefferedTimeByDateTemplateByLogin(\n    $login: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    getPersonalGeneral(login: $login) {\n      preferredTimeByDateTemplate(dateTemplate: $dateTemplate) {\n        data {\n          total\n          morning\n          daytime\n          evening\n          night\n        }\n        start\n        end\n      }\n    }\n  }\n": types.GetPrefferedTimeByDateTemplateByLoginDocument,
    "\n  query GetTeamInfoByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      teamInfo {\n        teams {\n          id\n          name\n          occurrence\n          projectPreview {\n            ...projectPreviewFields\n          }\n          status\n          lastEventTime\n          isValidated\n          finalMark\n        }\n      }\n    }\n  }\n": types.GetTeamInfoByLoginDocument,
    "\n  query GetUserProfileByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      userProfile {\n        id\n        login\n        imgUrl\n        grade\n        displayname\n        coalition {\n          ...coalitionFields\n        }\n        titles {\n          titleId\n          name\n          selected\n          createdAt\n          updatedAt\n        }\n        level\n      }\n    }\n  }\n": types.GetUserProfileByLoginDocument,
    "\n  query GetAverageCommentLengthVersus($login1: String!, $login2: String!) {\n    data1: getPersonalEval(login: $login1) {\n      averageCommentLength\n    }\n    data2: getPersonalEval(login: $login2) {\n      averageCommentLength\n    }\n  }\n": types.GetAverageCommentLengthVersusDocument,
    "\n  query GetAverageFinalMarkVersus($login1: String!, $login2: String!) {\n    data1: getPersonalEval(login: $login1) {\n      averageFinalMark\n    }\n    data2: getPersonalEval(login: $login2) {\n      averageFinalMark\n    }\n  }\n": types.GetAverageFinalMarkVersusDocument,
    "\n  query GetLevelRecordsVersus($login1: String!, $login2: String!) {\n    data1: getPersonalGeneral(login: $login1) {\n      userLevelRecords {\n        monthsPassed\n        level\n      }\n    }\n    data2: getPersonalGeneral(login: $login2) {\n      userLevelRecords {\n        monthsPassed\n        level\n      }\n    }\n  }\n": types.GetLevelRecordsVersusDocument,
    "\n  query GetEvalCountByDateTemplateVersus(\n    $login1: String!\n    $login2: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    data1: getPersonalEval(login: $login1) {\n      countByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n    data2: getPersonalEval(login: $login2) {\n      countByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetEvalCountByDateTemplateVersusDocument,
    "\n  query GetLogtimeByDateTemplateVersus(\n    $login1: String!\n    $login2: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    data1: getPersonalGeneral(login: $login1) {\n      logtimeByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n    data2: getPersonalGeneral(login: $login2) {\n      logtimeByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n": types.GetLogtimeByDateTemplateVersusDocument,
    "\n  query GetProjectInfoZeroCostByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      name\n      url\n      description\n      minUserCount\n      maxUserCount\n      estimateTime\n      difficulty\n      objectives\n      skills\n    }\n  }\n": types.GetProjectInfoZeroCostByProjectNameDocument,
    "\n  query GetAveragePassFinalMarkByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      averagePassFinalMark\n    }\n  }\n": types.GetAveragePassFinalMarkByProjectNameDocument,
    "\n  query GetClosedTeamCountByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      closedTeamCount\n    }\n  }\n": types.GetClosedTeamCountByProjectNameDocument,
    "\n  query GetCurrRegisteredTeamCountByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      currRegisteredTeamCount\n    }\n  }\n": types.GetCurrRegisteredTeamCountByProjectNameDocument,
    "\n  query GetValidatedRateByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      validatedRate {\n        total\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n": types.GetValidatedRateByProjectNameDocument,
    "\n  mutation DeleteAccount {\n    deleteAccount\n  }\n": types.DeleteAccountDocument,
    "\n  mutation LinkGoogle($google: GoogleLoginInput!) {\n    linkGoogle(google: $google) {\n      userId\n      linkedAccounts {\n        platform\n        id\n        email\n        linkedAt\n      }\n    }\n  }\n": types.LinkGoogleDocument,
    "\n  mutation UnlinkAccount($targetPlatform: String!) {\n    unlinkAccount(targetPlatform: $targetPlatform) {\n      userId\n      linkedAccounts {\n        platform\n        id\n        email\n        linkedAt\n      }\n    }\n  }\n": types.UnlinkAccountDocument,
    "\n  fragment AccountFields on Account {\n    userId\n    linkedAccounts {\n      platform\n      id\n      email\n      linkedAt\n    }\n  }\n": types.AccountFieldsFragmentDoc,
    "\n  query GetSetting {\n    getSetting {\n      account {\n        ...AccountFields\n      }\n    }\n  }\n": types.GetSettingDocument,
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
export function gql(source: "\n  query FindUserPreview($login: String!, $limit: Int!) {\n    findUserPreview(login: $login, limit: $limit) {\n      id\n      login\n      imgUrl\n    }\n  }\n"): (typeof documents)["\n  query FindUserPreview($login: String!, $limit: Int!) {\n    findUserPreview(login: $login, limit: $limit) {\n      id\n      login\n      imgUrl\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindProjectPreview($name: String!, $limit: Int!) {\n    findProjectPreview(name: $name, limit: $limit) {\n      id\n      name\n      url\n    }\n  }\n"): (typeof documents)["\n  query FindProjectPreview($name: String!, $limit: Int!) {\n    findProjectPreview(name: $name, limit: $limit) {\n      id\n      name\n      url\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMyProfile {\n    getPersonalGeneral {\n      userProfile {\n        id\n        login\n        imgUrl\n        displayname\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMyProfile {\n    getPersonalGeneral {\n      userProfile {\n        id\n        login\n        imgUrl\n        displayname\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation GetNewAccessToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      message\n      accessToken\n      refreshToken\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation GetNewAccessToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      message\n      accessToken\n      refreshToken\n      userId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation googleLogin($google: GoogleLoginInput!, $ftCode: String) {\n    googleLogin(google: $google, ftCode: $ftCode) {\n      __typename\n      ... on LoginSuccess {\n        message\n        accessToken\n        refreshToken\n        userId\n      }\n      ... on LoginNotLinked {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation googleLogin($google: GoogleLoginInput!, $ftCode: String) {\n    googleLogin(google: $google, ftCode: $ftCode) {\n      __typename\n      ... on LoginSuccess {\n        message\n        accessToken\n        refreshToken\n        userId\n      }\n      ... on LoginNotLinked {\n        message\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment coalitionFields on Coalition {\n    id\n    name\n    slug\n    imageUrl\n    coverUrl\n    color\n    score\n    userId\n  }\n"): (typeof documents)["\n  fragment coalitionFields on Coalition {\n    id\n    name\n    slug\n    imageUrl\n    coverUrl\n    color\n    score\n    userId\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment projectPreviewFields on ProjectPreview {\n    id\n    name\n    url\n  }\n"): (typeof documents)["\n  fragment projectPreviewFields on ProjectPreview {\n    id\n    name\n    url\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment userPreviewFields on UserPreview {\n    id\n    login\n    imgUrl\n  }\n"): (typeof documents)["\n  fragment userPreviewFields on UserPreview {\n    id\n    login\n    imgUrl\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEvalLogs(\n    $after: String\n    $first: Int!\n    $corrector: String\n    $corrected: String\n    $projectName: String\n    $outstandingOnly: Boolean\n    $sortOrder: EvalLogSortOrder!\n  ) {\n    getEvalLogs(\n      after: $after\n      first: $first\n      corrector: $corrector\n      corrected: $corrected\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      sortOrder: $sortOrder\n    ) {\n      edges {\n        cursor\n        node {\n          id\n          header {\n            corrector {\n              id\n              login\n              imgUrl\n            }\n            teamPreview {\n              id\n              name\n              url\n            }\n            beginAt\n            projectPreview {\n              id\n              name\n              url\n            }\n            flag {\n              id\n              name\n              isPositive\n            }\n          }\n          correctorReview {\n            mark\n            review\n          }\n          correctedsReview {\n            mark\n            review\n          }\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEvalLogs(\n    $after: String\n    $first: Int!\n    $corrector: String\n    $corrected: String\n    $projectName: String\n    $outstandingOnly: Boolean\n    $sortOrder: EvalLogSortOrder!\n  ) {\n    getEvalLogs(\n      after: $after\n      first: $first\n      corrector: $corrector\n      corrected: $corrected\n      projectName: $projectName\n      outstandingOnly: $outstandingOnly\n      sortOrder: $sortOrder\n    ) {\n      edges {\n        cursor\n        node {\n          id\n          header {\n            corrector {\n              id\n              login\n              imgUrl\n            }\n            teamPreview {\n              id\n              name\n              url\n            }\n            beginAt\n            projectPreview {\n              id\n              name\n              url\n            }\n            flag {\n              id\n              name\n              isPositive\n            }\n          }\n          correctorReview {\n            mark\n            review\n          }\n          correctedsReview {\n            mark\n            review\n          }\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ftLogin($ftCode: String!) {\n    ftLogin(ftCode: $ftCode) {\n      message\n      accessToken\n      refreshToken\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation ftLogin($ftCode: String!) {\n    ftLogin(ftCode: $ftCode) {\n      message\n      accessToken\n      refreshToken\n      userId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTigCountPerCoalitionByDateTemplate($dateTemplate: DateTemplate!) {\n    getHomeCoalition {\n      tigCountPerCoalitionByDateTemplate(dateTemplate: $dateTemplate) {\n        data {\n          coalition {\n            id\n            name\n            slug\n            imageUrl\n            coverUrl\n            color\n            score\n            userId\n          }\n          value\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTigCountPerCoalitionByDateTemplate($dateTemplate: DateTemplate!) {\n    getHomeCoalition {\n      tigCountPerCoalitionByDateTemplate(dateTemplate: $dateTemplate) {\n        data {\n          coalition {\n            id\n            name\n            slug\n            imageUrl\n            coverUrl\n            color\n            score\n            userId\n          }\n          value\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetScoreRecordsPerCoalition {\n    getHomeCoalition {\n      scoreRecordsPerCoalition {\n        coalition {\n          ...coalitionFields\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetScoreRecordsPerCoalition {\n    getHomeCoalition {\n      scoreRecordsPerCoalition {\n        coalition {\n          ...coalitionFields\n        }\n        records {\n          at\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTotalScoresPerCoalition {\n    getHomeCoalition {\n      totalScoresPerCoalition {\n        coalition {\n          ...coalitionFields\n        }\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTotalScoresPerCoalition {\n    getHomeCoalition {\n      totalScoresPerCoalition {\n        coalition {\n          ...coalitionFields\n        }\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageCommentLength {\n    getHomeEval {\n      averageCommentLength\n    }\n  }\n"): (typeof documents)["\n  query GetAverageCommentLength {\n    getHomeEval {\n      averageCommentLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageFeedbackLength {\n    getHomeEval {\n      averageFeedbackLength\n    }\n  }\n"): (typeof documents)["\n  query GetAverageFeedbackLength {\n    getHomeEval {\n      averageFeedbackLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEvalCountByDateTemplate($dateTemplate: DateTemplate!) {\n    getHomeEval {\n      evalCountByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEvalCountByDateTemplate($dateTemplate: DateTemplate!) {\n    getHomeEval {\n      evalCountByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageEvalCountByDateTemplate($dateTemplate: DateTemplate!) {\n    getHomeEval {\n      averageEvalCountByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAverageEvalCountByDateTemplate($dateTemplate: DateTemplate!) {\n    getHomeEval {\n      averageEvalCountByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrLastEvalCountByDateTemplate(\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getHomeEval {\n      currData: evalCountByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: evalCountByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrLastEvalCountByDateTemplate(\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getHomeEval {\n      currData: evalCountByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: evalCountByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMyInfo {\n    getMyInfo {\n      userPreview {\n        id\n        login\n        imgUrl\n      }\n      recentValidatedTeam {\n        status\n        lastEventTime\n        projectPreview {\n          id\n          name\n          url\n        }\n      }\n      isNewMember\n      blackholedAt\n      experienceRank\n      scoreRank\n      evalCountRank\n    }\n  }\n"): (typeof documents)["\n  query GetMyInfo {\n    getMyInfo {\n      userPreview {\n        id\n        login\n        imgUrl\n      }\n      recentValidatedTeam {\n        status\n        lastEventTime\n        projectPreview {\n          id\n          name\n          url\n        }\n      }\n      isNewMember\n      blackholedAt\n      experienceRank\n      scoreRank\n      evalCountRank\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrRegisteredCountRanking($limit: Int!) {\n    getHomeTeam {\n      currRegisteredCountRanking(limit: $limit) {\n        projectPreview {\n          ...projectPreviewFields\n        }\n        rank\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrRegisteredCountRanking($limit: Int!) {\n    getHomeTeam {\n      currRegisteredCountRanking(limit: $limit) {\n        projectPreview {\n          ...projectPreviewFields\n        }\n        rank\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetRecentExamResult($after: Int!) {\n    getHomeTeam {\n      recentExamResult(after: $after) {\n        data {\n          resultPerRank {\n            rank\n            rate {\n              total\n              fields {\n                key\n                value\n              }\n            }\n          }\n          beginAt\n          location\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRecentExamResult($after: Int!) {\n    getHomeTeam {\n      recentExamResult(after: $after) {\n        data {\n          resultPerRank {\n            rank\n            rate {\n              total\n              fields {\n                key\n                value\n              }\n            }\n          }\n          beginAt\n          location\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAliveUserCountRecords {\n    getHomeUser {\n      aliveUserCountRecords {\n        at\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAliveUserCountRecords {\n    getHomeUser {\n      aliveUserCountRecords {\n        at\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageDurationPerCircle {\n    getHomeUser {\n      averageDurationPerCircle {\n        circle\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAverageDurationPerCircle {\n    getHomeUser {\n      averageDurationPerCircle {\n        circle\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBlackholedCountPerCircle {\n    getHomeUser {\n      blackholedCountPerCircle {\n        circle\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlackholedCountPerCircle {\n    getHomeUser {\n      blackholedCountPerCircle {\n        circle\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBlackholedRate {\n    getHomeUser {\n      blackholedRate {\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlackholedRate {\n    getHomeUser {\n      blackholedRate {\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCorrectionPointRanking($limit: Int!) {\n    getHomeUser {\n      correctionPointRanking(limit: $limit) {\n        userPreview {\n          ...userPreviewFields\n        }\n        value\n        rank\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCorrectionPointRanking($limit: Int!) {\n    getHomeUser {\n      correctionPointRanking(limit: $limit) {\n        userPreview {\n          ...userPreviewFields\n        }\n        value\n        rank\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMemberRate {\n    getHomeUser {\n      memberRate {\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMemberRate {\n    getHomeUser {\n      memberRate {\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBlackholedCountByDateTemplate(\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getHomeUser {\n      currData: blackholedCountByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: blackholedCountByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlackholedCountByDateTemplate(\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getHomeUser {\n      currData: blackholedCountByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: blackholedCountByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserCountPerLevel {\n    getHomeUser {\n      userCountPerLevel {\n        level\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserCountPerLevel {\n    getHomeUser {\n      userCountPerLevel {\n        level\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetWalletRanking($limit: Int!) {\n    getHomeUser {\n      walletRanking(limit: $limit) {\n        userPreview {\n          ...userPreviewFields\n        }\n        value\n        rank\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetWalletRanking($limit: Int!) {\n    getHomeUser {\n      walletRanking(limit: $limit) {\n        userPreview {\n          ...userPreviewFields\n        }\n        value\n        rank\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLanding {\n    getLanding {\n      daysAfterBeginAt\n      aliveCount\n      blackholedCount\n      memberCount\n      evalCount\n      trendingProject {\n        projectPreview {\n          id\n          name\n          url\n        }\n        rank\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLanding {\n    getLanding {\n      daysAfterBeginAt\n      aliveCount\n      blackholedCount\n      memberCount\n      evalCount\n      trendingProject {\n        projectPreview {\n          id\n          name\n          url\n        }\n        rank\n        value\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLeaderboardCoalitionScore(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardScore {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLeaderboardCoalitionScore(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardScore {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLeaderboardEvalCount(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardEvalCount {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLeaderboardEvalCount(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardEvalCount {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLeaderboardExpIncrement(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardExpIncrement {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLeaderboardExpIncrement(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardExpIncrement {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLeaderboardLevel(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardLevel {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLeaderboardLevel(\n    $pageSize: Int!\n    $pageNumber: Int!\n    $dateTemplate: DateTemplate!\n  ) {\n    getLeaderboardLevel {\n      byDateTemplate(\n        pageSize: $pageSize\n        pageNumber: $pageNumber\n        dateTemplate: $dateTemplate\n      ) {\n        data {\n          me {\n            userPreview {\n              ...userPreviewFields\n            }\n            value\n            rank\n          }\n          totalRanking {\n            nodes {\n              userPreview {\n                ...userPreviewFields\n              }\n              value\n              rank\n            }\n            totalCount\n            pageSize\n            pageNumber\n          }\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPersonalEvalZeroCostByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      correctionPoint\n      recentComment\n    }\n  }\n"): (typeof documents)["\n  query GetPersonalEvalZeroCostByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      correctionPoint\n      recentComment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPersonalGeneralZeroCostByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      beginAt\n      blackholedAt\n      ...coalitionScoreFragment\n      teamInfo {\n        lastPassed\n        lastRegistered\n      }\n      wallet\n    }\n  }\n\n  fragment coalitionScoreFragment on PersonalGeneral {\n    userProfile {\n      coalition {\n        ...coalitionFields\n      }\n    }\n    scoreInfo {\n      value\n      rankInCoalition\n    }\n  }\n"): (typeof documents)["\n  query GetPersonalGeneralZeroCostByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      beginAt\n      blackholedAt\n      ...coalitionScoreFragment\n      teamInfo {\n        lastPassed\n        lastRegistered\n      }\n      wallet\n    }\n  }\n\n  fragment coalitionScoreFragment on PersonalGeneral {\n    userProfile {\n      coalition {\n        ...coalitionFields\n      }\n    }\n    scoreInfo {\n      value\n      rankInCoalition\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetVersusZeroCost($login1: String!, $login2: String!) {\n    data1: getPersonalGeneral(login: $login1) {\n      userProfile {\n        level\n      }\n      beginAt\n    }\n    data2: getPersonalGeneral(login: $login2) {\n      userProfile {\n        level\n      }\n      beginAt\n    }\n  }\n"): (typeof documents)["\n  query GetVersusZeroCost($login1: String!, $login2: String!) {\n    data1: getPersonalGeneral(login: $login1) {\n      userProfile {\n        level\n      }\n      beginAt\n    }\n    data2: getPersonalGeneral(login: $login2) {\n      userProfile {\n        level\n      }\n      beginAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageCommentLengthByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageCommentLength\n    }\n  }\n"): (typeof documents)["\n  query GetAverageCommentLengthByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageCommentLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageDurationByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageDuration\n    }\n  }\n"): (typeof documents)["\n  query GetAverageDurationByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageDuration\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageFeedbackLengthByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageFeedbackLength\n    }\n  }\n"): (typeof documents)["\n  query GetAverageFeedbackLengthByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageFeedbackLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageFinalMarkByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageFinalMark\n    }\n  }\n"): (typeof documents)["\n  query GetAverageFinalMarkByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      averageFinalMark\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetDestinyRankingByLogin($login: String!, $limit: Int!) {\n    getPersonalEval(login: $login) {\n      destinyRanking(limit: $limit) {\n        userPreview {\n          ...userPreviewFields\n        }\n        value\n        rank\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDestinyRankingByLogin($login: String!, $limit: Int!) {\n    getPersonalEval(login: $login) {\n      destinyRanking(limit: $limit) {\n        userPreview {\n          ...userPreviewFields\n        }\n        value\n        rank\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEvalCountByDateTemplateByLogin(\n    $login: String!\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getPersonalEval(login: $login) {\n      currData: countByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: countByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEvalCountByDateTemplateByLogin(\n    $login: String!\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getPersonalEval(login: $login) {\n      currData: countByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: countByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTotalCountByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query GetTotalCountByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTotalDurationByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      totalDuration\n    }\n  }\n"): (typeof documents)["\n  query GetTotalDurationByLogin($login: String!) {\n    getPersonalEval(login: $login) {\n      totalDuration\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCharacterByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      character {\n        name\n        imgUrl\n        types {\n          name\n          description\n          color\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCharacterByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      character {\n        name\n        imgUrl\n        types {\n          name\n          description\n          color\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLevelRecordsByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      userLevelRecords {\n        monthsPassed\n        level\n      }\n      promoLevelRecords {\n        monthsPassed\n        level\n      }\n      promoMemberLevelRecords {\n        monthsPassed\n        level\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLevelRecordsByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      userLevelRecords {\n        monthsPassed\n        level\n      }\n      promoLevelRecords {\n        monthsPassed\n        level\n      }\n      promoMemberLevelRecords {\n        monthsPassed\n        level\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLogtimeByDateTemplate(\n    $login: String!\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getPersonalGeneral(login: $login) {\n      currData: logtimeByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: logtimeByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLogtimeByDateTemplate(\n    $login: String!\n    $currDateTemplate: DateTemplate!\n    $lastDateTemplate: DateTemplate!\n  ) {\n    getPersonalGeneral(login: $login) {\n      currData: logtimeByDateTemplate(dateTemplate: $currDateTemplate) {\n        data\n        start\n        end\n      }\n      lastData: logtimeByDateTemplate(dateTemplate: $lastDateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPreferredClusterByDateTemplateByLogin(\n    $login: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    getPersonalGeneral(login: $login) {\n      preferredClusterByDateTemplate(dateTemplate: $dateTemplate) {\n        data {\n          name\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPreferredClusterByDateTemplateByLogin(\n    $login: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    getPersonalGeneral(login: $login) {\n      preferredClusterByDateTemplate(dateTemplate: $dateTemplate) {\n        data {\n          name\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPrefferedTimeByDateTemplateByLogin(\n    $login: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    getPersonalGeneral(login: $login) {\n      preferredTimeByDateTemplate(dateTemplate: $dateTemplate) {\n        data {\n          total\n          morning\n          daytime\n          evening\n          night\n        }\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPrefferedTimeByDateTemplateByLogin(\n    $login: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    getPersonalGeneral(login: $login) {\n      preferredTimeByDateTemplate(dateTemplate: $dateTemplate) {\n        data {\n          total\n          morning\n          daytime\n          evening\n          night\n        }\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTeamInfoByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      teamInfo {\n        teams {\n          id\n          name\n          occurrence\n          projectPreview {\n            ...projectPreviewFields\n          }\n          status\n          lastEventTime\n          isValidated\n          finalMark\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTeamInfoByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      teamInfo {\n        teams {\n          id\n          name\n          occurrence\n          projectPreview {\n            ...projectPreviewFields\n          }\n          status\n          lastEventTime\n          isValidated\n          finalMark\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserProfileByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      userProfile {\n        id\n        login\n        imgUrl\n        grade\n        displayname\n        coalition {\n          ...coalitionFields\n        }\n        titles {\n          titleId\n          name\n          selected\n          createdAt\n          updatedAt\n        }\n        level\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserProfileByLogin($login: String!) {\n    getPersonalGeneral(login: $login) {\n      userProfile {\n        id\n        login\n        imgUrl\n        grade\n        displayname\n        coalition {\n          ...coalitionFields\n        }\n        titles {\n          titleId\n          name\n          selected\n          createdAt\n          updatedAt\n        }\n        level\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageCommentLengthVersus($login1: String!, $login2: String!) {\n    data1: getPersonalEval(login: $login1) {\n      averageCommentLength\n    }\n    data2: getPersonalEval(login: $login2) {\n      averageCommentLength\n    }\n  }\n"): (typeof documents)["\n  query GetAverageCommentLengthVersus($login1: String!, $login2: String!) {\n    data1: getPersonalEval(login: $login1) {\n      averageCommentLength\n    }\n    data2: getPersonalEval(login: $login2) {\n      averageCommentLength\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAverageFinalMarkVersus($login1: String!, $login2: String!) {\n    data1: getPersonalEval(login: $login1) {\n      averageFinalMark\n    }\n    data2: getPersonalEval(login: $login2) {\n      averageFinalMark\n    }\n  }\n"): (typeof documents)["\n  query GetAverageFinalMarkVersus($login1: String!, $login2: String!) {\n    data1: getPersonalEval(login: $login1) {\n      averageFinalMark\n    }\n    data2: getPersonalEval(login: $login2) {\n      averageFinalMark\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLevelRecordsVersus($login1: String!, $login2: String!) {\n    data1: getPersonalGeneral(login: $login1) {\n      userLevelRecords {\n        monthsPassed\n        level\n      }\n    }\n    data2: getPersonalGeneral(login: $login2) {\n      userLevelRecords {\n        monthsPassed\n        level\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLevelRecordsVersus($login1: String!, $login2: String!) {\n    data1: getPersonalGeneral(login: $login1) {\n      userLevelRecords {\n        monthsPassed\n        level\n      }\n    }\n    data2: getPersonalGeneral(login: $login2) {\n      userLevelRecords {\n        monthsPassed\n        level\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEvalCountByDateTemplateVersus(\n    $login1: String!\n    $login2: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    data1: getPersonalEval(login: $login1) {\n      countByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n    data2: getPersonalEval(login: $login2) {\n      countByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEvalCountByDateTemplateVersus(\n    $login1: String!\n    $login2: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    data1: getPersonalEval(login: $login1) {\n      countByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n    data2: getPersonalEval(login: $login2) {\n      countByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLogtimeByDateTemplateVersus(\n    $login1: String!\n    $login2: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    data1: getPersonalGeneral(login: $login1) {\n      logtimeByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n    data2: getPersonalGeneral(login: $login2) {\n      logtimeByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLogtimeByDateTemplateVersus(\n    $login1: String!\n    $login2: String!\n    $dateTemplate: DateTemplate!\n  ) {\n    data1: getPersonalGeneral(login: $login1) {\n      logtimeByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n    data2: getPersonalGeneral(login: $login2) {\n      logtimeByDateTemplate(dateTemplate: $dateTemplate) {\n        data\n        start\n        end\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProjectInfoZeroCostByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      name\n      url\n      description\n      minUserCount\n      maxUserCount\n      estimateTime\n      difficulty\n      objectives\n      skills\n    }\n  }\n"): (typeof documents)["\n  query GetProjectInfoZeroCostByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      name\n      url\n      description\n      minUserCount\n      maxUserCount\n      estimateTime\n      difficulty\n      objectives\n      skills\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAveragePassFinalMarkByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      averagePassFinalMark\n    }\n  }\n"): (typeof documents)["\n  query GetAveragePassFinalMarkByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      averagePassFinalMark\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetClosedTeamCountByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      closedTeamCount\n    }\n  }\n"): (typeof documents)["\n  query GetClosedTeamCountByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      closedTeamCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrRegisteredTeamCountByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      currRegisteredTeamCount\n    }\n  }\n"): (typeof documents)["\n  query GetCurrRegisteredTeamCountByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      currRegisteredTeamCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetValidatedRateByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      validatedRate {\n        total\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetValidatedRateByProjectName($projectName: String!) {\n    getProjectInfo(projectName: $projectName) {\n      validatedRate {\n        total\n        fields {\n          key\n          value\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAccount {\n    deleteAccount\n  }\n"): (typeof documents)["\n  mutation DeleteAccount {\n    deleteAccount\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LinkGoogle($google: GoogleLoginInput!) {\n    linkGoogle(google: $google) {\n      userId\n      linkedAccounts {\n        platform\n        id\n        email\n        linkedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LinkGoogle($google: GoogleLoginInput!) {\n    linkGoogle(google: $google) {\n      userId\n      linkedAccounts {\n        platform\n        id\n        email\n        linkedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnlinkAccount($targetPlatform: String!) {\n    unlinkAccount(targetPlatform: $targetPlatform) {\n      userId\n      linkedAccounts {\n        platform\n        id\n        email\n        linkedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UnlinkAccount($targetPlatform: String!) {\n    unlinkAccount(targetPlatform: $targetPlatform) {\n      userId\n      linkedAccounts {\n        platform\n        id\n        email\n        linkedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AccountFields on Account {\n    userId\n    linkedAccounts {\n      platform\n      id\n      email\n      linkedAt\n    }\n  }\n"): (typeof documents)["\n  fragment AccountFields on Account {\n    userId\n    linkedAccounts {\n      platform\n      id\n      email\n      linkedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSetting {\n    getSetting {\n      account {\n        ...AccountFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSetting {\n    getSetting {\n      account {\n        ...AccountFields\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;