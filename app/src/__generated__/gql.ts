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
  '\n  query GetCurrMonthBlackholedCnt {\n    getHomePage {\n      currMonthBlackholedCnt\n      lastMonthBlackholedCnt\n    }\n  }\n':
    types.GetCurrMonthBlackholedCntDocument,
  '\n  query GetCurrRegisteredCntRank {\n    getHomePage {\n      currRegisteredCntRank {\n        projectPreview {\n          name\n        }\n        value\n      }\n    }\n  }\n':
    types.GetCurrRegisteredCntRankDocument,
  '\n  query GetCurrWeekEvalCnt {\n    getHomePage {\n      currWeekEvalCnt\n      lastWeekEvalCnt\n    }\n  }\n':
    types.GetCurrWeekEvalCntDocument,
  '\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        rank\n        passCnt\n        totalCnt\n      }\n    }\n  }\n':
    types.GetLastExamResultDocument,
  '\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n':
    types.GetLevelRankDocument,
  '\n  query GetMonthlyAccessTimeRank {\n    getHomePage {\n      monthlyAccessTimeRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n':
    types.GetMonthlyAccessTimeRankDocument,
  '\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n':
    types.GetMonthlyExpIncrementRankDocument,
  '\n  query GetTotalEvalCntRank {\n    getHomePage {\n      totalEvalCntRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n':
    types.GetTotalEvalCntRankDocument,
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
export function gql(
  source: '\n  query GetCurrMonthBlackholedCnt {\n    getHomePage {\n      currMonthBlackholedCnt\n      lastMonthBlackholedCnt\n    }\n  }\n',
): (typeof documents)['\n  query GetCurrMonthBlackholedCnt {\n    getHomePage {\n      currMonthBlackholedCnt\n      lastMonthBlackholedCnt\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetCurrRegisteredCntRank {\n    getHomePage {\n      currRegisteredCntRank {\n        projectPreview {\n          name\n        }\n        value\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetCurrRegisteredCntRank {\n    getHomePage {\n      currRegisteredCntRank {\n        projectPreview {\n          name\n        }\n        value\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetCurrWeekEvalCnt {\n    getHomePage {\n      currWeekEvalCnt\n      lastWeekEvalCnt\n    }\n  }\n',
): (typeof documents)['\n  query GetCurrWeekEvalCnt {\n    getHomePage {\n      currWeekEvalCnt\n      lastWeekEvalCnt\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        rank\n        passCnt\n        totalCnt\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetLastExamResult {\n    getHomePage {\n      lastExamResult {\n        rank\n        passCnt\n        totalCnt\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetLevelRank {\n    getHomePage {\n      levelRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetMonthlyAccessTimeRank {\n    getHomePage {\n      monthlyAccessTimeRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetMonthlyAccessTimeRank {\n    getHomePage {\n      monthlyAccessTimeRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetMonthlyExpIncrementRank {\n    getHomePage {\n      monthlyExpIncrementRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetTotalEvalCntRank {\n    getHomePage {\n      totalEvalCntRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetTotalEvalCntRank {\n    getHomePage {\n      totalEvalCntRank {\n        userPreview {\n          id\n          login\n          imgUrl\n        }\n        value\n      }\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
