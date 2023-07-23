import { gql } from '@shared/__generated__';

export const GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetProjectInfoZeroCostByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      name
      url
      description
      minUserCount
      maxUserCount
      estimateTime
      difficulty
      objectives
      skills
    }
  }
`);
