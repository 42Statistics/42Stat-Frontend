import { gql } from '@shared/__generated__';

export const GET_INDIVIDUALIZED_MESSAGE = gql(/* GraphQL */ `
  query GetIndividualizedMessage {
    getMyInfo {
      lastValidatedTeam {
        status
        lastEventTime
        projectPreview {
          id
          name
          url
        }
      }
      isNewMember
      blackholedAt
      experienceRank
      scoreRank
      evalCountRank
    }
  }
`);
