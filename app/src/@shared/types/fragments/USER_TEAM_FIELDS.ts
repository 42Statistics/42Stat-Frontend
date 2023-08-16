import { gql } from '@shared/__generated__';

export const USER_TEAM_FIELDS = gql(/* GraphQL */ `
  fragment userTeamFields on UserTeam {
    id
    name
    occurrence
    projectPreview {
      ...projectPreviewFields
    }
    status
    lastEventTime
    isValidated
    finalMark
  }
`);
