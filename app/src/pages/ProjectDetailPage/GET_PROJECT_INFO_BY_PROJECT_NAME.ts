import { gql } from '@/__generated__';

export const GET_PROJECT_INFO_BY_PROJECT_NAME = gql(/* GraphQL */ `
  query GetProjectInfoByProjectName($projectName: String!) {
    getProjectInfo(projectName: $projectName) {
      name
      description
      minUserCount
      maxUserCount
      estimateTime
      difficulty
      currRegisteredTeamCount
      closedTeamCount
      averagePassFinalMark
      objectives
      skills
      ...validatedRateFragment
    }
  }

  fragment validatedRateFragment on ProjectInfo {
    validatedRate {
      total
      fields {
        key
        value
      }
    }
  }
`);
